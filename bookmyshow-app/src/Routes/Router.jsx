import React from 'react'
import { Switch, Route } from 'react-router-dom';

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    Home
                </Route>
            </Switch>
        </div>
    )
}

export default Router
