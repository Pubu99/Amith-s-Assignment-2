import React from "react";
import Banner from "../assests/images/banner.png";
import Ads from "../assests/images/ban_2.png";
import SongCard from "../components/SongCard";
import songsData from "../data/data";
import Avatar from "../assests/images/avatar.jpg";
import './Home.css'; // Import the CSS file

const Home = () => {
  const numberOfAds = 3;

  const adElements = Array.from({ length: numberOfAds }, (value, index) => (
    <div
      key={index}
      className="ad-element"
    >
      <img
        src={Ads}
        className="ad-image"
        alt={`Advertisement ${index + 1}`}
      />
    </div>
  ));

  const makersAvatar = Array.from({ length: 1 }, (value, index) => (
    <div
      key={index}
      className="maker-avatar"
    >
      <img
        src={Avatar}
        className="avatar-image"
        alt={`Maker Avatar ${index + 1}`}
      />
      <div className="maker-info">
        <span className="maker-name">Amith</span>
        <span className="maker-details">
          Faculty of engineering, University of Ruhuna
        </span>
      </div>
    </div>
  ));

  return (
    <div className="home">
      <div className="header">
        📻 👉️ CodingRadio ⚡️ 🚀
      </div>
      <div className="content">
        <div className="left-section">
          <div className="banner-container">
            <img
              src={Banner}
              className="banner"
            />
          </div>
          <div className="section-title">
            Pick your poison 🍷
          </div>
          <div>
            <div className="song-grid">
              {songsData.map((song, index) => (
                <SongCard key={index} song={song} />
              ))}
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="section-title">
            You might also like 🎁
          </div>
          <div className="ads-container">{adElements}</div>
          <div className="section-title">Makers 🚀</div>
          <div>{makersAvatar}</div>
          <div className="support-section">
            <div className="support-title">
              Would you like to buy us a Coffee? 🙏
            </div>
            <div className="support-description">
              This will help us stay up at night and make this app even better.
              Coffee translates to code ☕️
            </div>
            <div className="support-button coffee">
              Buy us a coffee
            </div>
            <span className="support-or">...or maybe</span>
            <div className="support-button donation">
              Make a Donation
            </div>
            <span className="support-key">
              🔑 Here's how we plan to use Donations
            </span>
          </div>
          <div className="footer">
            © Copyright 2024 - Amith Soft - Made by Amith Version 1.0.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
