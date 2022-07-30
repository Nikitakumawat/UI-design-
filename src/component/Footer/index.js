import React from 'react';
import FooterContain from './FooterContain';
import './footer.css';

function Footer() {
  return (
    <div className='footer'>
      <FooterContain title={'About us'} details={'ut perspiciatis'} phone={'+91-8080808080'}/>
      <FooterContain title={'Legal'} details={'ut perspiciatis consectetur'} otherDetails={'perspiciatis'}/>
      <FooterContain title={'Developers'} details={'Quis autem vel'} otherDetails={'reprehenderit qui'}/>
    </div>
  )
}

export default Footer;
