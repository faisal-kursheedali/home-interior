import React from 'react';
import "./loading.css";

const Loading = () => {
  return (
    <>
    <div className="loading-container">
        <div className="loading-box">
            <img src={`${window.location.origin}/assets/loading.svg`} alt="" className="loading-img" />
        <div className="loading-content-box">Loading</div>
        </div>
    </div>
    
    </>
  )
}

export default Loading