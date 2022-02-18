import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import "./topbar.css";
import {FaUserAlt} from "react-icons/fa";
import {ImHome3} from 'react-icons/im';
import {RiLogoutBoxFill} from "react-icons/ri";
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Topbar() {
  const history = useHistory();
  const user = localStorage.getItem('auth_name');
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

  const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
      document.getElementById('topbar').classList.toggle('topbar');
      document.getElementById('topbar').classList.toggle('topbar-light');
      document.getElementById('user').classList.toggle('user');
      document.getElementById('user').classList.toggle('user-light');
      document.getElementById('user-btn').classList.toggle('user-btn');
      document.getElementById('user-btn').classList.toggle('user-btn-light');
      document.getElementById('home-btn').classList.toggle('home-btn');
      document.getElementById('home-btn').classList.toggle('home-btn-light');
      document.getElementById('logout').classList.toggle('logout');
      document.getElementById('logout').classList.toggle('logout-light');
    };

  return (
    <>
    <div id="topbar" className="topbar">
      <div className="user-icon">

      <a href="/profile" type="button" id="user-btn" className="user-btn">
      <FaUserAlt size={25}/>
      </a>
      <div id="user" className="user">Hi, {user}</div>
      </div>
      <div className="home-btn">
      <a href="/ "type="button" id="home-btn" className="home-btn">
      <ImHome3 size={30}/>
      </a>
      </div>
      <div className="dark-btn">
      <Switch
      checked={checked}
      onClick={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      />
      </div>
      <div className="logout-btn">
      <a type="button" href="/" onClick={logoutSubmit} id="logout" className="logout">
        <RiLogoutBoxFill size={30} />
      </a>
      </div>
    </div>
    </>
  );
}

