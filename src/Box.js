import React from 'react'
import "./Box.css"

function Box() {
    return (
        <div className="box">
            <div className="left">
                <h1 className="hdr">Nature</h1>
                <p>Let’s celebrate the magic of Mother Earth — with images of everything our planet has to offer, from stunning seascapes, starry skies, and everything in between.</p>
                <div className="pow_spp">
                <p className="sprt">Supported by &nbsp;</p><img className="ms_img" src="https://images.unsplash.com/file-1613596651301-295c081cd4b7image" alt="" />
                </div>
                <a className="link_blk" href="/original">Original by Design</a>
            </div>
            <div className="lft_cnt">
                <div className="right">
                    <div className="part">
                        <p className="titl_bx">Status</p>
                        <p className="gr_active">Open</p>
                    </div>
                    <div className="part">
                        <p className="titl_bx">Curator</p>
                        <p className="titl_bx">
                            <img src="https://images.unsplash.com/profile-1544707963613-16baf868f301?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff" alt=""/>
                        </p>
                    </div>     
                    <div className="part">
                        <p className="titl_bx">Contributions</p>
                        <p className="titl_bx"><strong>8.2k</strong></p>
                    </div>   
                    <div className="part">
                        <p className="titl_bx">Top contributors</p>
                        <p className="titl_bx">
                            <img className="img_cntb" src="https://images.unsplash.com/profile-1593541755358-41ff2a4e41efimage?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt=""/>
                            <img className="img_cntb" src="https://images.unsplash.com/profile-1516997253075-2a25da8007e7?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt=""/>
                            <img className="img_cntb" src="https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt=""/>
                            <img className="img_cntb" src="https://images.unsplash.com/profile-1598364736729-8dabcc292b82image?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt=""/>
                            <img className="img_cntb" src="https://images.unsplash.com/profile-1508107410047-a34950174b6b?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff" alt=""/>
                        </p>
                    </div>          
                </div>
                <button className="btm_btn">Submit to <strong>Nature</strong></button>
            </div>
        </div>
    )
}

export default Box
