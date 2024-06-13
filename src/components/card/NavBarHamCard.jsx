import React from 'react'

export default function NavBarHamCard(props) {
    const { text, img, href, targetBlank } = props.data
    return (
        <a className='NavBarHamCard_main' href={href} target={targetBlank ? '_blank' : '_parent'} rel='noreferrer'>
            <div className="NavBarHamCard_img_div">
                <img src={img} alt="" className='NavBarHamCard_img' />
            </div>
            <div className="NavBarHamCard_text">
                <h2>{text}</h2>
            </div>
        </a>
    )
}
