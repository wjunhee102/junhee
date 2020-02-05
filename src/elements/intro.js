import React, { useState } from 'react';
import { motion } from "framer-motion";

function MainVisual({valueY, valueS, valueOp, valuePos}) {
    return (
        <section className="intro"> 
            <div className="main_visual" style={{position: `${valuePos}`, transform: `translateY(${valueY}px)`}}>
                <div className="visual" style={{transform: `translate(-50%, -50%) scale(${valueS})`, transition: '0.5s' }}>
                    <h2 className="tit" style={{opacity : valueOp, transition: `0.5s`}}>HELLO, WORLD</h2>
                </div>
            </div>
        </section>
    )
}


function Intro() {
    const [posi, setPosi] = useState("fixed");
    const [y, setY] = useState(0);
    const [s, setS] = useState(1);
    const [op, setOp] = useState(1);   
    const [ticking, setTicking] = useState(false); 

    function move(scroll_pos) {
        let pos = scroll_pos;
        let pos_S = Math.round((1000 - pos)/100)/10
        console.log(pos_S);
        if (pos < 800) {
            if (pos_S <= 0.4) {
                setS(0.4);
            } else {
                setS(pos_S);
            }
            if (pos <= 150) {
            setOp(1);
            } else {
                setOp(0);
            }
        } 
    }

    window.addEventListener('scroll', (e)=> {
        let scrollY = window.pageYOffset;
        // if (scrollY%10 == 0 && !ticking) {
        //   window.requestAnimationFrame(()=> {
        //     move(scrollY);
        //     setTicking(false);
        //   });
        //   setTicking(true);
        // }
        if (scrollY%2 == 0) {
            setTimeout(()=> {
                move(scrollY);
            },0)
        }
        if (scrollY < 800) {
            setPosi("fixed");
            setY(0);
        } else {
            setY(800);
            setPosi("absolute");
        }
      });
    return (
        <MainVisual valueY={y} valueS={s} valueOp={op} valuePos={posi}/>
    )
}


export default Intro;