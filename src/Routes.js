import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { DataProvider } from "./context/DataContext";
import Cookies from "js-cookie";
import Header from "./components/common/Header";
import Login from "./components/user/LoginForm";
import Register from "./components/user/RegisterForm";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";

function Routes() {
  //const { loginStatus } = useContext(UserContext);
  //console.log(loginStatus);
  const LoginRoute = ({ ...props }) => {
    if (Cookies.get("token") !== undefined) {
      return <Redirect path="/" />;
    } else {
      return <Route {...props} />;
    }
  };

  return (
    <Router>
      <Header />
      <DataProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail_movie/:Value">
            <MovieDetail />
          </Route>
          <LoginRoute exact path="/login" component={Login} />
          <LoginRoute exact path="/register" component={Register} />
        </Switch>
      </DataProvider>
    </Router>
  );
}

export default Routes;
