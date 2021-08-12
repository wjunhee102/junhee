import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Port from "./Port";
import Mask from './maskApp/mask';
import Ticketing from './ticketing/ticketing';

function App() {

    return (
    <>
        <HashRouter>
            <Route path="/" exact={true} component={Port} />
            <Route path="/maskApp" component={Mask} />
            <Route path="/ticketing" component={()=> import("./ticketing/ticketing")} />
        </HashRouter>
    </>
    )
}

export default App;