import React, { useContext }from 'react';
import { MusicContext } from './MusicContext';
import './App.css';

const Nav = () => {
  const [musics, setMusic] = useContext(MusicContext);

  const styleNav = {
    color: 'white',
    textDecoration: 'none',
  }
  
  return(
    <div className='nav-box'>
      <h3>Logo</h3>
      <ul className='nav-ul'>
        <li style={styleNav}>music list number:{musics.length}</li>
        <li style={styleNav}>JeongWoo</li>
      </ul>
    </div>
  );
};

export default Nav;