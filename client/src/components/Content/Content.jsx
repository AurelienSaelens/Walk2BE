import React from "react";
import "./content.css";
import Slider from "../Slider/Slider";

export default function Content() {

  return (
    <>
      <div className="Content">
        <p>
          Walk2BE is a fantastic platform dedicated to short and long walks, by
          bike or on foot, <br></br> it will make everyone{" "}
          <span class="yellow">happy</span>.<br></br>To find the ride of your{" "}
          <span className="yellow">dreams</span>, you just have to{" "}
          <span class="yellow">register</span> and find your meeting point!{" "}
          <br></br> This platform is free and will remain so. <br></br>
        </p>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </>
  );
}
