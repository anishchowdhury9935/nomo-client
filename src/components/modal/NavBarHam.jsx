import { useContext } from 'react'
import twitterLogo from '../../media/twitterLogo.avif'
import telegramLogo from '../../media/telegramLogo.avif'
import NavBarHamCard from '../card/NavBarHamCard'
import context from '../../../context/context';
export default function NavBarHam() {
    const contextData = useContext(context)
    const { componentCardData } = contextData;
    const { navLinkArray, setModalData, modalData } = componentCardData
    return (
        <div className='NavBarHam_main'>
            {
                navLinkArray?.map((data, index) => {
                    return <NavBarHamCard data={data} key={index} />
                })
            }
            <a href='#HeroSection_Page2' className='NavBarHam_about_btn_div' >
                <h2>
                    About Nomo 😀
                </h2>
            </a>
        </div>
    )
}
