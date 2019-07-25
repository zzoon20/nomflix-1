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
            <Route path="/nomflix/" exact component={Home}/>
            <Route path="/nomflix/tv" exact component={TV}/>
            {/* <Route path="/show/:id" exact component={TVDetail}/> */}
            <Route path="/nomflix/show/:id" exact component={Detail}/>
            <Route path="/nomflix/movie/:id" exact component={Detail}/>
            <Route path="/nomflix/search" exact component={Search}/>
            <Redirect from="*" to="/nomflix"/>
        </Switch>
    </Router>  
);