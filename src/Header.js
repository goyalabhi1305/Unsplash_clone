import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="logo" src="https://unsplash-assets.imgix.net/marketing/press-logotype.svg?auto=format&fit=crop&q=60" alt="" />
            <input className="srch_box" placeholder="Search..." type="text" name="" id="" />
            <a href="#">Brands<sup className="new">New</sup></a>
            <a href="#">Explore</a>
            <button className="wht_btn">Submit a photo</button> 
            <a href="#">Login</a>
            <button className="grn_btn">Join Free</button> 

        </div>
    )
}

export default Header
