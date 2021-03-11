import React from "react";
import { Switch, Route } from "react-router-dom";
import MoviePage from "../Pages/moviePage/MoviePage";
import {HomePage} from '../Pages/HomePage'
import SeeAll from "../Pages/SeeAll";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/ncr/movies">
          <SeeAll/>
        </Route>
      
        <Route exact path="/movies/:id">
          <MoviePage></MoviePage>
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
