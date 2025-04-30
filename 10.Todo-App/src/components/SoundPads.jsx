import React from "react";
import "../css/ColorGrid.css"; // CSS dosyasını unutma

const SoundPads = () => {
    return (
        <div className='grid-container'>
            <button className='color-box red'></button>
            <button className='color-box blue'></button>
            <button className='color-box green'></button>
            <button className='color-box yellow'></button>
            <button className='color-box purple'></button>
            <button className='color-box pink'></button>
            <button className='color-box teal'></button>
            <button className='color-box orange'></button>
        </div>
    );
};

export default SoundPads;
