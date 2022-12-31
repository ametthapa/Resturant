import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
// import TextButton from '../../components/SubHeading/TextButton';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" class_name="p__cormorant" style={{marginBottom:'1rem'}} />
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      {/* <TextButton pText="Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus" buttonText="Explore Menu" /> */}
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome}  alt="header img" />
    </div>
  </div>
);

export default Header;
