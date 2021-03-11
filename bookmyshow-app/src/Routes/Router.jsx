import React from "react";
import { Switch, Route } from "react-router-dom";
import MoviePage from "../Pages/moviePage/MoviePage";

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/movies/:id">
          <MoviePage></MoviePage>
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
