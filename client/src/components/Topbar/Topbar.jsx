import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import "./topbar.css";
import {FaUserAlt} from "react-icons/fa"
import a from '../../../src/Aurlien.png'

function Topbar() {
  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        swal("Success", res.data.message, "success");
        history.push("/");
      }
    });
  };

  return (
    <div id="topbar">
    <img className="logo"alt="" src={a} />
      <div className="user-icon">
      <button className="user-btn">
      <FaUserAlt />
      </button>
      </div>
      <button type="button" onClick={logoutSubmit} className="logout">
        Logout
      </button>
    </div>
  );
}

export default Topbar;
