import React, { useState, useEffect } from 'react';

function MainVisual() {
    const [y, setY] = useState(0);
    const [s, setS] = useState(1);
    const [op, setOp] = useState(1);
    const [ticking, setTicking] = useState(false);

    function move(scroll_pos) {
        if (scroll_pos < 800) {
            setY(scroll_pos);
            if (scroll_pos <= 100) {
            setS(1);
            setOp(1);
            } else {
            setS(0.3);
            setOp(0);
            }
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', function(e) {
            let pos = window.scrollY;
            if (!ticking) {
              window.requestAnimationFrame(function() {
                move(pos);
                setTicking(false);
              });
              setTicking(true);
            }
          });
    })

    return (
        <section className="intro"> 
            <div className="main_visual" style={{transform : `translateY(${y}px) scale(${s})`, transition: `1s ease-in-out`}}>
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