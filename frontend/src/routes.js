import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Initial from './pages/Initial';
import Create from './pages/Create';
import Update from './pages/Update';


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial}/>
                <Route path="/create" component={Create}/>
                <Route path="/update" component={Update}/>
            </Switch>
        </BrowserRouter>
    )
}