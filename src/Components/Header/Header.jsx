import React, { useState } from 'react';
import { SliderData } from '../../images/Top Header/sliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaParagraph} from 'react-icons/fa';
import './Header.css'

const Header = ({ slides }) => {
    console.log(slides);
    const [current, setCurrent] = useState(0);
    const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      
      <div className="text-block">
                <h6 className='skin'>Skin</h6>
                <hr className='line1'></hr>
                <h3 className='text'>Six Hyaluronic Serums <br></br>For Glowing Summer Skin  <br></br>Vivamus Placerat</h3>
                <small>By Tanvir Mohammed Sakil - 18 October,2023</small>
                <br></br>
                <br></br>
                <small>Continue reading</small>
                <hr className='line2'></hr>
       </div>
    </section>
  );
};

export default Header;