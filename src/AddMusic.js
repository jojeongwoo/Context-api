import React, { useState, useContext } from 'react';
import { MusicContext } from './MusicContext';

const AddMusic = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [musics, setMusic] = useContext(MusicContext);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updateArtist = (e) => {
    setArtist(e.target.value);
  };

  const addMusic = (e) => {
    e.preventDefault();
    setMusic(prevMusics => [...prevMusics, { title: title, artist: artist }]);
  };


  return (
    <form onSubmit={addMusic}>
      <input type='text' name='title' value={title} onChange={updateTitle}/>
      <input type='text' name='artist' value={artist} onChange={updateArtist}/>
      <button>Submit</button>
    </form>
  )
}

export default AddMusic;