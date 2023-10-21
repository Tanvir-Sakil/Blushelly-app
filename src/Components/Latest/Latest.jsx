import React from 'react';
import './Latest.css';
import img1 from '../../images/latest/latest1.jpg';
import img2 from '../../images/latest/latest2.jpg';
import img3 from '../../images/latest/latest3.jpg';
import img4 from '../../images/latest/latest4.jpg';
import img5 from '../../images/ad/ad.png';
const Latest = (props) => {
    return (
        <section className='latest-section'>         
        <h3 className='heading'>Latest Post</h3>
        <section className='latest'>      
        <div className='latest_post'>
        <div className='latest_post_img'>
            <img src = {img1}></img>
         <div className="latest_post_text">
            <h3>Vivamus placerat<br></br> Luctus Neque nec <br></br>Faucibus</h3>
        </div>
        </div>
        </div>
        <div className='latest_post'>
        <div className='latest_post_img'>
            <img src = {img2}></img></div>
             <div className="latest_post_text">
             <h3>Vivamus placerat<br></br> Luctus Neque nec <br></br>Faucibus</h3>
        </div>
        </div>
        <div className='latest_post'>
        <div className='latest_post_img'>
            <img src = {img3}></img>
         <div className="latest_post_text">
         <h3>Vivamus placerat<br></br> Luctus Neque nec <br></br>Faucibus</h3>
        </div>
        </div>
        </div>
        </section>
        <section className='latest1'>
        <div className='new_post'>
        <div className='new_post_img'>
            <img src = {img4}></img>
         <div className="new_post_text">
         <h3>Sed dignissim quam nulla, at sodales elit <br></br>venenatis at. In in fringilla</h3>
        </div>
        </div>
        </div></section>

        <section className='ad'>
        <div className='ad_img'>
            <img src = {img5}></img>
        </div>
        </section>
        </section>
    );
};

export default Latest;