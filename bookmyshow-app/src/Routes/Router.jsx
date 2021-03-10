import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </div>
    )
}

export default Router
