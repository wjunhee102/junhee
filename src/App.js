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
        introPos-headerPos,
        introPos+skillPos-headerPos,
        introPos+skillPos+1000-headerPos,
        introPos+skillPos+1200-headerPos
        ]
        
    // scroll 변수   
    let 
        lastScroll = 0,
        ticking = false,
        moveStart = false
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
	
    
    window.addEventListener('scroll', (e)=> {
        lastScroll = window.pageYOffset;
        if(!ticking) {
            window.requestAnimationFrame(()=> {
                introMove(lastScroll);
				ticking = false;
		});
		}
		ticking = true;		
	});
	
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

            if (progress < 2500 && moveStart == true) {
                requestAnimationFrame(animate);
            }
        }
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