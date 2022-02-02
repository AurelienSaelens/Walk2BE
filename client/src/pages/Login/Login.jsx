import { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function Login({showModal1, setShowModal1}) {

  const history = useHistory();
  const [loginInput, setLogin] = useState({

    email:'',
    password:'',
    error_list:[],
  });
 
  const handleInput = (e) => {
    e.persist();
    setLogin({...loginInput, [e.target.name]: e.target.value });
  }

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`api/login`, data).then(res => {
        if(res.data.status === 200)
        {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success",res.data.message,"success");
          history.push('/walk');
        } 
        else if(res.data.status === 401)
        {
          swal("Warning",res.data.message,"warning");
        } 
        else
        {
          setLogin({...loginInput, error_list: res.data.validation_errors });
        }
      });
    });

  }
 
  return (
    <>
    {showModal1 ?  <div class="signupFrm">

      <form onSubmit={loginSubmit} class="form">
      <h1 class="title">Sign in</h1>

      <div class="inputContainer">
        <input type="email" name="email" onChange={handleInput} value={loginInput.email} class="input" placeholder="a" />
        <label for="" class="label">Email</label>
      </div>
      <span>{loginInput.error_list.email}</span>

      <div class="inputContainer">
        <input type="password" name="password" onChange={handleInput} value={loginInput.password} class="input" placeholder="a" />
        <label for="" class="label">Password</label>
      </div>
      <span>{loginInput.error_list.password}</span>

      <input type="submit" class="submitBtn" value="Sign in" />

      <form action="" class="form">
        <h1 class="title">Sign in</h1>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Email</label>
        </div>
  
        <div class="inputContainer">
          <input type="password" class="input" placeholder="a" />
          <label for="" class="label">Password</label>
        </div>
  
        <input type="submit" class="submitBtn" value="Sign in" />

      </form>
    </div> : null}
    </>
  );
}
