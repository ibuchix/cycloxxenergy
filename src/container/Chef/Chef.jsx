import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bgblue app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>

    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="CEO's Word"/>
      <h1 className='headtext__cormorant'> What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>Our passion for the oil and gas industry is unrivalled. We strive every day to provide the best possible products and services to our customers.</p>

        </div>
        <p className='p__opensans'>Small in size, big in heart.</p>

      </div>
      <div className='app__chef-sign'>
        <p>Kelechi Ikerionwu</p>
      </div>

    </div>
  </div>
);

export default Chef;
