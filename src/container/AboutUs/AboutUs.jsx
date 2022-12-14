import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bgblue flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G_overlay' />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Cycloxx Energy™ offers a range of automotive manufacturer-approved passenger vehicle engine oils and car care products.</p>
        <button type='button' className='custom__button'>Learn more</button>
    </div>

    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='about_knife' />
    </div>
  
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our history</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon__img' />
        <p className='p__opensans'>Cycloxx Energy™ offers a range of automotive manufacturer-approved passenger vehicle engine oils and car care products.</p>
        <button type='button' className='custom__button'>Learn more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
