import { useContext, useRef } from "react";
import "./login.css";
import  {AuthContext} from "../../Context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import Content from "../../components/Content/Content";

export default function Login({showModal1, setShowModal}) {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
  };
 

  return (
    <>
    {showModal1 ?  <div class="signupFrm">
      <form action="" class="form">
        <h1 class="title">Sign in</h1>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Email</label>
        </div>
  
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" />
          <label for="" class="label">Password</label>
        </div>
  
        <input type="submit" class="submitBtn" value="Sign in" />
      </form>
    </div> : null}
    </>
  );
}
