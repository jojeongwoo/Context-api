import React from 'react';
import './App.css';

const Music = ({ title, artist }) => {
  
  return(
    <div>
      <h3>{title}</h3>
      <h3>{artist}</h3>
    </div>
  );
};

export default Music;