import React from 'react'

export default function NavbarLinks(props) {
    const { text, img,href,targetBlank } = props.data;
    return (
        <a className='NavbarLinks_main' href={href} target={targetBlank?'_blank':'_parent'} rel="noreferrer">
            <div className="NavbarLinks_img_div">
                <div className="NavbarLinks_img" style={{ backgroundImage: `url(${img})`,width:targetBlank?'':'0em' }}> </div>
            </div>
            <div className="NavbarLinks_text_div">
                {text}
            </div>
        </a >
    )
}
