import React from 'react';
import Mask from './component/mask';
import KakaoMap from './kakao/kakaoMap';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <Mask />
      <KakaoMap />
    </div>
  );
}

export default App;
