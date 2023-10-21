import React from 'react';
import './Random.css';
import img1 from '../../images/Random/Random1.jpg';
import img2 from '../../images/Random/Random2.jpg';
import img3 from '../../images/Random/Random3.jpg';
import img4 from '../../images/Random/Random4.jpg';
import img5 from '../../images/Random/Random5.jpg';
import img6 from '../../images/Random/Random6.jpg';

const Random = (props) => {

   
    return (
        <div className='Random'>
          <h3 className='heading'>Random Post</h3>
        <div className='Random_post'>
        <div className='Random_post_img'>
            <img src = {img1}></img>
        </div>
         <div className="Random_post_text">
                <h5>Six Hyaluronic Serums</h5> <br></br>
         </div>
        </div>
         <div className='line'></div>
        <div className='Random_post1'> 
             <div className='Random_post_img'>
                  <img src = {img2}></img>
             </div>
        <div className="Random_post_text1">
            <h5>Six Hyaluronic Serums</h5> <br></br>
        </div>
        </div>
        <div className='line'></div>
        <div className='Random_post'> 
             <div className='Random_post_img'>
                  <img src = {img3}></img>
             </div>
        <div className="Random_post_text">
            <h5>Six Hyaluronic Serums</h5> <br></br>
        </div>
        </div>
        <div className='line'></div>
        <div className='Random_post1'> 
             <div className='Random_post_img'>
                  <img src = {img4}></img>
             </div>
        <div className="Random_post_text1">
            <h5>Six Hyaluronic Serums</h5> <br></br>
        </div>
        </div>
        <div className='line'></div>
        <div className='Random_post'> 
             <div className='Random_post_img'>
                  <img src = {img5}></img>
             </div>
        <div className="Random_post_text">
            <h5>Six Hyaluronic Serums</h5> <br></br>
        </div>
        </div>
        <div className='line'></div>
        <div className='Random_post1'> 
             <div className='Random_post_img'>
                  <img src = {img6}></img>
             </div>
        <div className="Random_post_text1">
            <h5>Six Hyaluronic Serums</h5> <br></br>
        </div>
        </div>
        <div className='line'></div>
        <div className='load_more'>
        <div className="load_more_text">
            load more
        </div>
        </div>
      </div>
      
    );
};

export default Random;