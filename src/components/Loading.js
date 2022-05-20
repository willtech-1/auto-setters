import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className='loading'><h4>Cars Loading...</h4>
    <img src={loadingGif} alt="loading-gif" /></div>
  )
}

export default Loading