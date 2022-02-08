import { useState } from "react";
import "./parallax.css";
import Box from "@mui/material/Box";
import Register from "../../pages/Register/Register";
import Content from "../Content/Content";
import Login from "../../pages/Login/Login";
import "../../pages/Register/register.css";

export default function Parallax() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const [showModal1, setShowModal1] = useState(false);
  const openModal1 = () => {
    setShowModal1((prev) => !prev);
  };

  if (showModal === true) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'scroll'
  }

  if (showModal1 === true) {
    document.body.style.overflow = 'hidden';
  }
  else if (showModal === false ){
    document.body.style.overflow = 'scroll'
  }

  function castParallax() {
    var opThresh = 350;
    var opFactor = 750;

    window.addEventListener("scroll", function (event) {
      var top = this.pageYOffset;

      var layers = document.getElementsByClassName("parallax");
      var layer, speed, yPos;
      for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute("data-speed");
        var yPos = -((top * speed) / 100);
        layer.setAttribute(
          "style",
          "transform: translate3d(0px, " + yPos + "px, 0px)"
        );
      }
    });
  }

  document.body.onload = castParallax();

  return (
    <>
      <div className="button">
        <button onClick={openModal} class="noselect red">
          Register
        </button>
      </div>
      <div className="register">
        <Register
          className="register"
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
      <div className="button1">
        <button onClick={openModal1} class="noselect red">
          Login
        </button>
      </div>
      <div className="login">
        <Login
          className="login"
          showModal1={showModal1}
          setShowModal1={setShowModal1}
        />
      </div>

      <div className="keyart" id="parallax">
        <Box sx={{ flexGrow: 1 }}></Box>
        <div
          className="keyart_layer parallax"
          id="keyart-1"
          data-speed="5"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-2"
          data-speed="11"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-3"
          data-speed="16"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-4"
          data-speed="26"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-5"
          data-speed="36"
        ></div>
        <div
          className="keyart_layer parallax"
          id="keyart-6"
          data-speed="49"
        ></div>
        <div className="keyart_layer" id="keyart-scrim"></div>
        <div
          className="keyart_layer parallax"
          id="keyart-7"
          data-speed="69"
        ></div>
        <div className="keyart_layer" id="keyart-8" data-speed="100"></div>
      </div>
    </>
  );
}
