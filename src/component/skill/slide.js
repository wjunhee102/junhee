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
        [slideStart, setSStart] = useState(false),
        [slideStart1, setSStart1] = useState(false),
        [mousePoint, setMPoint] = useState(0)
        ;
    const 
        slideWrap = useRef(null);
    const
        slideWidth = useCallback(node => {
            if (node !== null) {
                setSW(node.getBoundingClientRect().width);
            }},[])
            ;
    let 
        mouseX = 0,
        mouseSX = 0,
        ss = false,
        s1 = false
        ;
    let mouseUp = false;

    function slideOn(x) {
        if(slideIdx == x) {
            return "on"
            } else {
            return ''
            }
        }
    
    function slideMouseEvent(e) {
        mouseUp = false;
        window.addEventListener("mousedown", (e)=>{
            mouseUp = true
            mouseSX = e.clientX;
            console.log(mouseSX)
            window.addEventListener("mousemove",(e)=>{
                if(!mouseUp) return false
                    
                    mouseX = mouseSX - e.clientX
                    console.log(mouseX)
                    setSMove(slideMove + mouseX);
            })
        })
        window.addEventListener("mouseup", (e)=>{
            mouseUp = false
            mouseSX = 0;
            console.log(mouseSX)
        })
        
    }
    // function slideMouseEvent() {
    //     setSStart1(true)
    // }
    // function slideMouseUp() {
    //     setSStart1(false)
    // }

    // function slideOnMouse(e){
    //     setSStart1(true)
    //     mouseSX = e.clientX
    //     setMPoint(mouseSX)
    //     console.log(mousePoint)
    //     ; 
    // }
    // function slideMoving(e) {
    //     if (!slideStart1) return false;
    //     mouseX = mousePoint - e.clientX
    //     console.log(mouseX)
    //     setSMove(slideMove + mouseX);
    // }

    function moveing(num) {
        setSStart(true);
        let 
            i = slideW*num,
            start = i - slideMove,
            startTime = null
            ;
        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -12 * t/d ) + 1 ) + b;
        };

        //animate
        function animate(timestamp) {
            
            if(!startTime) startTime = timestamp
            let progress = timestamp - startTime
            let moving = easeOut(progress, slideMove, start, 2500)

            setSMove(moving);
            if (slideStart) {
                if (progress < 2500) {
                    requestAnimationFrame(animate);
                } else {
                    setSMove(i);
                }
            }
        }
        window.requestAnimationFrame(animate);

        console.log(i)
    }    
        

    return (
        <div className="main_slide">

            <div 
                className="slide_wrap" 
                style={{transform : `translateX(${-slideMove}px)`}}  
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
                            setSMove(slideW*idx),
                            setSIdx(idx),
                            moveing(idx)
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