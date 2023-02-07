import React from "react";
import HomeImg from "../assets/home_page_img.png";
import { ReactComponent as SearchIcon } from "../assets/Search.svg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/movies");
  };

  

  return (
    <section className="page-section">
      <div className="home-page-container">
        <div>
          <img src={HomeImg} alt="home-page-img" />
          <h1 className="search-title">Search by movie name:</h1>
          <div className="mock-input" onClick={handleSearchClick}>
            <SearchIcon
              style={{ position: "absolute", top: "8px", left: "8px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
