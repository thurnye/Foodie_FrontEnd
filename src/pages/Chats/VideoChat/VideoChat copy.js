import React, { useEffect, useRef, useState } from 'react';
import styles from './VideoChat.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Peer from 'simple-peer';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io.connect('http://localhost:8670');

function VideoChat({
  roomId,
  setOpen,
  open,
  setReceivingCall,
  answerCall,
  callAccepted,
  setCallAccepted,
}) {
  const [me, setMe] = useState('');
  const user = useSelector((state) => state.userLog.user?.user);
  const [stream, setStream] = useState();
  const [caller, setCaller] = useState('');
  const [callerSignal, setCallerSignal] = useState();
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState('');
  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const connectionRef = useRef();

  useEffect(() => {
    if (user) {
      console.log('User loaded:', user);
      setName(`${user?.firstName} ${user?.lastName}`);
    }
  }, [user]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) {
          myVideo.current.srcObject = stream;
        }
      });

    socket.emit('join video room', roomId);

    socket.on('me', (id) => {
      console.log('My socket ID:', id);
      setMe(id);
    });

    socket.on('callUser', (data) => {
      console.log('Incoming call data:', data);
      if (data.roomId === roomId) { // Ensure the call is for the current room
        setReceivingCall(true);
        setCaller(data.from);
        setName(data.name);
        setCallerSignal(data.signal);
      }
    });

    return () => {
      socket.off('me');
      socket.off('callUser');
    };
  }, [roomId]);

  useEffect(() => {
    if (me && stream) {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: stream,
      });
      socket.on('callAccepted', (signal) => {
        console.log('Call accepted with signal:', signal);
        setCallAccepted(true);
        peer.signal(signal);
      });

      socket.on('callEnded', () => {
        console.log('Call ended by the other user.');
        setCallEnded(true);
        connectionRef.current && connectionRef.current.destroy();
      });

      connectionRef.current = peer;
    }
  }, [open, me, stream, roomId]);

  useEffect(() => {
    if (answerCall && callerSignal) {
      console.log('Answering call from:', caller);
      setCallAccepted(true);
      const peer = new Peer({
        initiator: false,
        trickle: false,
        stream: stream,
      });

      peer.on('signal', (data) => {
        console.log('Answering call with signal data:', data);
        socket.emit('answerCall', { signal: data, to: caller });
      });

      peer.on('stream', (stream) => {
        if (userVideo.current) {
          console.log('Received stream (receiver), setting user video srcObject.');
          userVideo.current.srcObject = stream;
        }
      });

      peer.signal(callerSignal);
      connectionRef.current = peer;
    }
  }, [answerCall, caller, callerSignal, stream]);

  const leaveCall = () => {
    console.log('Leaving call with:', caller);
    setCallEnded(true);
    connectionRef.current && connectionRef.current.destroy();
    socket.emit('leaveCall', { to: caller });
    setOpen(!open);
  };

  const callUser = () => {
    console.log('Calling users in room:', roomId);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on('signal', (data) => {
      console.log('Peer signaling data (caller):', data);
      socket.emit('callUser', {
        roomId: roomId,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on('stream', (stream) => {
      if (userVideo.current) {
        console.log('Received stream (caller), setting user video srcObject.');
        userVideo.current.srcObject = stream;
      }
    });

    connectionRef.current = peer;
  };

  return (
    <div className={styles.VideoChat}>
      <Box className={styles.container}>
        <Box className={styles.videoContainer}>
          <Box className='video'>
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: '300px' }}
              />
            )}
          </Box>
          <Box className='video'>
            {callAccepted && !callEnded && (
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: '300px' }}
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box className={styles.myId}>
        <TextField
          id='filled-basic'
          label='Name'
          variant='filled'
          value={name}
          disabled={true}
          style={{ marginBottom: '20px' }}
        />

        <Box className={styles.callButton}>
          {callAccepted && !callEnded ? (
            <Button variant='contained' color='secondary' onClick={leaveCall}>
              End Call
            </Button>
          ) : (
            <IconButton color='primary' aria-label='call' onClick={callUser}>
              <LocalPhoneIcon fontSize='large' />
            </IconButton>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default VideoChat;
