import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCinemas } from "../Redux/cinemas/action";
import { CinemasBody } from "../Components/BookTickets/CinemasBody";

export const BookTicketsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCinemas());
    }, [])


    return (
        <div style={{ backgroundColor: "#F2F2F2" }}>Tickets
            <CinemasBody />
        </div>
    )
}