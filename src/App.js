import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Port from "./Port";
import Ticketing from './ticketing/ticketing';

function App() {

 
    return (
    <>
        <HashRouter>
            <Route path="/" exact={true} component={Port} />
            <Route path="/ticketing" component={Ticketing} />
        </HashRouter>
    </>
    )
}

export default App;