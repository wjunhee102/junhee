import React from 'react';
import CalApp from './calApp';
import { Provider } from "react-redux";
import store from "./store";

function Calulator() {
  return (
    <Provider store={store}>
      <CalApp />
    </Provider>
  )
}

export default Calulator;

