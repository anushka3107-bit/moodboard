import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import MainPage from '../src/image/mainpage.mp4'
// import Video from "./video.mp4";

const App = () => {
  return (
    <div className='app'>
      <video controls autostart autoPlay src={MainPage} type="video/mp4" />
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App