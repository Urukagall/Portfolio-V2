import { useState } from 'react'
import './App.css'
import HomeScreenVideo from "./assets/Video/test.mp4";

function HomePage() {

  return (
    <>
        <video
            src={HomeScreenVideo}
            autoPlay
            muted
            loop
            playsInline
            className="VideoHomeScreen"
            controls={false}/>
        <h1 className="TitleHomeScreen">Dany JORGE AFONSO</h1>
    </>
  )
}

export default HomePage
