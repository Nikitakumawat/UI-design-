import React from 'react';
import './footerContain.css';

function FooterContain({title, details, phone, otherDetails}) {
  return (
    <div className='footer__contain'>
      <div className='footer__title'>{title}</div>
      <div className='details'>
        <p>{details}</p>
        <p>{phone}</p>
        <p>{otherDetails}</p>
      </div>
    </div>
  )
}

export default FooterContain;
