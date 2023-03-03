import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import faker from "faker";

const MovieDetail = function () {

    const { Value } = useParams();
    
    const {
        inputMovie,
        functions,
    } = useContext(DataContext);

    const { fetchMovieByID } = functions;

    useEffect(() => {
        if (Value !== undefined) {
            fetchMovieByID(Value);
        }
    }, []);

    const firstNameGen = faker.name.firstName();
    const lastNameGen = faker.name.lastName();

    return (
        <div className="detail-page">
            <div className="detail-left">
                <img alt="movie detail" className="detail-image" src={inputMovie.image_url} />
            </div>
            <h1>Detail Pelem</h1>
        </div>
    );
    
}

export default MovieDetail;