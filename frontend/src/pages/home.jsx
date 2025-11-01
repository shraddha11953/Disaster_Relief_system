import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Disaster Management & Relief Platform</h1>
        <p className="subtitle">
          A unified system to <strong>report</strong>, <strong>track</strong>, and <strong>assist</strong> in
          disaster situations. Empowering citizens to act quickly and save lives.
        </p>

        <div className="button-group">
          <button className="view-btn" onClick={() => navigate("/disaster-list")}>
            🔍 View Active Requests
          </button>
          <button className="submit-btn" onClick={() => navigate("/disaster")}>
            🆘 Submit Help Request
          </button>
        </div>
      </section>

      {/* Disaster Gallery Section */}
      <section className="disaster-gallery">
        <h2>Common Disasters We Respond To</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/30/08/33/flood-965092_640.jpg"
              alt="Flood"
            />
            <p>Flood Relief Operations</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://images.pexels.com/photos/4558211/pexels-photo-4558211.jpeg?cs=srgb&dl=pexels-wilson-malone-739912-4558211.jpg&fm=jpg"
              alt="Earthquake"
            />
            <p>Earthquake Rescue Missions</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://img.freepik.com/premium-photo/satellite-image-cyclone-storm-whirlpool-3d-rendering-raster-illustration_717906-375.jpg"
              alt="Cyclone"
            />
            <p>Cyclone & Storm Assistance</p>
          </div>
          <div className="gallery-item">
            <img
              src="https://wallpapercave.com/wp/wp3802577.jpg"
              alt="Fire"
            />
            <p>Fire & Emergency Response</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About This Project</h2>
        <p>
          The Disaster Management Portal connects citizens, volunteers, and rescue teams during emergencies.
          It enables reporting of disasters, submitting help requests, and monitoring real-time updates to
          ensure rapid response and recovery.
        </p>
      </section>
    </div>
  );
}

export default Home;
