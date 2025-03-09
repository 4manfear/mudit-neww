import React, { useState } from 'react';
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero-container">
      <div className="hero-bluetext">
        <h1>
          <small>Hi, I'm</small>
          Mudit Mamodia
        </h1>
        <p>
          A passionate game developer specializing in Unity (C#) with experience in Unreal Engine (C++). I thrive on building immersive gameplay mechanics, intuitive systems, and dynamic interactions. From VR experiences to AI-driven gameplay, I enjoy bringing ideas to life through code.

          With hands-on experience in various game genres, including survival, RPGs, platformers, and simulation, I have developed mechanics like dynamic object placement, AI behavior, physics-based interactions, and multiplayer systems. I also enjoy participating in game jams and constantly learning new technologies to enhance my skill set.
        </p>
        <div className="call-to-action">
          {/* Add your call-to-action buttons or links here */}
        </div>
        <div className="social-link">
          <a href="#">
            <img src="https://res.cloudinary.com/dcf8ydyvs/image/upload/v1741241888/h9ufrm23gmhk9xhdpx0l.png" alt="Github" width="48" />
          </a>
          <a href="https://www.linkedin.com/in/mudit-mamodia-996565249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img src="https://res.cloudinary.com/dcf8ydyvs/image/upload/v1741241874/eh5g26i0ofs88lnpmkxp.png" alt="LinkedIn" width="48" />
          </a>
        </div>
      </div>
      <div className="hero-yellow">
        <img src="https://res.cloudinary.com/dcf8ydyvs/image/upload/v1741241874/ekipteurele0nvcaubim.jpg" alt="Mudit Mamodia" />
      </div>
    </div>
  );
}

export default Home;
