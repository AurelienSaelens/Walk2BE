import React from 'react';
import parallax from './parallax.css'

function Parallax () {

  function castParallax() {

    var opThresh = 350;
    var opFactor = 750;
  
    window.addEventListener("scroll", function(event){
  
      var top = this.pageYOffset;
  
      var layers = document.getElementsByClassName("parallax");
      var layer, speed, yPos;
      for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
  
      }
    });
  }
  
  document.body.onload = castParallax();
  
  return (
    <div className="keyart" id="parallax">
      <div className="keyart_layer parallax" id="keyart-0" data-speed="2"></div>
      <div className="keyart_layer parallax" id="keyart-1" data-speed="5"></div>
      <div className="keyart_layer parallax" id="keyart-2" data-speed="11"></div>
      <div className="keyart_layer parallax" id="keyart-3" data-speed="16"></div>
      <div className="keyart_layer parallax" id="keyart-4" data-speed="26"></div>
      <div className="keyart_layer parallax" id="keyart-5" data-speed="36"></div>
      <div className="keyart_layer parallax" id="keyart-6" data-speed="49"></div>
      <div className="keyart_layer" id="keyart-scrim"></div>
      <div className="keyart_layer parallax" id="keyart-7" data-speed="69"></div>
      <div className="keyart_layer" id="keyart-8" data-speed="100"></div>	
    </div>
    

  );
}

export default Parallax ;


