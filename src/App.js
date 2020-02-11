import React, { useState, useEffect } from 'react';
import Header from './component/header';
import Intro from './component/intro';
import Skill from './component/skill';
import Web from './component/web';
import Connect from './component/connect';

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
            <Skill />
            <Web />
            <Connect />
          </main>
        </div>
    </div> 
  );
}

export default App;