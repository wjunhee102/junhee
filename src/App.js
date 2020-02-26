import React, { useState, useEffect } from 'react';
import Header from './component/header/header';
import Intro from './component/intro/intro';
import Skill from './component/skill/skill';
import Web from './component/web/web';
import Connect from './component/connect/connect';

function App() {
    const 
        [headerPos, setHPos] = useState(0),
        [introPos, setIPos] = useState(0),
        [typoPos, setTPos] = useState(0),
        [skillPos, setSPos] = useState(0),
        [webPos, setWPos] = useState(0),
        [headerOn, setHOn] = useState(0),
        [bodyRatio, setRatio] = useState("vertical")
        ;
        
    const secH = [
        0,
        introPos-(typoPos+headerPos),
        introPos+skillPos-headerPos,
        introPos+skillPos+1000-headerPos,
        introPos+skillPos+1200-headerPos
        ]

    let moveStart = false;

	
	// moveSection 정지 
    window.addEventListener('wheel', ()=>{
        moveStart = false;
    })
    window.addEventListener('touched', ()=>{
        moveStart = false;
    })

    // 섹션간 이동 함수
    function moveSection(x) {  
        let 
            scrollY = window.pageYOffset,
            i = secH[x],
            start = i - scrollY,
            startTime = null
            ;
		// moveSection 재생
			moveStart = true


        //가속도 
        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -12 * t/d ) + 1 ) + b;
        };

        //animate
        function animate(timestamp) {
            
            if(!startTime) startTime = timestamp
            let progress = timestamp - startTime
            let moving = easeOut(progress, scrollY, start, 2500)

            window.scrollTo(0, moving);
            if (moveStart) {
                if (progress < 2500) {
                    requestAnimationFrame(animate);
                } else {
                    window.scrollTo(0, i);
                }
            }
            
        }
        window.requestAnimationFrame(animate);
    }


    // 가로 세로 비율 맞추기
    function ratio() {
        let 
            windowW = window.innerWidth,
            windowH = window.innerHeight
            ;
        if(windowW > windowH) {
            setRatio("horizontal")
        } else {
            setRatio("vertical")
        }
    }

    
    
    useEffect(()=>{
        ratio();
        window.addEventListener("resize", ratio);
    }, [bodyRatio]);


    useEffect(()=> {
        document.title = `황준희 포트폴리오`;
    });

 
    return (
        <div className={`App ${bodyRatio}`}>
            <div className="wrap">
                <Header 
                    setHPos={setHPos}
                    moveS={moveSection}
                    hOn={headerOn}
                />
                <main id="main" className="main">
                <Intro 
                    iPos={setIPos}
                    hOn={setHOn}
                    tPos={setTPos}
                />
                <Skill
                    sPos={setSPos}
                />
                <Web 
                    wPos={setWPos}
                />
                <Connect />
                </main>
            </div>
        </div> 
    );
}

export default App;