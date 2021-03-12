import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCinemas } from "../Redux/cinemas/action";
import { CinemasBody } from "../Components/BookTickets/CinemasBody";

import { useParams } from "react-router";
import { Header } from "../Components/BookTickets/Header";
import { getMovies } from "../Redux/data/actions";
import { Filter } from "../Components/BookTickets/Filter";

export const BookTicketsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [filters, setFilters] = useState([])
    const [count, setCount] = useState(0)
    // const movie = useSelector(state => state.data.movies).data;
    const movie_name = useSelector(state => state.booking_details);
    // console.log(movie_name)
    // const [bookingDetails, setBookingDetails] = useState({
    //     movie_name: "",
    //     date: "",
    //     day: "",
    //     time: "",
    //     cinemas_name: ""
    // });


    useEffect(() => {
        dispatch(getCinemas());
        dispatch(getMovies(id));
    }, [])

    const handleFilters = (item) => {
        const newData = filters;
        if (filters.indexOf(item) >= 0) {
            newData.splice(filters.indexOf(item), 1);
            setFilters(newData);
        } else {
            newData.push(item);
            setFilters(newData);
        }
        setCount(prev => prev + 1);
    }

    // const handleSelectNameTime = (cinemas_name, time) => {
    //     console.log(cinemas_name, time)
    //     setBookingDetails({ ...bookingDetails, cinemas_name, time })
    //     setCount(prev => prev + 1);
    // }

    // const handleSelectDate = (date, day) => {
    //     setBookingDetails({ ...bookingDetails, date, day });
    //     setCount(prev => prev + 1);
    // }

    // const handleMovieName = (movie_name) => {
    //     setBookingDetails({ ...bookingDetails, movie_name })
    // }

    useEffect(() => {
        // console.log(count, "count")
        // console.log(bookingDetails)
    }, [count])

    return (
        <div style={{ backgroundColor: "#F2F2F2", paddingBottom: 20 }}>
            <Header />
            <Filter handleFilters={handleFilters} filters={filters} />
            <CinemasBody filters={filters} />
        </div>
    )
}