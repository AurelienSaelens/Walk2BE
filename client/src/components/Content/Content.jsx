import React, { useState } from "react";
import Topbar from "../Topbar/Topbar";
import "./content.css";

function Content() {


  return (
    <div className="Content">
      <h3>Walk2BE is a free platform dedicated <br></br> to short and long walks, by bike or on foot, <br></br>  it will make everyone happy.</h3>
       <a href="/register"><button onclick="location.href='/register'" class="noselect red">Sign up</button></a>
       <a href="/login"><button onclick="location.href='/register'" class="noselect red">Sign in</button></a>

    </div>

  );
}

export default Content
 