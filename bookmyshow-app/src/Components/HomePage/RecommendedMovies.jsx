import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MovieCarousel } from "./MovieCarousel";
import styles from "../Styling/RecommendedMovies.module.css";
import { RiArrowRightSLine } from "react-icons/ri";

export const RecommendedMovies = () => {
    const movies_data = useSelector(state => state.app.movies_data);


    const filteredRecommendedMovies = movies_data.filter(moive => (
        !moive.is_premier
    ))

    // console.log(filteredRecommendedMovies);

    return (
        <div className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Recommended Movies</h1>
                <Link to="/ncr/movies" className={styles.link}>See all <RiArrowRightSLine /></Link>
            </div>
            <MovieCarousel movies={filteredRecommendedMovies} />
        </div>
    )
}