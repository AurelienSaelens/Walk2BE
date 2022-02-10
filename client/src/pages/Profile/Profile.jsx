import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import "./profile.css";
import { FcLike } from "react-icons/fc";

function Profile() {
  const users = localStorage.getItem("auth_name");

  return (
    <>
      <div className="profile-ctn">
        <div className="block-left">
          <Topbar />
          <h2>This is a list with your favorites walks : </h2>
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>{" "}
          <div className="card1">
            <div class="container">
              <h2>Bruxelles</h2>
              <p>Saint pierre</p>
              <FcLike className="iconLike" />
            </div>
          </div>
        </div>
        <div className="fixed">
          <div className="block-right">
            <h2>
              Welcome to your profile page  <br></br>
              <b>AurelienSa{users}</b>
            </h2>
            <div class="profile-pic">
            <span class="glyphicon glyphicon-camera"></span>
            <span>Change Image</span>
        </div>
        <div className="profileFrm">
        <form  className="formProfile">


          <div class="inputContainer">
            <input
              type=""
              name="username"
              class="input"
              placeholder="a"
            />
            <label for="" class="label">
              Username
            </label>
          </div>

          <div class="inputContainer">
            <input
              type=""
              name="email"
              class="input"
              placeholder="a"
            />
            <label for="" class="label">
              Email
            </label>
          </div>
          <div class="inputContainer">
            <input
              type="password"
              name="password"
              class="input"
              placeholder="Password"
            />
            <label for="" class="label">
              Password
            </label>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
