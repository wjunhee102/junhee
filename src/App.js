import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Port from "./Port"

function App() {

 
    return (
    <>
        <HashRouter>
            <Route path="/" exact={true} component={Port} />
        </HashRouter>
    </>
    )
}

export default App;