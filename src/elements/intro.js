import React, { useState } from 'react';

function MainVisual({valueY, valueS, valueOp, valuePos}) {
    return (
        <section className="intro"> 
            <div className="main_visual" style={{position: `${valuePos}`, transform: `translateY(${valueY}px)` , perspective :`400px`}}>
                <div className="visual" style={{transform: `translate3d(-50%, -50%, ${-(valueS)}px)`}}>
                    <h2 className="tit" style={{opacity : valueOp, transition: `0.5s`}}>HELLO, WORLD</h2>
                </div>
            </div>
        </section>
    )
}


function Intro() {
    const [posi, setPosi] = useState("fixed");
    const [y, setY] = useState(0);
    const [s, setS] = useState(0);
    const [op, setOp] = useState(1); 

    function move(scroll_pos) {
        if (scroll_pos < 800) {
            if (scroll_pos <= 150) {
                setOp(1);
            } else {
                setOp(0);
            }
        } 
    }
    window.addEventListener('scroll', ()=> {
        let scrollY = window.pageYOffset;
            setTimeout(()=> {
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
            },0)
        });

    return (
        <MainVisual valueY={y} valueS={s} valueOp={op} valuePos={posi}/>
    )
}


export default Intro;