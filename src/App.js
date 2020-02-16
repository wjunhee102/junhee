import React, { useState, useEffect } from 'react';
import Header from './component/header';
import Intro from './component/intro';
import Skill from './component/skill';
import Web from './component/web';
import Connect from './component/connect';

function App() {
    const 
        [valuePos, setPosi] = useState("fixed"),
        [valueY, setY] = useState(0),
        [valueS, setS] = useState(0),
        [valueOp, setOp] = useState(1)
        ;
    const 
        [headerPos, setHPos] = useState(0),
        [introPos, setIPos] = useState(0),
        [skillPos, setSPos] = useState(0),
        [webPos, setWPos] = useState(0)
        ;
    const secH = [
        0,
        introPos,
        introPos+skillPos-headerPos,
        introPos+skillPos+1000-headerPos,
        introPos+skillPos+1200-headerPos
        ]

    let 
        lastScroll = 0,
        ticking = false
        ;
    
    function move(scroll_pos) {
        if (scroll_pos < 800) {
            if (scroll_pos <= 150) {
                setOp(1);
            } else {
                setOp(0);
                
            }
        } 
    }
    function introMove(scrollY) {
        move(scrollY);
            if (scrollY < 800) {
                setS(scrollY);
                setPosi("fixed");
                setY(0);
            } else {
                setS(800);
                setY(800);
                setPosi("absolute");
            }
    }

    console.log(introPos,skillPos,webPos);
    window.addEventListener('scroll', (e)=> {
        lastScroll = window.pageYOffset;
        if(!ticking) {
            window.requestAnimationFrame(()=> {
                introMove(lastScroll);
                ticking = false;
        })}
        ticking = true;
    });

    function moveSection(x) {  
        let 
            scrollY = window.pageYOffset,
            i = secH[x],
            start = Math.abs(scrollY - i),
            time = start/100
            ;
    
        if(start <= 100) {
            time = 0.5 ;
        }
    
        console.log(time)
        function move() {
            if(scrollY < i-1) {
                scrollY = scrollY+time
            } else if(scrollY > i+1) {
                scrollY = scrollY-time
            } else {
                scrollY = i
            }
            window.scrollTo(0, scrollY);
            if (scrollY != i) {
                requestAnimationFrame(move);
            }
        }
        move();
    }

    useEffect(()=> {
        document.title = `황준희 포트폴리오`;
    });

    
 
    return (
        <div className="App">
            <div className="wrap">
                <Header 
                    setHPos={setHPos}
                    moveS={moveSection}
                />
                <main id="main" className="main">
                <Intro 
                    y={valueY}  
                    posi={valuePos}  
                    s={valueS}
                    op={valueOp}
                    iPos={setIPos}
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