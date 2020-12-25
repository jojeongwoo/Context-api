import React, { useState, createContext } from 'react';

export const MusicContext = createContext();

export const MusicProvider = props => {
  const [musics, setMusic] = useState([
    {
      title: 'always awake',
      artist: 'beenzino',
      id: 121313,
    },
    {
      title: 'smoking dreams',
      artist: 'beenzino',
      id: 123456
    },
    {
      title: 'prime time',
      artist: 'the Quiett',
      id: 123123,
    },
  ]);
  return (
    <MusicContext.Provider value={[musics, setMusic]}>
      {props.children}
    </MusicContext.Provider>
  );
};