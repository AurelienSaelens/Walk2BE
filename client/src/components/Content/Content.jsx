import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import "./content.css";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login"

function Content() {

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev)
  }




  return (
    <div className="Content">
      <p>Walk2BE is a fantastic platform dedicated to short and long walks, by bike or on foot, <br></br>  it will make everyone <span class="yellow">happy</span>.<br></br>To find the ride of your <span className="yellow">dreams</span>, you just have to <span class="yellow">register</span> and find your meeting point! <br></br> This platform is free and will remain so. </p>
    </div>

  );
}

export default Content
 