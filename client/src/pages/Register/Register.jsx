import axios from "axios";
import React, { useState } from "react";
import "./register.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export default function Register({ showModal, setShowModal }) {
  const history = useHistory();

  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: registerInput.username,
      email: registerInput.email,
      password: registerInput.password,
    };

    const email = data.email

    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.post(`/api/register`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("auth_token", res.data.token);
          localStorage.setItem("auth_name", res.data.username);
          swal("Success", res.data.message, "success");
          history.push("/");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <>
      {showModal ? (
        <div className="signupFrm">
          <form onSubmit={registerSubmit} className="form">
            <h1 className="title">Register</h1>

            <div class="inputContainer">
              <input
                type=""
                name="username"
                onChange={handleInput}
                value={registerInput.username}
                class="input"
                placeholder="a"
              />
              <label for="" class="label">
                Username
              </label>
            </div>
            <span>{registerInput.error_list.username}</span>

            <div class="inputContainer">
              <input
                type=""
                name="email"
                onChange={handleInput}
                value={registerInput.email}
                class="input"
                placeholder="a"
              />
              <label for="" class="label">
                Email
              </label>
            </div>
            <span>{registerInput.error_list.email}</span>

            <div class="inputContainer">
            <input
              type=""
              name="adress"
              onChange={handleInput}
              value={registerInput.adress}
              class="input"
              placeholder="a"
            />
            <label for="" class="label">
              Adress
            </label>
          </div>
          <span>{registerInput.error_list.adress}</span>

            <div class="inputContainer">
            <input
              type=""
              name="gender"
              onChange={handleInput}
              value={registerInput.gender}
              class="input"
              placeholder="a"
            />
            <label for="" class="label">
              Gender
            </label>
          </div>
          <span>{registerInput.error_list.gender}</span>

            <div class="inputContainer">
            <input
              type=""
              name="old"
              onChange={handleInput}
              value={registerInput.old}
              class="input"
              placeholder="a"
            />
            <label for="" class="label">
              Age
            </label>
          </div>
          <span>{registerInput.error_list.email}</span>

            <div class="inputContainer">
              <input
                type="password"
                name="password"
                onChange={handleInput}
                value={registerInput.password}
                class="input"
                placeholder="Password"
              />
              <label for="" class="label">
                Password
              </label>
            </div>
            <span>{registerInput.error_list.password}</span>

            <input type="submit" class="submitBtn" value="Sign up" />
          </form>
        </div>
      ) : null}
    </>
  );
}
