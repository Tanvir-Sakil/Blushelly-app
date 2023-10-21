import React from 'react';
import './Post.css';
import img1 from '../../images/Categories/Skin.jpg';
import img2 from '../../images/Categories/Hair.jpg';
import img3 from '../../images/Categories/makeup.jpg';
import img4 from '../../images/Categories/Tips.jpg';
import img5 from '../../images/Categories/Spa.jpg';

const Post = (props) => {
    return (
        <div className='post'>
        <div className='post-1'>
        <div className='post_img'>
            <img src = {img1}></img>
        </div>
         <h5 className="post-text">
                Skin 
         </h5>
        </div>
        <div className='post-1'> 
             <div className='post_img'>
                  <img src = {img2}></img>
             </div>
        <h5 className="post-text">
            HAIR
        </h5>
        </div>

        <div className='post-1'> 
             <div className='post_img'>
                  <img src = {img3}></img>
            </div>
        <h5 className="post-text">
            TIPS
        </h5>
        </div>

        <div className='post-1'> 
             <div className='post_img'>
                  <img src = {img4}></img>
            </div>
        <h5 className="post-text">
            MAKEUP
        </h5>
        </div>

        <div className='post-1'> 
             <div className='post_img'>
                  <img src = {img5}></img>
            </div>
        <h5 className="post-text">
            SPA
        </h5>
        </div>
      </div>
    );
};

export default Post;