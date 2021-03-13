import React, { useEffect } from "react";
import { BsClockHistory, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "../Styling/Cinemas.module.css";
import { handleAddMovieName } from "../../Redux/booking_details/actions";

export const Header = () => {

    const movie = useSelector(state => state.data.movies).data;
    const isLoading = useSelector(state => state.data.isLoading);
    const isError = useSelector(state => state.data.isError);
    const dispatch = useDispatch();

    useEffect(() => {
        if (movie) {
            dispatch(handleAddMovieName(movie.movie_name, movie.movie_grade, movie.banner_image_url))
        }
    }, [movie])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return movie === undefined ? <div>Loading...</div> : isLoading ? <div>Loading...</div> : isError ? <div>Something wrong happened</div> : (
        <div className={styles.header__container}>
            <div className={styles.header_container__info}>
                <h1>{movie.movie_name}</h1>
                <div>
                    <div className={styles.header_container__info__grade}> {movie.movie_grade}</div>
                    <div className={styles.header_container__info__rating}>
                        <div>  <BsHeartFill style={{ color: "red", marginRight: 5 }} /> <span> {movie.rating.percentage}%  </span> </div>
                        <span> {movie.rating.no_of_ratings}k VOTES</span>
                    </div>
                    <div className={styles.header_container__info__genre}>
                        {
                            movie.movie_genre?.map((genreItem, index) => (
                                <div key={genreItem.genre + index}>
                                    {genreItem.genre}
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.header_container__info__date}> {movie.release_date}</div>
                    <div className={styles.header_container__info__duration}>
                        <BsClockHistory style={{ marginRight: 5 }} />
                        {movie.movie_duration}
                    </div>
                </div>
            </div>
            <div className={styles.header__container__crew}>
                <h4>Cast & Crew</h4>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]}>
                    {
                        movie.crew?.map((person, index) => (
                            <div key={index + 1} className={styles.header__container__crew__item}>
                                <img src={person.crew_image} alt={person.name} /><br />
                                <span>{person.name}</span>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}