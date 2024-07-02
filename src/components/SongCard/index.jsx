import React from 'react';
import './SongCard.css'; // Import the CSS file

const SongCard = ({ song }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="song-card">
      <div className="image-container">
        <img
          src={song.image}
          alt={song.title}
          className="song-image"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        />
        <div
          className={`overlay ${isHovered ? 'hovered' : ''}`}
        >
          <button className="play-button">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-play.png"
              alt="Play"
            />
          </button>
        </div>
      </div>
      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
        <p className="song-artist">{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
