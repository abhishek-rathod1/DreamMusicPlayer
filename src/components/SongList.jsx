import React, { useState } from "react";
import "./../styles/SongList.css";

const SongList = ({ songs, setSongs, playSong, isPlaying, currentSong }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const updatedSongs = [...songs];
    const draggedSong = updatedSongs[draggedIndex];
    updatedSongs.splice(draggedIndex, 1);
    updatedSongs.splice(dropIndex, 0, draggedSong);

    setSongs(updatedSongs); // Update the list
    setDraggedIndex(null);
  };

  const handleClick = (song, index) => {
    playSong(index);
  };

  return (
    <div className="song-list">
      <div className="header-row">
        <h2>Popular</h2>
        <h4>See All</h4>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Title</th>
            <th>Playing</th>
            <th>Time</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr
              key={song.id}
              className={`song-item${currentSong === index ? 'highlight' : ''}`}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onClick={() => handleClick(song, index)}
              style={{ cursor: "grab" }}
            >
              <td>{index + 1}</td>
              <td className="song-icon">
                <img src={song.songIcon} alt="icon" />
              </td>
              <td className="song-title">{song.title}</td>
              <td className="song-playing">
                {Number(song.playCount).toLocaleString()}
              </td>
              <td className="song-time">{song.time}</td>
              <td className="song-album">{song.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
