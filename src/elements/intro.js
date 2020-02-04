import React, { useState, useEffect } from 'react';

function Section01({count, plus}) {
    return (
        <section className="intro">
            <div className="inner">{count}</div>
            <button onClick={()=> plus(count+1) }>{count} + 1  </button>
        </section>
    )
}

function MainVisual() {
    const [y, setY] = useState(0);
    const [s, setS] = useState(1);
    const [op, setOp] = useState(1);
    
    function move() {
        if (window.pageYOffset < 800) {
            setY(window.pageYOffset);
            if (window.pageYOffset <= 100) {
            setS(1);
            setOp(1);
            } else {
            setS(0.3);
            setOp(0);
            }
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",move);
    })

    return (
        <section className="intro">
            <div className="main_visual" style={{transform : `translateY(${y}px) scale(${s})`,transition : 'transform 0.4s'}}>
                <h2 className="tit" style={{opacity : op, transition: '0.5s'}}>JUN HEE</h2>
            </div>
        </section>
    )
}


function Intro() {
    return (
        <MainVisual />
    )
}


export default Intro;