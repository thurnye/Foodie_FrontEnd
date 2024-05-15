import React from 'react'
import './VideoPlayer.css';
import ReactPlayer from 'react-player/youtube'

export default function VideoPlayer({link}) {
  return (
    <ReactPlayer 
    className='reactPlayer'
    url={link}
    width= {{sm: 200, md: 300, lg: 500}}
    style={{
    maxWidth: 560
    }}/>
  )
}
