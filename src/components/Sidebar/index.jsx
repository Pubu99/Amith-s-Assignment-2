import React from 'react';
import logo from '../../assests/images/logo_128.png';
import SongList from '../SongList';
import './Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1 className="title">CodingRadio</h1>
      </div>
      <div className="sidebar-content">
        <SongList />
      </div>
    </div>
  );
};

export default Sidebar;
