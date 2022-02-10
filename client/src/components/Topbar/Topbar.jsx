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

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        history.push("/");
        window.location.reload(false);
        swal("Success", res.data.message, "success");
      }
    });
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
