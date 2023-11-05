import React from 'react'
import video from '../assets/img/smk.mp4'

function Video() {
    const videoId = 'RfwrndR_uAU';

    return (
        <div className='video-home'>
            <div>
                <h2 className='fw-bold mb-5' style={{color:'#231942'}}>Profile SMKN <span style={{color:'#dc3545'}}>1 CIMAHI</span></h2>
            </div>
            <video className='video' controls="controls" loop="loop">
                <source src={video} type="video/mp4"/>
                Maaf, browser Anda tidak mendukung pemutaran video.
            </video>
        </div>
    )
}

export default Video