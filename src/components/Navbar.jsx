import { useContext } from 'react'
import Logo from './Logo'
import NavbarLinks from './card/NavbarLinks'
import twitterLogo from '../media/twitterLogo.avif'
import telegramLogo from '../media/telegramLogo.avif'
import context from '../../context/context';
import NavBarHam from './modal/NavBarHam'
export default function Navbar() {
    const contextData = useContext(context)
    const { modalData, setModalData,setComponentCardData } = contextData;
    const handelHamBurger = () => {
        if (modalData.display !== 'flex') {
            return setModalData({ ...modalData, display: 'flex', component: <NavBarHam />, type: 'side' })
        }
        setModalData({ ...modalData, display: 'none', component: <NavBarHam />, type: 'side' })
    }
    const navLinkArray = [
        { text: 'Join TG', img: telegramLogo, href: 'https://t.me/nomosol', targetBlank: true },
        { text: 'Twitter', img: twitterLogo, href: 'https://x.com/nomosolana', targetBlank: true },
    ]
    window.addEventListener('load',()=>{
        setComponentCardData((prevData)=>{
            return {...prevData,navLinkArray}
        })
    })
    window.addEventListener('resize',()=>{
        if (window.innerWidth > 768) {
            document.getElementById('modal_main').style.display = 'none'
        }
    })
    return (
        <div className='Navbar_main'>
            <div className="Navbar_main_innerDiv">
                <div className="Navbar_left">
                    <Logo />
                </div>
                <div className="Navbar_right">
                    <div className="Navbar_right_inner">
                        <div className="Navbar_hamburger_menu">
                            <div className="Navbar_hamburger_menu_parts" onClick={handelHamBurger}>
                                <div> </div>
                                <div> </div>
                                <div> </div>
                            </div>
                        </div>
                        <div className="Navbar_right_links" id='Navbar_right_links'>
                            <a className='Navbar_about_btn' href='div'>About Nomo</a>
                            {
                                navLinkArray.map((link, index) => {
                                    return <NavbarLinks data={{ ...link }} key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
