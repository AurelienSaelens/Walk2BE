import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import "./topbar.css";
import {FaUserAlt} from "react-icons/fa"
import {ImHome3} from 'react-icons/im'
import {RiLogoutBoxFill} from "react-icons/ri"

export default function Topbar() {
  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        history.push("/");

        window.location.reload(false);

      }
    });
  };

  return (
    <>
    <div id="topbar">
      <div className="user-icon">

      <a href="/profile "type="button"className="user-btn">
      <FaUserAlt size={25}/>
      </a>
      </div>
      <div className="home-btn">
      <a href="/ "type="button"className="home-btn">
      <ImHome3 size={30}/>
      </a>
      </div>
      <div className="logout-btn">
      <a type="button" href="/" onClick={logoutSubmit} className="logout">
        <RiLogoutBoxFill size={30} />
      </a>
      </div>
    </div>
    </>
  );
}

