import React, { useEffect, useState } from "react";
// import { Howl } from "howler";
import "../styles/NowPlaying.css";
import NowPlayingArtist from "../images/nowPlayingArtist.png";
import Play from "../icons/Play.svg";
import Pause from "../icons/pauseIcon1.svg";
import Next from "../icons/Next.svg";
import Random from "../icons/Random.svg";
import Back from "../icons/Back.svg";
import Repeat from "../icons/Repeat.svg";

const NowPlaying = ({
  currentSong,
  playSong,
  pauseSong,
  isPlaying,
  setIsPlaying,
  nextSong,
  prevSong,
  howl,
}) => {
  const [progress, setprogress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    if (howl) {
      setDuration(howl.duration());
    }
  }, [howl]);

  useEffect(() => {
    let interval;
    if (isPlaying && howl) {
      interval = setInterval(() => {
        setprogress(howl.seek() / duration);
        setRemainingTime(duration - howl.seek());
      }, 1000);
    }
    // else {
    //   clearInterval(interval);
    // }
    return () => clearInterval(interval);
  }, [isPlaying, howl, duration]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="now-playing-container">
      {currentSong && (
        <>
          <div className="song-header">
            <span className="nowPlaying">Now Playing</span>
            <img
              className="song-image"
              src={NowPlayingArtist}
              alt={currentSong.title}
            />
            <div className="song-info">
              <h3 className="song-title">{currentSong.title}</h3>
              <p className="song-artist">{currentSong.artist} </p>
            </div>
          </div>

          <div className="progress-container">
            <div className="time-container">
              <p className="song-time">
                {" "}
                {formatTime(duration - remainingTime)}{" "}
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progress * 100}%` }}
                ></div>
              </div>
              <p className="song-time"> {formatTime(duration)}</p>
            </div>
          </div>

          <div className="control-buttons">
            <button className="rem-btn">
              <img src={Repeat}></img>
            </button>
            <button className="rem-btn" onClick={prevSong}>
              <img src={Back}></img>
            </button>
            {isPlaying ? (
              <button className="pause-btn" onClick={pauseSong}>
                <img
                  className="pause-icon"
                  src={Pause}
                  alt="pause"
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "f6f6f6",
                    backgroundColor: "transparent",

                    objectFit: "cover", // Ensures the icon scales properly
                    borderRadius: "50%", // Optional: makes it a circular icon
                  }}
                ></img>
              </button>
            ) : (
              <button className="play-btn" onClick={() => playSong()}>
                <img src={Play} alt="play"></img>
              </button>
            )}
            <button className="rem-btn" onClick={nextSong}>
              <img src={Next}></img>
            </button>
            <button className="rem-btn">
              <img src={Random}></img>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NowPlaying;
