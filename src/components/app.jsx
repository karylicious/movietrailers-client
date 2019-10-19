import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './home'
import MovieDetails from './movieDetails'
import Notfound from './notFound'

export default class App extends Component {
    render() {
        return (
            <div>              
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/movies/:id" exact component={MovieDetails} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        )
    }
} 