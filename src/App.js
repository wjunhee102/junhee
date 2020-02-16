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
        ticking = false,
        pause = false
        ;
    
    // intro섹션 parallex함수
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

    // console.log(introPos,skillPos,webPos);
    
    window.addEventListener('scroll', (e)=> {
        
        lastScroll = window.pageYOffset;
        if(!ticking) {
            window.requestAnimationFrame(()=> {
                introMove(lastScroll);
                ticking = false;
        })}
        ticking = true;
    });
    window.addEventListener('wheel', ()=>{
        pause = false;
    })
    window.addEventListener('touched', ()=>{
        pause = false;
    })
    // 섹션간 이동 함수
    function moveSection(x) {  
        let 
            scrollY = window.pageYOffset,
            i = secH[x],
            // start = Math.abs(scrollY - i),
            start = i - scrollY,
            time = start/100
            ;
    
        // if(start <= 100) {
        //     time = 1 ;
        // }
    
        // console.log(time)
        //가속도 

        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -12 * t/d ) + 1 ) + b;
        };

        //animate
        let startTime = null;
        pause = true
        function animate(timestamp) {
            
            console.log(timestamp);
            if(!startTime) startTime = timestamp
            console.log(startTime)
            let progress = timestamp - startTime
            let moving = easeOut(progress, scrollY, start, 2500)

            window.scrollTo(0, moving);
            console.log(moving)

            if (progress < 3000 && pause == true) {
                requestAnimationFrame(animate);
            }
        }
        // function animate() {

        //     if(scrollY < i-1) {
        //         scrollY = scrollY+time
        //     } else if(scrollY > i+1) {
        //         scrollY = scrollY-time
        //     } else {
        //         scrollY = i
        //     }
        //     window.scrollTo(0, scrollY);
        //     if (scrollY != i) {
        //         requestAnimationFrame(animate);
        //     }
        // }
        window.requestAnimationFrame(animate);
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