import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import gameList from "./games/GameList";


import Header from "./Header"
import history from "../history"


const App = () => {
    return (
        <div className="ui container">
            
            <Router history={history} >
                <div>
                <Header></Header>
                <Switch>
                    <Route path="/" exact component={gameList}></Route>
             
                </Switch>
                </div>
            </Router>

        </div>
    )
}

export default App;
