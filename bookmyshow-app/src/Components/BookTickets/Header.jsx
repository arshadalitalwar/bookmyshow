import React from "react";
import { useParams } from "react-router";

export const Header = () => {
    const { movie_name } = useParams();


    return (
        <div>Header</div>
    )
}