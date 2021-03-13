import React from "react";
import { useSelector } from "react-redux";
import { CommonCarousel } from "./CommonCarousel";
import styles from "../Styling/RecommendedMovies.module.css";

export const OutdoorEvents = () => {
    const outdoor_events = useSelector(state => state.app.outdoor_events);
    return (
        <div className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Outdoor Events</h1>
            </div>
            <CommonCarousel events={outdoor_events} />
        </div>
    )
}