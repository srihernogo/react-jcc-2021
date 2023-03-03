import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Cookies from "js-cookie";
import Typography from "@mui/material/Typography";

function Home() {
  const history = useHistory();
  const { dataMovie, movieFetchStatus, setMovieFetchStatus, functions } =
    useContext(DataContext);
  const { fetchMovieData } = functions;

  useEffect(() => {
    if (movieFetchStatus === false) {
      fetchMovieData();
      setMovieFetchStatus(true);
    }
  }, [fetchMovieData, movieFetchStatus, setMovieFetchStatus]);

  const handleClickMovie = (event) => {
    let idMovie = parseInt(event.currentTarget.value);
    console.log(idMovie);
    history.push(`/detail_movie/${idMovie}`);
  };

  return (
    <div class={Cookies.get("token")!==undefined ? "login-shifted" : "content"}>
      <Typography className="home-title" variant="h3">
        {" "}
        Hot Movies
      </Typography>
      <br />
      <div className="homepage-container">
        {dataMovie.slice(0, 4).map((val, _) => {
          return (
            <div className="card">
              <div className="card_up">
                <img
                  alt="some card"
                  src={val.image_url}
                  style={{
                    objectFit: "cover",
                    width: "300px",
                    height: "400px",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </div>
              <div className="card_down">
                <br />
                <h3>
                  {val.title !== null ? val.title.toUpperCase() : val.title}
                </h3>
                <ul className="card_detail">
                  <li>{val.year}</li>
                  <li>{val.genre}</li>
                </ul>
                <p>
                  {val.description !== null
                    ? val.description.slice(0, 50)
                    : val.description}
                  . . .
                </p>
                <Button
                  value={val.id}
                  onClick={handleClickMovie}
                  variant="ouline-dark"
                >
                  Read More
                </Button>
                <br />
              </div>
            </div>
          );
        })}
        <Link style={{ color: "inherit" }} to="/all_movie">
          <Button
            variant="outline-dark"
            sx={{ position: "absolute", right: "120px" }}
          >
            See other movie..
          </Button>
        </Link>
        <br />
        <hr />
      </div>
    </div>
  );
}

export default Home;
