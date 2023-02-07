import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../assets/arrow-down.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";
import { ReactComponent as SearchIcon } from "../assets/Search.svg";
import avatar from "../assets/avatar.png";

const Navbar = ({ setQuery }) => {
  const location = useLocation();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="nav-brand">
          <NavLink to="/" className="brand-logo">
            CONCEALED <span>FILMS</span>
          </NavLink>
        </div>
        <div>
          <div className="nav-right-assets-wrapper">
            {location.pathname !== "/" && (
              <div className="search-wrapper">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>
            )}

            <NotificationIcon />
            <div className="avatar-wrapper">
              <img src={avatar} alt="avatar" />
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
