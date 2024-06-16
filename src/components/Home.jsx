import { useContext, useState } from 'react'
import context from '../../context/context';
import sticker from '../media/sticker.webp'
import 'animate.css';
import roadMap from '../media/roadMap.png'
import hy from '../media/hy.png'
import uy from '../media/uy.png'
import step1 from '../media/step1.png'
import step2 from '../media/step2.png'
import step3 from '../media/step3.png'
import step4 from '../media/step4.png'
import pieChart from '../media/pieChart.png'
import background from '../media/background.webm'
import aboutDev from '../media/aboutDev.png'
import headerLogo from '../media/headerLogo.png'
import dmout from '../media/dmout.mp4'
import donmisout from '../media/donmisout.mp4'
import NavbarLinks from './card/NavbarLinks';
import HelperFunction from '../../helper/HelperFunction';
export default function Home() {
    const { animateOnVisible } = HelperFunction()
    const contextData = useContext(context);
    const { componentCardData } = contextData;
    const ca = 'J3EEg43NaHQmPCNxhPjFZhsjwa6FJxaBA3pudQFyf4Jq'
    const [tempText, setTempText] = useState({ copyCa: 'copy ca' })
    const animateDiv = [
        { div: 'HeroSection_Page4_chart_img', type: '#', animationName: 'animate__slideInUp' },
        { div: 'HeroSection_Page4_img_hy', type: '#', animationName: 'animate__fadeIn' },
        { div: 'HeroSection_Page4_img_uy', type: '#', animationName: 'animate__fadeIn' },
        { div: 'HeroSection_Page2_text_header', type: '.', animationName: 'animate__fadeIn' },
    ]
    const steps = [
        step1,
        step2,
        step3,
        step4,
    ]
    window.addEventListener('load', () => {
        document.querySelector('.HeroSection_main').addEventListener('scroll', () => {
            const stickySection = document.querySelector('.HeroSection_Page3_sticky')
            const scrollSection = document.getElementById('HeroSection_Page3_sticky_scroll_section')
            const windowWidth = window.innerWidth
            const offsetTop = stickySection.offsetTop
            // const percent = ((window.scrollY - offsetTop) / window.innerHeight) * (windowWidth > 426 ? 15 : 44)
            const percent = ((window.scrollY - offsetTop) / window.innerHeight) * (windowWidth > 426 ? 8 : 35)
            scrollSection.style.transform = `translate3d(${percent}vw,0vw,0vw)`
            animateDiv.map(({ div, type, animationName }) => {
                animateOnVisible(document.querySelector(`${type}${div}`), animationName)
            })
        })
    })
    return (
        <>
            <video src={background} id='heroSection_background' autoPlay muted loop/>
            <div className='HeroSection_main'>
                <div className="heroSection_top_bubbles bubble_main">
                    <div id='bubble1' className='bubble_section_div'> </div>
                    <div id='bubble2' className='bubble_section_div'> </div>
                    <div id='bubble3' className='bubble_section_div'> </div>
                    <div id='bubble4' className='bubble_section_div'> </div>
                    <div id='bubble5' className='bubble_section_div'> </div>
                </div>
                <div className="HeroSection_main_inner_div">
                    <section className="HeroSection_top">
                        <div className="HeroSection_top_inner_div">
                            <div className="HeroSection_top_text animate__fadeIn animate__animated">
                                <img src={headerLogo} alt="" className='nomo_header_img' loading='lazy' />
                            </div>
                            <div className="HeroSection_top_bottom_text">
                                <h1 className="Not_missing_Out_text_heroS">
                                    Not missing Out anymore !!!!
                                </h1>
                                <div className="heroSection_link">
                                    {
                                        componentCardData.navLinkArray?.map((link, index) => {
                                            return <NavbarLinks data={{ ...link }} key={index} />
                                        })
                                    }
                                </div>
                                <div className="heroSection_ca_link">
                                    <div className="heroSection_ca_link_box">
                                        <div className="ca_link_text">
                                            {ca}
                                        </div>
                                        <div className="heroSection_ca_link_box_copy_part">
                                            <button type='button' onClick={() => {
                                                setTempText({ ...tempText, copyCa: 'copied' })
                                                setTimeout(() => {
                                                    setTempText({ ...tempText, copyCa: 'copy ca' })
                                                }, 900)
                                                window.navigator.clipboard.writeText(ca)
                                            }}>{tempText.copyCa}</button>
                                        </div>
                                    </div>
                                    <div className="heroSection_scroll">
                                        scroll <div className="downICon_div_herosection"> {'>'} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="infinteScroll_HeroSection">
                        <div className="scroll-text">Not missing Out anymore!!</div> <div className="scroll-text">Not missing Out anymore!!</div> <div className="scroll-text">Not missing Out anymore!!</div> <div className="scroll-text">Not missing Out anymore!!</div>
                        <div className='infinteScroll_HeroSection_first_color_strip'>  </div>
                        <div className='infinteScroll_HeroSection_second_color_strip'> </div>
                    </div>
                    <section className='HeroSection_Page2'>
                        <div className="heroSection_section2_bubbles bubble_main">
                            <div id='bubble1' className='bubble_section_2 bubble_section_div'> </div>
                            <div id='bubble2' className='bubble_section_2 bubble_section_div'> </div>
                            <div id='bubble3' className='bubble_section_2 bubble_section_div'> </div>
                            <div id='bubble4' className='bubble_section_2 bubble_section_div'> </div>
                            <div id='bubble5' className='bubble_section_2 bubble_section_div'> </div>
                        </div>
                        <div className="HeroSection_inner_Page2">
                            <div className="HeroSection_Page2_img">
                                <img src={sticker} alt="" className='HeroSection_Page2_img_main' />
                            </div>
                            <div className="HeroSection_Page2_text">
                                <h1 className='HeroSection_Page2_text_header'>ABOUT NoMO </h1>
                                <h2 className='NoMO_basically_heroSection'>Welcome to NoMO, the perfect opportunity for those who missed out on Doge, Shib, and Bonk!
                                </h2>
                                <div className="purpose_lines_heroSection">
                                    <h3>Missed out on Doge? No problem!</h3>
                                    <h3>
                                        Missed out on Shib? We've got you covered!</h3>
                                    <h3>
                                        Missed out on Bonk? Join us now!</h3>
                                </div>
                                <div className="last_lines_heroSection">
                                    <h1>DO NOT MISS OUT Again!!!</h1>
                                    <h1>NoMO the coin for the people</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='HeroSection_Page3'>
                        <div className="HeroSection_Page3_sticky">
                            <div className="HeroSection_Page3_sticky_scroll_section" id='HeroSection_Page3_sticky_scroll_section'>
                                <img src={roadMap} alt="" id='roadMap_img' />
                            </div>
                        </div>
                    </section>
                    {/* <div className="HeroSection_Page4_header">
                                            
                    </div> */}
                    <div className="HeroSection_Page5_text_div_text">
                        NoMOnics
                    </div>
                    <section className='HeroSection_Page4'>
                        <div className="HeroSection_Page4_chart">
                            <img src={pieChart} alt="" id='HeroSection_Page4_chart_img' />
                        </div>
                    </section>
                    <div className="presale_part">
                        <div className="HeroSection_Page4_img_div">
                            <img src={hy} alt="" id='HeroSection_Page4_img_hy' />
                            <img src={uy} alt="" id='HeroSection_Page4_img_uy' />
                        </div>
                    </div>
                    <div className="HeroSection_Page5_text">
                        {/* <h1>No. of people not missing out !</h1> */}
                        <video src={dmout} loop autoPlay muted> </video>
                    </div>
                    <section className='HeroSection_Page5'>
                        <div className="HeroSection_Page5_inner_div">
                            <div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/5E57nBEeqGREhpJitaZB5CR5X52G4cwv1WBFLkx1GPw?embed=1&theme=dark&info=0"></iframe></div>
                        </div>
                    </section>
                    <section className='HeroSection_Page6'>
                        <div className="HeroSection_Page6_heading">
                            <video src={donmisout} autoPlay muted loop> </video>
                        </div>
                        <div className="HeroSection_Page6_step_imgs">
                            <div className="HeroSection_Page6_step_imgs_inner">
                                {steps.map((step, index) => {
                                    return <div className={`step_imgDiv step_imgDiv${index + 1}`} key={index}><img src={step} alt="" className={`step${index + 1}_img all_step_img `} /></div>
                                })}
                            </div>
                        </div>
                    </section>
                    <section className="HeroSection_Page7">
                        <img src={aboutDev} alt="" id='aboutDev_img' />
                    </section>
                    <footer className='HeroSection_last'>
                        <h1> made with ❤️ by a life long lasting NOMO holder</h1>
                    </footer>
                </div>
            </div>
        </>
    )
}
