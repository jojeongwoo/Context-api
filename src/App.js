import React from 'react';
import MusicList from './MusicList';
import Nav from './Nav';
import AddMusic from './AddMusic';
import { MusicProvider } from './MusicContext';
import './App.css';

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <Nav/>
        <AddMusic/>
        <MusicList/>
      </div>
    </MusicProvider>
  );
}

export default App;
