import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" class_name="p__cormorant" style={{ marginBottom: '1rem' }} />
      <h1 className='headtext__cormorant'>Subscribe to our newsletter</h1>
      <p className='p__opensans'>And never miss latest updated! </p>
    </div>

    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Enter your e-mail address' />
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
    
  </div>
);

export default Newsletter;
