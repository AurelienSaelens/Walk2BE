import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import Topbar from "../Topbar/Topbar";
import "./content.css";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

function Content() {


  return (
    <div className="Content">
      <h3>Walk2BE is a free platform dedicated <br></br> to short and long walks, by bike or on foot, <br></br>  it will make everyone happy.</h3>
     <Register />
    </div>

  );
}

export default Content
