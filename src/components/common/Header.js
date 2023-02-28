import "../../assets/css/styles.css";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logoipsum-logo-16.png";
import HomeIcon from "@mui/icons-material/Home";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import LogoutIcon from "@mui/icons-material/Logout";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import Typography from "@mui/material/Typography";
import Cookies from "js-cookie";

function Header() {
  const { setLoginStatus } = useContext(UserContext);
  let history = useHistory();

  const handleLogout = () => {
    setLoginStatus(false);
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("token");
    history.push("/");
  };

  return (
    <section className="navbar-container">
      <nav className="topnav">
        {Cookies.get("token") !== undefined && (
          <div className="nav-item">
            <Link to="" onClick={handleLogout}>
              <LogoutIcon id="navbar-icon" />
              <Typography variant="h6">Logout</Typography>
            </Link>
          </div>
        )}
        {Cookies.get("token") === undefined && (
          <>
            <div className="nav-item">
              <Link to="/register">
                <AppRegistrationRoundedIcon id="navbar-icon" />
                <Typography variant="h6">Register</Typography>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/login">
                <LoginTwoToneIcon id="navbar-icon" />
                <Typography variant="h6">Login</Typography>
              </Link>
            </div>
          </>
        )}
        <div className="nav-item">
          <SportsEsportsTwoToneIcon id="navbar-icon" />
          <Typography variant="h6">Games</Typography>
        </div>
        <div className="nav-item">
          <MovieTwoToneIcon id="navbar-icon" />
          <Typography variant="h6">Movies</Typography>
        </div>
        <div className="nav-item">
          <Link to="/">
            <HomeIcon id="navbar-icon" />
            <Typography variant="h6">Home</Typography>
          </Link>
        </div>
      </nav>
      <div id="Logo-Navbar" style={{ margin: "auto", position: "absolute", left: "20px" }}>
        <Link to="/">
          <img id="logo" src={logo} width="100" alt="IpsumLogo" />
        </Link>
      </div>
    </section>
  );
}

export default Header;
