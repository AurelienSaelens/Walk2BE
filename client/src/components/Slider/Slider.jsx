import React from "react";
import "./slider.css";
import a from "./Images/mount.jpeg";
import b from "./Images/b.png";
import c from "./Images/c.webp";
import d from "./Images/d.png";
import e from "./Images/e.jpg";
import f from "./Images/f.png";

function Slider() {
  return (
    <>
      <div className="slider">
        <div className="slider-inner">
          <div className="slide-img">
            <img alt="slider" src={a} />
          </div>
          <div className="slide-img">
            <img alt="slider" src={b} />
          </div>
          <div className="slide-img">
            <img alt="slider" src={c} />
          </div>
          <div className="slide-img">
            <img alt="slider" src={d} />
          </div>
          <div className="slide-img">
            <img alt="slider" src={e} />
          </div>
          <div className="slide-img">
            <img alt="slider" src={f} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
