import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src="logoo.png" className="logo" alt="" />
        <h3 style={{ marginLeft: "-27px", marginRight: "265px" }}>YouTube</h3>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search" />
          <button className="search-btn">
            <img src="search.png" alt="" />
          </button>
        </div>
        <div className="user-options">
          <img src="mic.png" className="icon" alt="" />
          <img src="grid.png" class="icon" alt="" />
          <img src="setting.png" class="icon" alt="" />
          <div className="sig">signup</div>
        </div>
      </nav>
      <div className="side-bar">
        <a href="#" className="links active">
          <img src="home.png" alt="" />
          home
        </a>
        <a href="#" className="links">
          <img src="explore.png" alt="" />
          explore
        </a>
        <a href="#" className="links">
          <img src="subscription.png" alt="" />
          subscription
        </a>
        <hr className="seperator" />
        <a href="#" className="links">
          <img src="library.png" alt="" />
          library
        </a>
        <a href="#" className="links">
          <img src="history.png" alt="" />
          history
        </a>
        <a href="#" className="links">
          <img src="video.png" alt="" />
          your video
        </a>
        <a href="#" className="links">
          <img src="later.png" alt="" />
          watch leater
        </a>
        <a href="#" className="links">
          <img src="like.png" alt="" />
          like video
        </a>
        <a href="#" className="links">
          <img src="more.png" alt="" />
          show more
        </a>
      </div>

      <div class="filters">
        <button class="filter-options active">all</button>
        <button class="filter-options">CSS</button>
        <button class="filter-options">web development</button>
        <button class="filter-options">python</button>
        <button class="filter-options">entertainment</button>
        <button class="filter-options">marvel</button>
        <button class="filter-options">javascript</button>
        <button class="filter-options">artificial intelligence</button>
        <button class="filter-options">machine learning</button>
        <button class="filter-options">trending</button>
      </div>

      <div class="video-container">
        {/* <div class="video">
          <img src="img/profile-pic.png" class="thumbnail" alt="" />
          <div class="content">
            <img src="img/profile-pic.png" class="channel-icon" alt="" />
            <div class="info">
              <h4 class="title">
                youtube clone 2021 | create working youtube clone
              </h4>
              <p class="channel-name">modern web</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
