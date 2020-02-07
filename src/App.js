import React, { useState, useEffect } from 'react';
import Header from './elements/header';
import Intro from './elements/intro';
import Connect from './elements/connect';

function App() {
  
  useEffect(()=> {
    document.title = `황준희 포트폴리오`;
  });
 
  return (
    <div className="App">
        <div className="wrap">
          <Header />
          <main id="main" className="main">
            <Intro />
            <section className="section02"></section>
            <Connect />
          </main>
        </div>
    </div> 
  );
}

export default App;