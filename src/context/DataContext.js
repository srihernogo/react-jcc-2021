import axios from "axios";
import React, { createContext, useState } from "react";
import { useHistory } from "react-router";
import Cookies from "js-cookie";
export const DataContext = createContext();

export const DataProvider = (props) => {

    // CONTEXT FOR MOVIE
    const [dataMovie, setDataMovie] = useState([]);
    const [inputMovie, setInputMovie] = useState({
        description: "",
        duration: 0,
        genre: "",
        image_url: "",
        rating: 0,
        review: "",
        title: "",
        year: 0,
      });
    const [currentMovieId, setCurrentMovieId] = useState(-1);
    const [movieFetchStatus, setMovieFetchStatus] = useState(false);

    const fetchMovieData = async function () {
        const result = await axios.get("https://backendexample.sanbersy.com/api/data-movie");
        const data = result.data;
        setDataMovie(
            data.map((e, _) => {
                return {
                    id: e.id,
                    description: e.description,
                    duration: e.duration,
                    genre: e.genre,
                    image_url: e.image_url,
                    rating: e.rating,
                    review: e.review,
                    title: e.title,
                    year: e.year,
                };
            })
        );
    };

    const fetchMovieByID = async (idMovie) => {
        let res = await axios.get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`);
          let data = res.data;
          setInputMovie({
            id: data.id,
            description: data.description,
            duration: data.duration,
            genre: data.genre,
            image_url: data.image_url,
            rating: data.rating,
            review: data.review,
            title: data.title,
            year: data.year,
          });
          setCurrentMovieId(data.id);
    };

    const functions = {
        fetchMovieData,
        fetchMovieByID,
    };

    return (
        <DataContext.Provider
            value={{
                dataMovie,
                inputMovie,
                setDataMovie,
                currentMovieId,
                setCurrentMovieId,
                movieFetchStatus,
                setMovieFetchStatus,
                functions,
            }}
        >
          {props.children}
        </DataContext.Provider>
      );
};
