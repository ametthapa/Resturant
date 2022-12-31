import React from "react";

const TextButton = ({pText, buttonText}) =>{
    <div>
        <p className='p__opensans'>{pText}</p>
        <button type='button' className='custom__button'>{buttonText}</button>
    </div>

}
export default TextButton;