<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"

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
    return (
        <section className="intro"> 
            <motion.div className="main_visual" animate={{y : y , scale : s}} transition={{duration : 1}}>
                <h2 className="tit" style={{opacity : op, transition: '0.5s'}}>JUN HEE</h2>
            </motion.div>
=======
import React, { useState } from 'react';

function MainVisual({valueY, valueS, valueOp, valuePos}) {
    return (
        <section className="intro"> 
            <div className="main_visual" style={{position: `${valuePos}`, transform: `translateY(${valueY}px)` , perspective :`400px`}}>
                <div className="visual" style={{transform: `translate3d(-50%, -50%, ${-(valueS)}px)`}}>
                    <h2 className="tit" style={{opacity : valueOp, transition: `0.5s`}}>HELLO, WORLD</h2>
                </div>
            </div>
>>>>>>> face58087d75cbf611f77413958c1ea62a36bcfd
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
            setS(scroll_pos);
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
                    setPosi("fixed");
                    setY(0);
                } else {
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