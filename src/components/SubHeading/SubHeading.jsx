import React from 'react';
import { images } from '../../constants';

const SubHeading = ({title, class_name,style}) => (
  <div style={style}>
    <h1 className={class_name}>{title}</h1>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
