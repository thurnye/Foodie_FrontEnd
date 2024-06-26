import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';

const VideoRoom = ({roomId}) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const otherUser = useRef();
  const userStream = useRef();

  function callUser(otherUserId) {
    peerRef.current = createPeer(otherUserId);
    userStream.current.getTracks.forEach((track) =>
      peerRef.current.addTrack(track, userStream.current)
    );
  }

  //get user audio and video from the browser
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        console.log(userVideo.current)
        userVideo.current.srcObject = stream;
        userStream.current = stream;

        socketRef.current = io.connect('http://localhost:8670/');
        socketRef.current.emit('join video room', roomId);

        socketRef.current.on('other user', (otherUserId) => {
          callUser(otherUserId);
          otherUser.current = otherUserId;
        });

        socketRef.current.on('user joined', (joinedUserId) => {
          otherUser.current = joinedUserId;
        });

        socketRef.current.on('offer', handleReceiveCall);
        socketRef.current.on('answer', handleAnswer);
        socketRef.current.on('ice-candidate', handleNewICECandidateMsg);
      });
  }, []);

  function createPeer(otherUserId) {
    // the receiverId
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: 'stun:stun.stunprotocol.org',
        },
        {
          urls: 'turn:numb.viagenie.ca',
          credential: 'muazkh',
          username: 'webrtc@live.com',
        },
      ],
    });
    peer.onicecandidate = handleICECandidateEvent;
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(otherUserId);
    return peer;
  }

  function handleNegotiationNeededEvent(otherUserId) {
    peerRef.current
      .createOffer()
      .then((offer) => {
        return peerRef.current.setLocalDescription(offer);
      })
      .then(() => {
        const payload = {
          target: otherUserId,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit('offer', payload);
      })
      .catch((e) => console.log(e));
  }

  function handleReceiveCall(incoming) {
    peerRef.current = createPeer();
    const desc = new RTCSessionDescription(incoming.sdp);
    peerRef.current
      .setRemoteDescription(desc)
      .then(() => {
        userStream.current
          .getTracks()
          .forEach((track) =>
            peerRef.current.addTrack(track, userStream.current)
          );
      })
      .then(() => {
        return peerRef.current.createAnswer();
      })
      .then((answer) => {
        return peerRef.current.setLocalDescription(answer);
      })
      .then(() => {
        const payload = {
          target: incoming.caller,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit('answer', payload);
      })
      .catch((e) => console.log(e));
  }

  const handleAnswer = (message) => {
    const desc = new RTCSessionDescription(message.sdp);
    peerRef.current.setRemoteDescription(desc).catch((e) => console.log(e));
  };

  const handleICECandidateEvent = (e) => {
    if(e.candidate){
        const payload = {
            target: otherUser.current,
            candidate : e.candidate
        }
        socketRef.current.emit("ice-candidate", payload)
    }
  }

  const handleNewICECandidateMsg = (incoming) => {
    const candidate = new RTCIceCandidate(incoming);
    peerRef.current.addIceCandidate(candidate)
    .catch(e => console.log(e))
  }

  const handleTrackEvent = (e) => {
    partnerVideo.current.srcObject = e.streams[0]
  }

  return (
    <div>
      <video autoPlay ref={userVideo} />
      <video autoPlay ref={partnerVideo} />
    </div>
  );
};

export default VideoRoom;
