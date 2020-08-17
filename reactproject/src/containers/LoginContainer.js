import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import * as yup from 'yup';
import apiHelper from "../apis/api.helper"

const LoginContainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    schema.validate({ username, password }, { abortEarly: false })
    .then((user) => {
      apiHelper('post', 'https://api.taiga.io/api/v1/auth', 
      {username, password, type: 'normal'}).then((response) => {
        console.log(response)
      })
    })
    .catch((err) => {
      err.inner.forEach((ele) => {
        if (ele.path === 'username') setUsernameError(ele.message);
        if (ele.path === 'password') setPasswordError(ele.message);
        console.log(ele.path, ele.message);
      });
    });
  };

  return (
    <LoginComponent username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      validateData={validateData} 
      usernameError={usernameError} 
      passwordError={passwordError}/>
  );
}

export default LoginContainer;