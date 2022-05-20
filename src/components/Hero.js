import React from "react";
import videoBcg from "../images/suzuki-ad.mp4";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <main>
        <div className="video-overlay">
          <video src={videoBcg} autoPlay loop muted />
        </div>
        <div className="video-content">
          <div className="video-text-wrapper">
            <h1>
              <span className="hero-span1">Auto</span>
              <span className="hero-span2">Setters</span>
            </h1>

            <p className="video-text-para">
              <span className="video-text-span1">Best cars,</span>{" "}
              <span className="video-text-span2">Best deals</span>
            </p>
            <div>
              
              <Link to='/cars' className="btn-primary">Cars</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
