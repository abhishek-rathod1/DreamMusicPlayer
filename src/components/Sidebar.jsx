import React from "react";
import "./../styles/Sidebar.css";
import Logo from "../icons/logo.svg"
import Homeicon from "../icons/home.svg";
import Libraryicon from "../icons/library.svg";
import Discovericon from "../icons/discover.svg";
import Trendingicon from "../icons/trending.svg";
import Settings from "../icons/Settings.svg";
import Logout from "../icons/LogOut.svg";



const Sidebar = () => {
  
  return (
    <div className="sidebar-inside">
      <div className="logo"><img src={Logo} alt="DreamMusic Logo" /> <span>DreamMusic</span></div>
      <div className="menu">
        <ul>
          <li>Menu</li>
        <li><img src={Homeicon} alt="home icon"/> Home</li>
          <li><img src={Trendingicon} alt="trending icon"/> Trends</li>
          <li><img src={Libraryicon} alt="library icon"/> Library</li>
          <li><img src={Discovericon} alt="discovery icon"/> Discover</li>
        </ul>
      </div>
      <div className="general">
        <ul>
        <li><img src={Settings} alt="home icon"/> Settings</li>
        <li><img src={Logout} alt="logout icon"/> Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
