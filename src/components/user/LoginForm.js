import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Login = () => {
  const history = useHistory();
  const { setLoginStatus } = useContext(UserContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    let typeOfInput = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: typeOfInput });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        Cookies.set("user", user.name, { expires: 1 });
        Cookies.set("email", user.email, { expires: 1 });
        Cookies.set("token", token, { expires: 1 });
        history.push("/");
        setLoginStatus(true);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="form-container">
      <img
        alt="some stuff"
        className="form-image"
        src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg"
      />
      <form className="form" onSubmit={handleSubmit}>
        <Typography variant="h5">Login to your account!</Typography>
        <br />
        <label>Email : </label>
        <input
          className="input"
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <Typography sx={{ color: "gray" }} variant="subtitle2">
          Input your registered email
        </Typography>
        <label>Password : </label>
        <input
          className="input"
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
