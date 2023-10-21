import React from 'react';
import './Popular.css';
import img1 from '../../images/popular/popular1.jpg';
import img2 from '../../images/popular/popular2.jpg';
import img3 from '../../images/popular/popular3.jpg';
import img4 from '../../images/popular/popular4.jpg';
import img5 from '../../images/popular/popular5.jpg';
const Popular = (props) => {
    return (
        <section className='popular-section'>         
        <h3 className='heading'>Popular Pot</h3>
        <section className='popular'>      
        <div className='popular_post'>
        <div className='popular_post_img'>
            <img src = {img1}></img>
         <div className="popular_post_text">
            <h3>Vivamus placerat<br></br> Luctus Neque nec <br></br>Faucibus</h3>
        </div>
        </div>
        </div>
        <div className='popular_post'>
        <div className='popular_post_img'>
            <img src = {img2}></img></div>
             <div className="popular_post_text">
             <h3>Vivamus placerat<br></br> Luctus Neque nec <br></br>Faucibus</h3>
        </div>
        </div>
        <div className='popular_post'>
        <div className='popular_post_img'>
            <img src = {img3}></img>
         <div className="popular_post_text">
         <h3>Vivamus placerat<br></br> Luctus Neque nec <br></br>Faucibus</h3>
        </div>
        </div>
        </div>
        </section>
        <section className='popular1'>
        <div className='new_popular_post'>
        <div className='new_popular_post_img'>
            <img src = {img4}></img>
         <div className="new_popular_post_text">
         <h3>Sed dignissim quam nulla, at sodales elit <br></br>venenatis at. In in fringilla</h3>
        </div>
        </div>
        </div>
        <div className='new_popular_post'>
        <div className='new_popular_post_img'>
            <img src = {img5}></img>
         <div className="new_popular_post_text">
         <h3>Sed dignissim quam nulla, at sodales elit <br></br>venenatis at. In in fringilla</h3>
        </div>
        </div>
        </div>
        </section>
        </section>
    );
};

export default Popular;