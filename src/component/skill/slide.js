import React, { useState, useCallback, useRef, useEffect } from 'react';
import './slide.css';

const slide_item = [
    {
        title : "slide" ,
        content : 1,
        img : ""
    },
    {
        title : "slide" ,
        content : 2,
        img : ""
    },
    {
        title : "slide" ,
        content : 3,
        img : ""
    },
    {
        title : "slide" ,
        content : 4,
        img : ""
    },
    {
        title : "slide" ,
        content : 5,
        img : ""
    }
]



function Slide() {
    const 
        [slideMove, setSMove] = useState(0),
        [slideW, setSW] = useState(0),
        [slideIdx, setSIdx] = useState(0),
        [slideStart, setSStart] = useState(true),
        [sWrap, setWrap] = useState(0),
        [enter, setEnter] = useState(false);
        ;
    const
        slideWidth = useCallback(node => {
            if (node !== null) {
                setSW(node.getBoundingClientRect().width);
            }},[])
            ;
    const 
        slideWrap = useCallback(node => {
            if (node !== null) {
                setWrap(node);
            }},[])
            ;

    

    function slideOn(x) {
        if(slideIdx == x) {
            return "on"
            } else {
            return ''
            }
        }
    function slideMouseEvent() {
        let 
        mouseUp = false,
        mouseX = 0,
        mouseSX = 0,
        inum = 0,
        wrapMove = 0
        ;

        sWrap.addEventListener("mousedown", (e)=>{
            setSStart(false);
            mouseUp = true
            mouseSX = e.clientX;
            sWrap.addEventListener("mousemove",(e)=>{
                if(!mouseUp) return false
                    mouseX = e.clientX - mouseSX  ;
                    wrapMove = slideMove - mouseX
                    sWrap.style.transform = `translateX(${-wrapMove}px)`
                    
            })
        })
        sWrap.addEventListener("mouseup", ()=>{
            setSMove(wrapMove);
            setSStart(true);
            mouseUp = false;
            inum = Math.round(wrapMove/slideW);
            console.log(wrapMove);
            moveing(inum, wrapMove);
            mouseX = 0;
            mouseSX = 0;
            inum = 0;
            wrapMove = 0
        })
    }
    
    function moveing(num, x) {
        setSStart(true);
        let 
            i = slideW*num,
            start = i - x,
            startTime = null
            ;
        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -12 * t/d ) + 1 ) + b;
        };

        //animate
        function animate(timestamp) {
            
            if(!startTime) startTime = timestamp
            let progress = timestamp - startTime
            let moving = easeOut(progress, x, start, 2500)
            sWrap.style.transform = `translateX(${-moving}px)`
            if (slideStart) {
                if (progress < 2500) {
                    requestAnimationFrame(animate);
                } else {
                    setSMove(i);
                    sWrap.style.transform = `translateX(${-i}px)`
                }
            }
        }
        window.requestAnimationFrame(animate);
    }    
    // function init() {
    //     sWrap.addEventListener('mouseenter', slideMouseEvent)
    //     sWrap.addEventListener('mouseleave', ()=>{
    //         mouseUp = false;
    //     })
    // }

    return (
        <div className="main_slide" >

            <div 
                className="slide_wrap" 
                ref={slideWrap}
                onMouseEnter={slideMouseEvent}
            >
                {slideIdx === 0 ? (
                <div ref={slideWidth} className={`slide_item item4 vir`}>{slide_item[4].title}</div>):(
                    null
                )}
                {slide_item.map((ele, idx)=>(
                    <div ref={slideWidth} className={`slide_item item${idx} ${slideOn(idx)}`} key={idx}>{ele.title}</div>
                ))}
                {slideIdx === 4 ? (
                <div ref={slideWidth} className={`slide_item item0 vir2`}>{slide_item[0].title}</div>):(
                    null
                )}
            </div>

            <div className="slide_dots">
                
                {slide_item.map((ele, idx)=>(
                    <div className={`slide_dot slide_dot${idx} ${(slideOn(idx))}`} key={idx}>
                        <a 
                            href="#btn" 
                            onClick={(e)=>(
                            e.preventDefault,
                            setSStart(true),
                            setSMove(slideW*idx),
                            setSIdx(idx),
                            moveing(idx, slideMove)
                            )}
                        >
                            {ele.content}
                        </a>
                    </div>
                ))}
            </div>

            <button className="btn_prev slide_arrows">prev</button>
            <button className="btn_next slide_arrows">next</button>

            <div className="auto_play">
                <button className="btn_play">재생/일시정지</button>
            </div>

        </div>
    )
}

export default Slide;