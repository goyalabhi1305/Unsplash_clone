import React from 'react';
import "./Topics.css";

function Topics() {
    return (
        <div className="bl_nav">
            <a href="/editorial">Editorial</a>
            <div className="scroll_tpoic">
                <a href="/wallpaper">Wallpaper</a>
                <a href="/people">People</a>
                <a href="/nature">Nature</a>
                <a href="/architecture">Architecture</a>
            </div>
            <a href="/all">View all</a>
        </div>
    )
}

export default Topics
