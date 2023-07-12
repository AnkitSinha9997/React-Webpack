import React from 'react';
import landscape from '../assets/images/landscape.jpg';
import './App.css';

export const App = () => {
  return (
    <>
      <div className='welcome'>Welcome to App</div>
      <img src={landscape} alt='test-image' />
    </>
  );
};
