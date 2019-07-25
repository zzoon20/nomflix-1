import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Header from 'Components/Header';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
// import TVDetail from 'Routes/TVDetail';

export default () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tv" exact component={TV}/>
            {/* <Route path="/show/:id" exact component={TVDetail}/> */}
            <Route path="/show/:id" exact component={Detail}/>
            <Route path="/movie/:id" exact component={Detail}/>
            <Route path="/search" exact component={Search}/>
            <Redirect from="*" to="/"/>
        </Switch>
    </Router>  
);