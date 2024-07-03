import React, { useEffect, useRef, useState } from "react"
import styles from './VideoChat.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { CopyToClipboard } from "react-copy-to-clipboard"
import Peer from "simple-peer"
import io from "socket.io-client"
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const socket = io.connect('http://localhost:8670')

function VideoChat({ roomId }) {
    const [me, setMe] = useState("667cbb801104c548913c884a"); // myId
    const user = useSelector((state) => state.userLog.user?.user);
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    useEffect(() => {
        if (user) {
            console.log(user);
            setMe(user._id);
            setName(`${user?.firstName} ${user?.lastName}`);
        }
    }, [user]);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream);
            myVideo.current.srcObject = stream;
        });

        socket.on("me", (id) => {
            setMe(id);
        });

        socket.on("callUser", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        });

        return () => {
            socket.off("me");
            socket.off("callUser");
        };
    }, []);

    const callUser = (id) => {
        console.log("ID::", id);
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        });
        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            });
        });
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream;
        });
        socket.on("callAccepted", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;
    }

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        });
        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller });
        });
        peer.on("stream", (stream) => {
            userVideo.current.srcObject = stream;
        });

        peer.signal(callerSignal);
        connectionRef.current = peer;
    }

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
    }

    return (
        <div className={styles.VideoChat}>
            <h1 style={{ textAlign: "center" }}>Zoomish</h1>
            <Box className={styles.container}>
                <Box className={styles.videoContainer}>
                    <Box className="video">
                        {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px" }} />}
                    </Box>
                    <Box className="video">
                        {callAccepted && !callEnded ?
                            <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} /> :
                            null}
                    </Box>
                </Box>
                <Box className={styles.myId}>
                    <TextField
                        id="filled-basic"
                        label="Name"
                        variant="filled"
                        value={name}
                        disabled={true}
                        style={{ marginBottom: "20px" }}
                    />
                    <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
                        <Button variant="contained" color="primary" startIcon={<AssignmentIcon fontSize="large" />}>
                            Copy ID
                        </Button>
                    </CopyToClipboard>

                    <TextField
                        id="filled-basic"
                        label="ID to call"
                        variant="filled"
                        value={idToCall}
                        onChange={(e) => setIdToCall(e.target.value)}
                    />
                    <Box className={styles.callButton}>
                        {callAccepted && !callEnded ? (
                            <Button variant="contained" color="secondary" onClick={leaveCall}>
                                End Call
                            </Button>
                        ) : (
                            <IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                                <LocalPhoneIcon fontSize="large" />
                            </IconButton>
                        )}
                        {idToCall}
                    </Box>
                </Box>
                <Box>
                    {receivingCall && !callAccepted ? (
                        <Box className={styles.caller}>
                            <Typography variant="h4">{name} is calling...</Typography>
                            <Button variant="contained" color="primary" onClick={answerCall}>
                                Answer
                            </Button>
                        </Box>
                    ) : null}
                </Box>
            </Box>
        </div>
    )
}

export default VideoChat;
