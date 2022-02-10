import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import "./profile.css";
import { FcLike } from "react-icons/fc";

export default function Profile() {
  const users = localStorage.getItem("auth_name");
  const email = localStorage.getItem("auth_email");
  const adress = localStorage.getItem("auth_adress");
  const old = localStorage.getItem("auth_old");
  const gender = localStorage.getItem("auth_gender");
  

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
              <b>{users}</b>
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
              name="email"
              class="input"
              placeholder="a"
            />
            <label for="" class="label">
              {email}
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
              {adress}
            </label>
          </div>
          <div class="inputContainer">
            <input
              type="number"
              name="old"
              class="input"
              placeholder="years old"
            />
            <label for="" class="label">
              {old}
            </label>
          </div>
          <div class="inputContainer">
          <input
            type=""
            name="gender"
            class="input"
            placeholder="gender"
          />
          <label for="" class="label">
            {gender}
          </label>
        </div>
        <div class="inputContainer">
        <input
          type=""
          name="gender"
          class="input"
          placeholder="gender"
        />
        <label for="" class="label">
          {gender}
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


