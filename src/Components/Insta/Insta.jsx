import React from 'react';
import './Insta.css';
import img1 from '../../images/instagram/instagram1.jpg';
import img2 from '../../images/instagram/instagram2.jpg';
import img3 from '../../images/instagram/instagram3.jpg';
import img4 from '../../images/instagram/instagram4.jpg';
const Insta = (props) => {
    return (
        <section className='insta-section'>         
        <h3 className='heading'>instagram Feed</h3>
        <section className='insta'>      
        <div className='insta_post'>
        <div className='insta_post_img'>
            <img src = {img1}></img>
        </div>
        </div>
        <div className='insta_post'>
        <div className='insta_post_img'>
            <img src = {img2}></img>
            </div>
        </div>
        <div className='insta_post'>
        <div className='insta_post_img'>
            <img src = {img3}></img>
        </div>
        </div>
        <div className='insta_post'>
        <div className='insta_post_img'>
            <img src = {img4}></img>
        </div>
        </div>
        </section>
        <div className='follow_Us'>
        <div className="follow_Us_text">
            Follow Us
        </div>
        </div>
        </section>
    );
};

export default Insta;