import React from 'react';
import Mask from './component/mask';
import KakaoMap from './kakao/kakaoMap';
import './css/app.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={{pathname : '/'}}>
        Home
      </Link>
      <Mask />
      <KakaoMap />
    </div>
  );
}

export default App;
