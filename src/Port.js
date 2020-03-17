import React, { useState, useEffect, useRef } from 'react';
import Header from './component/header/header';
import Intro from './component/intro/intro';
import Skill from './component/skill/skill';
import Web from './component/web/web';
import Team from './component/team/team';
import Contact from './component/contact/contact';
import useInnerSize from './component/hooks/useInnerSize';


function Port() {
    const 
        [headerPos, setHPos] = useState(0),
        [introPos, setIPos] = useState(0),
        [skillPos, setSPos] = useState(0),
        [webPos, setWPos] = useState(0),
        [headerOn, setHOn] = useState(0),
        [bodyRatio, setRatio] = useState("vertical")
        ;
    const [secH, setSH] = useState([]);
    const { innerWidth, innerHeight} = useInnerSize();
        

    let moveStart = false;
	
	// moveSection 정지 
    const scrollSkip = ()=> {
        if(!moveStart) return false;
        moveStart = false;
    }
    window.addEventListener('wheel', scrollSkip)
    window.addEventListener('touchmove',scrollSkip ,{passive : false})
    

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
    useEffect(()=>{
        if(innerWidth > innerHeight) {
            setRatio("horizontal")
        } else {
            setRatio("vertical")
        }
    }, [innerWidth, innerHeight]);

    useEffect(()=> {
        document.title = `황준희 포트폴리오`;
    },[]);

    const AppHeight = useRef();

    useEffect(()=> {

        const contactMove = introPos + skillPos + webPos - headerOn;
        const scrollHeight = AppHeight.current.offsetHeight - innerHeight;
        let last;
        if(contactMove >= scrollHeight) {
            last = scrollHeight
        } else {
            last = contactMove
        }

        setSH([
            0,
            introPos-headerPos,
            introPos+skillPos-headerPos,
            last
        ])
    },[introPos, skillPos, headerPos, innerHeight])

    return (
        <div className={`App ${bodyRatio}`} ref={AppHeight} >
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
                />
                <Skill sPos={setSPos} iPos={secH[1]}/>
                <Web wPos={setWPos} />
                <Team />
                <Contact />
                </main>
            </div>
        </div> 
    );
}

export default Port;