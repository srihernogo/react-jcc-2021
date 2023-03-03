import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Register = () => {
  const history = useHistory();
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then(() => {
        // TODO: Fungsi history.push
        history.push("/login");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  return (
    <div className="form-container register">
      <img
        alt="some stuff"
        className="form-image"
        src="https://image.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg"
      />
      <form className="form " onSubmit={handleSubmit}>
        <Typography variant="h5">Register Now!</Typography>
        <Typography variant="body1">
          Open your account. It's free and only takes a minute.
        </Typography>
        <br />
        <label>Full Name : </label>
        <input
          className="input"
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <label>Email : </label>
        <input
          className="input"
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
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

export default Register;
