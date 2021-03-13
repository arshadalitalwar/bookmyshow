import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddCarousel } from "../Components/HomePage/AddCarousel";
import { Entertainment } from "../Components/HomePage/Entertainment";
import { LatestEvents } from "../Components/HomePage/LatestEvents";
import { LaughterEvents } from "../Components/HomePage/LaughterEvents";
import { OutdoorEvents } from "../Components/HomePage/OutdoorEvents";
import { PopularEvents } from "../Components/HomePage/PopularEvents";
import { PremierMovies } from "../Components/HomePage/PremierMovies";
import { RecommendedMovies } from "../Components/HomePage/RecommendedMovies";
import { getLatestEvents, getLaughterEvents, getMovies, getOutdoorEvents, getPopularEvents } from "../Redux/app/actions";
import { getBookingDetails } from "../Redux/booking/action";

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getOutdoorEvents());
        dispatch(getLaughterEvents());
        dispatch(getPopularEvents());
        dispatch(getLatestEvents());
        dispatch(getBookingDetails());
    }, [])
    return (
        <div style={{ backgroundColor: "#F2F5F9" }}>
            <AddCarousel />
            <RecommendedMovies />
            <Entertainment />
            <PremierMovies />
            <OutdoorEvents />
            <div style={{ backgroundColor: "#F2F2F2" }}>
                <LaughterEvents />
                <PopularEvents />
                <LatestEvents />
            </div>
        </div>
    )
}