import React, { Component } from 'react';
import App from '../App/App';
import { Switch, Route } from 'react-router-dom';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={App}/>
                </Switch>
            </div>
        )
    }
}