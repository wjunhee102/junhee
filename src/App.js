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
        [introPos, setIPos] = useState(0),
        [skillPos, setSPos] = useState(0),
        [webPos, setWPos] = useState(0)
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
    console.log(introPos,skillPos,webPos);
    window.addEventListener('scroll', ()=> {
        let scrollY = window.pageYOffset;
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

        });

    useEffect(()=> {
        document.title = `황준희 포트폴리오`;
    });

    
 
    return (
        <div className="App">
            <div className="wrap">
                <Header 
                    introH={introPos}
                    skillH={skillPos}
                    webH={webPos} 
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