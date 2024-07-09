import React, { useEffect, useRef, useState } from "react";
import styles from './VideoChat.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io from "socket.io-client";
import { useSelector } from "react-redux";

const socket = io.connect('http://localhost:8670');

function VideoChat({ roomId, setOpen, open, setReceivingCall, answerCall, callAccepted, setCallAccepted }) {
    const [me, setMe] = useState("");
    const user = useSelector((state) => state.userLog.user?.user);
    const [stream, setStream] = useState();
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [idToCall, setIdToCall] = useState("");
    const [id, setId] = useState();
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const myVideo = useRef(null);
    const userVideo = useRef(null);
    const connectionRef = useRef();

    useEffect(() => {
        if (user) {
            console.log("User loaded:", user);
            setName(`${user?.firstName} ${user?.lastName}`);

        }
    }, [user]);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream);
            if (myVideo.current) {
                myVideo.current.srcObject = stream;
            }
        });
        socket.emit('join video room', roomId);

        socket.on("me", (id) => {
            console.log("My socket ID:", id);
            setMe(id);
        });

        socket.on("callUser", (data) => {
            console.log("Incoming Call data:", data);
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        });

        return () => {
            socket.off("me");
            socket.off("callUser");
        };
    }, [roomId]);


    useEffect(() => {
        if(id){
            const peer = new Peer({
                initiator: true,
                trickle: false,
                stream: stream
            });
    
            peer.on("signal", (data) => {
                console.log("Peer signaling data:", data);
                socket.emit("callUser", {
                    userToCall: id,
                    signalData: data,
                    from: me,
                    name: name
                });
            });
    
            peer.on("stream", (stream) => {
                if (userVideo.current) {
                    console.log("Received stream, setting user video srcObject.");
                    userVideo.current.srcObject = stream;
                }
            });
    
            socket.on("callAccepted", (signal) => {
                console.log("Call accepted with signal:", signal);
                setCallAccepted(true);
                peer.signal(signal);
            });
    
            socket.on("callEnded", () => {
                console.log("Call ended by the other user.");
                setCallEnded(true);
                connectionRef.current && connectionRef.current.destroy();
            });
    
            connectionRef.current = peer;
        }
    },[open, id]);

    useEffect(() => {
        if(answerCall){
            console.log("Answering call from:", caller);
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        });

        peer.on("signal", (data) => {
            console.log("Answering call with signal data:", data);
            socket.emit("answerCall", { signal: data, to: caller });
        });

        peer.on("stream", (stream) => {
            if (userVideo.current) {
                console.log("Received stream, setting user video srcObject.");
                userVideo.current.srcObject = stream;
            }
        });

        peer.signal(callerSignal);
        connectionRef.current = peer;
        }
    },[answerCall])



    const leaveCall = () => {
        console.log("Leaving call with:", caller);
        setCallEnded(true);
        connectionRef.current.destroy();
        socket.emit("leaveCall", { to: caller });
        setOpen(!open)
    };

    return (
        <div className={styles.VideoChat}>
            
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
                        <IconButton color="primary" aria-label="call" onClick={() => setId(idToCall)}>
                            <LocalPhoneIcon fontSize="large" />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </div>
    );
}

export default VideoChat;
