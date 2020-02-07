import React, { useState, useEffect } from 'react';
import Header from './elements/header';
import Intro from './elements/intro';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  function loading() {
    setIsLoading(false);
  }
  useEffect(()=> {
    document.title = `황준희`;
    setTimeout(loading,5000);
  });
 
  return (
    <div className="App">
      {isLoading ? (
        <span>Loading....</span>
      ) : (
        <div className="wrap">
          <Header />
          <main id="main" className="main">
            <Intro />
            <section className="section02"></section>
          </main>
        </div>
      ) }
    </div> 
  );
}

export default App;