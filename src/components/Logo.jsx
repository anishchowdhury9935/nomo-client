import React from 'react'
import logo from '../media/logo.png'
export default function Logo() {
    return (
        <div className="Logo_main">
            <div className="Logo_img_div">
                <img src={logo} alt="" id='Logo_img'/>
            </div>
            <div className="Logo_text_div">
                <div className="Logo_text">
                    nomo
                </div>
            </div>
        </div>
    )
}
