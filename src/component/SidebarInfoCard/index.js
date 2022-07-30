import React from 'react';
import cover from '../../images/cover.jpg';
import profile from '../../images/profile.jpg';
import linkedin from '../../images/linkedin.png';
import './SidebarInfoPanel.css';

function SidebarInfoPanel() {
  return (
    <div className='sidebar__info__panel'>
      <div className='cover__photo'><img src={cover} alt="cover photo" /></div>
      <div className='profile__photo'><img src={linkedin} alt="profile photo" /></div>
      <table>
        <tr><td className='table__heading'>Name</td><td>Nikita</td></tr>
        <tr><td className='table__heading'>Email</td><td>Nikita@gmail.com</td></tr>
        <tr><td className='table__heading'>Phone</td><td>+91-9090909090</td></tr>
      </table>
      <div className="contact_card">
        <h3>Send me a Message</h3>
        <div className='inputs'>
          {/* text input */}
          <label htmlFor="">Subject</label>
          <input type="text" />
          {/* textarea */}
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="10" rows="5"></textarea>
          <p>0/100</p>
          <button>SEND</button>
        </div>
      </div>
      <div className='address__container'>
      <h3>Or meet me at the office</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
        width="210"
        height="200"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div className='address'>
      <table>
        <tr><td>ONE MIDTOWN</td></tr>
        <tr><td>Shing Road</td></tr>
        <tr><td>Delhi, India</td></tr>
      </table>
      </div>
      </div>
    </div>
  )
}

export default SidebarInfoPanel;
