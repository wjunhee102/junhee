import React from 'react';
import App from './App';
import { Provider } from "react-redux";
import movieStore from "./store";

function Ticketing() {
    return (
        <React.StrictMode>
            <Provider store={movieStore}>
                <App />
            </Provider>
        </React.StrictMode>
    )
}
  
export default Ticketing;
