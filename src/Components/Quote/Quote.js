import React from 'react';
import './Quote.css';
import background from '../../img/gallery-01.jpg';
const Quote = () => {
  return (
    <section className='Quote'>
      <img src={background} alt='house background' />
      <i className='fas fa-quote-left'></i>
      <h1>
        You have no idea what's going to happen tomorrow. Why not live with
        extreme beauty today?{' '}
      </h1>
      <p>Jill Sharp Weeks</p>
    </section>
  );
};

export default Quote;
