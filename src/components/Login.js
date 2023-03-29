import axios from "axios";
import React, { useState } from "react";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = () => {
    setError("");
    setPassword("");
    setUserName("");
    const { setToken } = props;
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password,
      },
    })
      .then((res) => {
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setError("Please enter valid credentials!");
      });
  };
  console.log("error", error);

  return (
    <div className="login">
      <div className="login-inputs">
        <label for="exampleInputEmail1" class="form-label mt-4">
          Email address
        </label>
        <input
          type="email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <label for="exampleInputPassword1" class="form-label mt-4">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        ></input>
        {error && <p class="text-danger">{error}</p>}
        <button onClick={loginHandler} type="button" class="btn btn-primary">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
