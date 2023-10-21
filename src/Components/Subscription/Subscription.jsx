import React from 'react';
import './Subscription.css'
import img1 from '../../images/footer/footer1.jpg';
import img2 from '../../images/footer/footer2.jpg';
import img3 from '../../images/footer/footer3.jpg';
import img4 from '../../images/footer/gallery1.jpg';
import img5 from '../../images/footer/gallery2.jpg';
import img6 from '../../images/footer/gallery3.jpg';
import img7 from '../../images/footer/gallery4.jpg';
import img8 from '../../images/footer/gallery5.jpg';
import img9 from '../../images/footer/gallery6.jpg';
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { SiThreads } from "react-icons/si";
import { CiTwitter } from "react-icons/ci";
import { PiPinterestLogoLight } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";

const Subscription = (props) => {
    return (
        <>
            <section>
                <div class="subscription-section">
                    <div class="subscription-section-content">
                        <h2 class="subscription-section-title">Subscribe For Best <br></br>Beauty Tips</h2>
                        <input type="text" class="input-item" placeholder="Enter your Email here" />
                        <button class="primary-btn">Subscribe</button>
                    </div>
                </div>
            </section>
            <div class='footer'>
                <div class="footer-content">
                    <div>
                        <h3 class="footer-title">Categories</h3>
                        <div className='category-text'>
                            <p>Beauty</p>
                            <p>(4)</p>
                        </div>
                        <hr></hr>
                        <div className='category-text'>
                            <p>Fashion</p>
                            <p>(8)</p>
                        </div>
                        <hr></hr>
                        <div className='category-text'>
                            <p>Makeup</p>
                            <p>(6)</p>
                        </div>
                        <hr></hr>
                        <div className='category-text'>
                            <p>Beauty</p>
                            <p>(2)</p>
                        </div>
                        <hr></hr>
                        <div className='category-text'>
                            <p>Lifestyle</p>
                            <p>(7)</p>
                        </div>
                        <hr></hr>
                        <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="Search" />

                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="footer-title">Popular Post</h3>
                        <div className="footer2">
                            <img src={img1} alt="" />
                            <div className='footer2-text'>
                                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                                <small>4 days ago</small>
                            </div>

                        </div>
                        <div className="footer2">
                            <img src={img2} alt="" />
                            <div className='footer2-text'>
                                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                                <p>11 days ago</p></div>
                        </div>
                        <div className="footer2">
                            <img src={img3} alt="" />
                            <div className='footer2-text'>
                                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                                <small>20 days ago</small>
                            </div>

                        </div>
                    </div>
                    <div>
                        <h3 class="footer-gallery-text">Gallery</h3>
                        <div className='footer-gallery'>
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                            <img src={img9} alt="" />
                        </div>
                        <h5 className='tag-style'>Tags</h5>
                        <div className='tags'>
                            <div className="tags_text">
                                Beauty
                            </div>
                            <div className="tags_text">
                                Skin
                            </div>
                            <div className="tags_text">
                                Makeup
                            </div>
                            <div className="tags_text">
                                Hair
                            </div>
                            <div className="tags_text">
                                Tips
                            </div>
                            <div className="tags_text">
                                Fashion
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='hr-style1'></hr>
                <div className='menu-container-item1'>
                    <div class="logo1">
                        <div className='diagonal-line1'></div>
                        <h3>Blushlly</h3>
                    </div>
                    <div class="menus1">
                        <li class="item1">Home</li>
                        <li class="item1">Categories</li>
                        <li class="item1">Makeup</li>
                        <li class="item1">Blog</li>
                        <li class="item1">About</li>
                        <li class="item1">Contact</li>
                    </div>
                </div>
                <hr className='hr-style1'></hr>

                <div className='top-item1'>

                    <div class="icon1">
                        <li class="item1"><LuFacebook className='fa-style1'></LuFacebook></li>
                        <li class="item1"><LuInstagram className='fa-style1'></LuInstagram></li>
                        <li class="item1"><SiThreads className='fa-style1'></SiThreads></li>
                        <li class="item1"><CiTwitter className='fa-style1'></CiTwitter></li>
                        <li class="item1"><PiPinterestLogoLight className='fa-style1'></PiPinterestLogoLight></li>
                        <li class="item1"><LuLinkedin className='fa-style1'></LuLinkedin></li>
                    </div>
                    <p class="copy">
                        <small>copyright &copy; 2023 agence. All rights reserverd</small>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Subscription;