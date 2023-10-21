import React from 'react';
import img from '../../images/Profile/Pro1.jpg';
import img1 from '../../images/ad/ad2.png'
import './Profile.css';
const Profile = (props) => {
    return (
        <section>
            <div class="profile-section">
                <div class="profile-section-image"><img src={img} alt="" /></div>
                <div class="profile-section-content">
                    <h2>Morbi Porttitor</h2>
                    <p class="profile-section-description">Onvallis porttitor ligula leo a lectus. Donec id venenatis magna. Vivamus placerat luctus neque <br></br>nec faucibus. Aliquam <b>Gravida</b>eu <b>Tortor</b> vitae tempor. . Mauris <b>condimentum</b><br></br> scelerisque ante nec ultricies. Vivamus tincidunt nibh velit!</p>
                    <button class="primary-btn">sign up</button>
                </div>
            </div>
            <section className='ad1'>
                <div className='ad_img'>
                    <img src={img1}></img>
                </div>
            </section>
        </section>
    );
};

export default Profile;