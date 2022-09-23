import React from 'react'
import './index.css'
import img from '../../images/Saaim.jpg'
import { RiLiveFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";

export default function Body() {
    return (
        <>
            <div className="stories">

            </div>
            <div className="createPost">
                <div className='createPost-input-box'>
                    <span> <img src={img} className='postImage' width='100px' alt="" /></span>
                    <span><input type="text" className='createPost-input' placeholder="What's on your mind, Saaim?" /></span>
                </div>
                <div className='createPost-button'>
                    <div className='createPost-live'>
                        <span className='live-icon'><RiLiveFill /></span>
                        <span className='live-text'>Live Video</span>
                    </div>
                    <div className='createPost-gallery'>
                        <span className='gallery-icon'><FaPhotoVideo /></span>
                        <span className='gallery-text'>Photo/Video</span>
                    </div>
                    <div className='createPost-feeling'>
                        <span className='feeling-icon'><MdEmojiEmotions /></span>
                        <span className='feeling-text'>Feeling/Activity</span>
                    </div>
                </div>
            </div>
            <div className="post">

            </div>
        </>
    )
}


