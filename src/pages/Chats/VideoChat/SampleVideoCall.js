import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';

const socket = io('http://localhost:8670'); // Correct server address

const VideoCall = ({ roomId }) => {
  const [isCalling, setIsCalling] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const localVideo = useRef();
  const remoteVideo = useRef();
  const peerRef = useRef();

  useEffect(() => {
    socket.emit('joinRoom', roomId);

    socket.on('incomingCall', handleIncomingCall);
    socket.on('callAccepted', handleCallAccepted);
    socket.on('callDeclined', handleCallDeclined);
    socket.on('signal', handleSignal);

    return () => {
      socket.off('incomingCall', handleIncomingCall);
      socket.off('callAccepted', handleCallAccepted);
      socket.off('callDeclined', handleCallDeclined);
      socket.off('signal', handleSignal);
    };
  }, [roomId]);

  const startCall = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideo.current.srcObject = stream;
      peerRef.current = new SimplePeer({
        initiator: true,
        trickle: false,
        stream,
      });

      peerRef.current.on('signal', (data) => {
        socket.emit('signal', { roomId, signal: data });
      });

      peerRef.current.on('stream', (stream) => {
        remoteVideo.current.srcObject = stream;
      });

      setIsCalling(true);
      console.log(`Requesting video call in room ${roomId}`);
      socket.emit('requestVideoCall', { roomId });
    }).catch((err) => console.error('Error accessing media devices.', err));
  };

  const acceptCall = () => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
      localVideo.current.srcObject = stream;
      peerRef.current = new SimplePeer({
        initiator: false,
        trickle: false,
        stream,
      });

      peerRef.current.on('signal', (data) => {
        socket.emit('signal', { roomId, signal: data });
      });

      peerRef.current.on('stream', (stream) => {
        remoteVideo.current.srcObject = stream;
      });

      socket.emit('acceptCall', { roomId });
    }).catch((err) => console.error('Error accessing media devices.', err));
  };

  const declineCall = () => {
    socket.emit('declineCall', { roomId });
    setIsCalling(false);
  };

  const handleIncomingCall = ({ caller }) => {
    console.log(`Incoming call from ${caller}`);
    const accept = window.confirm(`${caller} is calling. Do you want to accept?`);
    if (accept) {
      acceptCall();
    } else {
      declineCall();
    }
  };

  const handleCallAccepted = () => {
    console.log('Call accepted');
    setCallAccepted(true);
  };

  const handleCallDeclined = () => {
    console.log('Call declined');
    setIsCalling(false);
    alert('Call was declined');
  };

  const handleSignal = ({ signal }) => {
    console.log('Signal received');
    peerRef.current.signal(signal);
  };

  return (
    <div>
      <button onClick={startCall} disabled={isCalling || callAccepted}>Call</button>
      {isCalling && !callAccepted && <p>Calling...</p>}
      <video ref={localVideo} autoPlay muted />
      <video ref={remoteVideo} autoPlay />
    </div>
  );
};

export default VideoCall;
