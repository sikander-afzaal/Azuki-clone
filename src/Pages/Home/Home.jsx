import React from "react";
import "./Home.css";
import vid from "../../Assets/vid.mp4";
import mobile from "../../Assets/mobile-bg.jpg";
import vend from "../../Assets/vending.png";
function Home() {
  return (
    <div className="home">
      <video autoPlay muted className="vid" src={vid}></video>
      <img src={mobile} alt="" className="mobile-bg" />
      <div className="fixed-bot">
        <div className="left-fixed">
          <img src={vend} alt="" />
          <div className="text-bot">
            <p>NOW OPEN</p>
            <p>
              THE GALLERY <span>//</span>
            </p>
          </div>
        </div>
        <div className="right-fixed">
          <button>
            VIEW GALLERY <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
