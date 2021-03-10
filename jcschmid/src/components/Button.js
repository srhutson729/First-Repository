import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
 const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

 const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] ;

 return (
     <Link 
     to={{ pathname:'https://www.patreon.com/majestyofreason#:~:text=Majesty%20of%20Reason%20aims%20to,rigorous%20philosophical%20reasoning%20and%20evidence.' }} 
     target='_blank' 
     className='btn-mobile'>
         <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
         onClick={onClick}
         type={type}
         >
              {children}
             </button>
         </Link>
 );
};
