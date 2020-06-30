import React from 'react';
import './Footer.css';
import white_logo from '../../img/white_logo.png';

const Footer = () => {
  return (
    <section className='Footer'>
      <div className='logo-container'>
        <img src={white_logo} alt='rapid realty white logo' />
        <p>Rapid Realty</p>
      </div>
    </section>
  );
};

export default Footer;
