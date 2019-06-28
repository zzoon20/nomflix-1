import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Header from 'Components/Header';
import Search from 'Routes/Search';

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tv" exact component={TV}/>
            <Route path="/search" exact component={Search}/>
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>  
);