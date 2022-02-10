import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "./topbar.css";
import {FaUserAlt} from "react-icons/fa"

function Topbar() {
  const history = useHistory();

  const logoutSubmit = (e) => {
   
        localStorage.clear();

        history.push("/");
      
    ;
  };

  return (
    <div id="topbar">
      <div className="user-icon">
      <a href="/profile "type="button"className="user-btn">
      <FaUserAlt />
      </a>
      </div>
      <button type="button" onClick={logoutSubmit} Redirect to="/" className="logout">
        Logout
      </button>
    </div>
  );
}

export default Topbar;
