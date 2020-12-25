import React, { useState, useContext } from 'react';
import { MusicContext } from './MusicContext';
import Music from './Music';
import './App.css';

const MusicList = () => {
  const [musics, setMusic] = useContext(MusicContext);
  
  return(
    <div>
      {musics.map(music => (
        <Music title={music.title} artist={music.artist} key={music.id} />
      ))}
    </div>
  );
};

export default MusicList;