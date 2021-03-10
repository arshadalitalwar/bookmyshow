import React from "react";
import { useSelector } from "react-redux";
import { MovieCarousel } from "./MovieCarousel";
import styles from "../Styling/RecommendedMovies.module.css";

export const PremierMovies = () => {
    const movies_data = useSelector(state => state.app.movies_data);

    const filteredPremierMovies = movies_data.filter(moive => (
        moive.is_premier
    ))

    const premierMovieContainerStyle = `${styles.parent} ${styles.premier__container}`

    return (
        <div className={premierMovieContainerStyle} >
            <div className={styles.parent__text} >
                <h1 style={{ color: "white" }}>Premiers</h1>
            </div>
            <span style={{ color: "white", marginLeft: "11%" }}>Brand new releases every Friday</span>
            <MovieCarousel movies={filteredPremierMovies} />
        </div>
    )
}