import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { BookTicketsPage } from '../Pages/BookTicketsPage';
import { HomePage } from '../Pages/HomePage';

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/booktickets/:id">
                    <BookTicketsPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Router
