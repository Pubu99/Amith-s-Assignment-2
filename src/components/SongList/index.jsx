import React from "react";
import songsData from "../../data/data";
import ReactPlayer from 'react-player';
import './SongList.css'; // Import the CSS file

const SongList = () => {
  const [currentSongUrl, setCurrentSongUrl] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const playSong = (soundUrl) => {
    setCurrentSongUrl(soundUrl);
    setIsPlaying(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      <ul>
        {songsData.map((song, index) => (
          <li key={index} className="song-item">
            <button onClick={() => playSong(song.sound_url)}>
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-play.png"
                alt="circled-play"
              />
            </button>
            <h2>{song.title}</h2>
          </li>
        ))}
      </ul>
      {currentSongUrl && (
        <ReactPlayer
          url={currentSongUrl}
          playing={isPlaying}
          onEnded={handleEnded}
          controls={true}
          width="0"
          height="0"
          style={{ display: "none" }}
        />
      )}
    </div>
  );
};

export default SongList;
