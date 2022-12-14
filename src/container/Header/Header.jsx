import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new product'/>
      <h1 className='app__header-h1'>The Key to refined products</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>With a team of experienced industry professionals and a network of strategic partnerships, we are able to source and deliver the finest oil and gas products on the market. Our commitment to ethical and responsible business practices ensures that we always put the needs of our clients and the environment first.</p>
      <button type='button' className='custom__button'>Speak to us</button>
  </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  
</div>
);

export default Header;
