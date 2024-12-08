import React from "react";
import "../styles/Header.css";
// import { FaSearch } from "react-icons/fa";
import SearchIcon from "../icons/search.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <ul className="header-tabs">
          <li className="header-tab">Music</li>
          <li className="header-tab">Podcast</li>
          <li className="header-tab">Live</li>
          <li className="header-tab">Radio</li>
        </ul>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Micheal jackson"
          />
          <button className="search-button">
            <img src= {SearchIcon} alt="search icon"></img>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
