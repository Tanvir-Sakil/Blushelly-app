import React from 'react';
import './Top_Header.css';
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { SiThreads } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { PiPinterestLogoLight } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";




const Top_Header = (props) => {
    return (
        <>
            <header>
                <nav>
                    <div class="menu-container">
                        <div className='top-item'>
                            <div class="top-header-text">
                                <p>Welcome there</p>
                            </div>

                            <div class="icon">
                                <li class="fa-item"><LuFacebook  className='fa-style'></LuFacebook></li>
                                <li class="fa-item"><LuInstagram className='fa-style'></LuInstagram></li>
                                <li class="fa-item"><SiThreads   className='fa-style'></SiThreads></li>
                                <li class="fa-item"><CiTwitter className='fa-style'></CiTwitter></li>
                                <li class="fa-item"><PiPinterestLogoLight className='fa-style'></PiPinterestLogoLight></li>
                                <li class="fa-item"><LuLinkedin className='fa-style'></LuLinkedin></li>
                                <div className='top-item-hr'></div>
                                <div className='subscribe'>
                                    <div className="subscribe_text">
                                        Subscribe
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr-style'/>
                        <div className='menu-container-item'>
                            <div class="logo">
                                <div className='diagonal-line'></div>
                                <h3>Blushlly</h3>
                            </div>
                            <div class="menus">
                                <li class="item">Home</li>
                                <li class="item">Categories</li>
                                <li class="item">Makeup</li>
                                <li class="item">Blog</li>
                                <li class="item">About</li>
                                <li class="item">Contact</li>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Top_Header;