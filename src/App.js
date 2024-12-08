import React, { useState } from "react";
import { Howl } from "howler";
import Sidebar from "./components/Sidebar";
import SongList from "./components/SongList";
import NowPlaying from "./components/NowPlaying";
import "./App.css";
import { songsData } from "./utils/songs.jsx";
import Artist from "../src/images/Pic.svg";
import Header from "./components/Header";

function App() {
  const [songs, setSongs] = useState(songsData);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [howl, setHowl] = useState(null);

  const playSong = (index) => {
    if (howl) howl.stop(); 
    const newHowl = new Howl({ src: [songs[index].src] });
    newHowl.play();
    setHowl(newHowl);
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    if (howl) {
      howl.pause();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="background">
        <div className="middle">
          <Header />
          <img className="artist" src={Artist} alt="art" />
          <div className="song-list">
            <SongList songs={songs} setSongs={setSongs} playSong={playSong} currentSong={currentSongIndex} isPlaying={isPlaying}/>
          </div>
        </div>

        <div className="right">
          <NowPlaying
            currentSong={songs[currentSongIndex]}
            playSong={()=>playSong(currentSongIndex)}
            pauseSong={pauseSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            nextSong={nextSong}
            prevSong={prevSong}
            howl={howl} // Pass the active Howl instance
          />
        </div>
      </div>
    </div>
  );
}

export default App;
