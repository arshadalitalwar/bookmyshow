import React from "react";
import { useSelector } from "react-redux";
import { CommonCarousel } from "./CommonCarousel";
import styles from "../Styling/RecommendedMovies.module.css";

export const LaughterEvents = () => {
    const laughter_events = useSelector(state => state.app.laughter_events);
    // console.log(laughter_events);

    return (
        <div className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Laughter Events</h1>
            </div>
            <CommonCarousel events={laughter_events} />
        </div>
    )
}