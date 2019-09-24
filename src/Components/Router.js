import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Header from 'Components/Header';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Collections from 'Routes/Collections';
import SearchContextProvider from 'context';
// import TVDetail from 'Routes/TVDetail';

export default () => (
    // github 에서 페이징할 떄는 nomflix 넣어주기
    // 위에 browserouter 로 바꿔줘야함
    // poster.js 에서도 nomflix url 추가해줘야함
    // <Router>
    //     <Header/>
    //     <Switch>
    //         <Route path="/nomflix/" exact component={Home}/>
    //         <Route path="/nomflix/tv" exact component={TV}/>
    //         {/* <Route path="/show/:id" exact component={TVDetail}/> */}
    //         <Route path="/nomflix/show/:id" exact component={Detail}/>
    //         <Route path="/nomflix/movie/:id" exact component={Detail}/>
    //         <Route path="/nomflix/search" exact component={Search}/>
    //         <Redirect from="*" to="/nomflix"/>
    //     </Switch>
    // </Router>  

    <Router>
        <SearchContextProvider>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/tv" exact component={TV}/>
                {/* <Route path="/show/:id" exact component={TVDetail}/> */}
                <Route path="/show/:id" exact component={Detail}/>
                <Route path="/movie/:id" exact component={Detail}/>
                <Route path="/collections/:id" exact component={Collections}/>
                <Route path="/search" exact component={Search}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </SearchContextProvider>
     </Router>  


);