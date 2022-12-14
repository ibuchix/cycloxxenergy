import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Products that fits your needs'/>
      <h1 className='headtext__cormorant'>Products & Services</h1>

    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Oil & Gas</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title + index} title={wine.title}/>
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt='menu__img'/>

      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Equipments</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index)=>(
            <MenuItem key={cocktail.title + index} title={cocktail.title}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>Contact Us</button>
    </div>
    
  </div>
);

export default SpecialMenu;
