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
        [enter, setEnter] = useState(false),
        [sWrapW, setWW] = useState(0)
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
                setWW(node.getBoundingClientRect().width);
            }},[])
            ;
 

    let 
        mouseUp = false,
        mouseX = 0,
        mouseSX = 0,
        inum = 0,
        wrapMove = 0,
        ss = false,
        mouseEnter = true
        ;
     
    

    function slideOn(x) {
        if(slideIdx == x) {
            return "on"
            } else {
            return ''
            }
        }
    
    function slideEvent() {
        mouseUp = false;
        mouseEnter = true;
    }
    function slideDown(e) {
        mouseUp = true;
        mouseEnter = false;
        mouseSX = e.clientX;
    }
    function slideMoving(e) {
        if(!mouseUp) return false
        mouseX = e.clientX - mouseSX ;
        wrapMove = slideMove - mouseX ;
        sWrap.style.transform = `translateX(${-wrapMove}px)`
    }

    function slideStop() {
        mouseUp = false;
        if(!mouseEnter) {
            inum = Math.round(wrapMove/slideW);
            moveing(inum, wrapMove);
        }
    }

    
    function moveing(num, x) {
        ss = true;
        mouseUp = false;
        let 
            i = slideW*num,
            start = i - x,
            startTime = null
            ;
        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
        };

        //animate
        function animate(timestamp) {
            
            if(!startTime) startTime = timestamp
            let progress = timestamp - startTime
            let moving = easeOut(progress, x, start, 2000)
            setSMove(moving);
            if (ss) {
                if (progress < 2000) {
                    requestAnimationFrame(animate);
                } else {
                    if(i <= -slideW) {
                        setSMove(sWrapW-slideW);
                        setSIdx(slide_item.length-1);
                    } else if(i >= sWrapW){
                        setSMove(0);
                        setSIdx(0);
                    } else {
                        setSMove(i);
                        setSIdx(num);
                    }
                }
            }
        }
        window.requestAnimationFrame(animate);
    }    

    return (
        <div className="main_slide" >

            <div 
                className="slide_wrap" 
                style={{transform : `translateX(${-slideMove}px)`}}
                ref={slideWrap}
                onMouseEnter={slideEvent}
                onMouseDown={e=>(
                    e.preventDefault,
                    slideDown(e)
                    )}
                onMouseMove={slideMoving}
                onMouseUp={slideStop}
                onMouseLeave={slideStop}
            >
                {slideMove <= 0 ? (
                <div ref={slideWidth} className={`slide_item item4 vir`}>{slide_item[4].title}</div>):(
                    null
                )}
                {slide_item.map((ele, idx)=>(
                    <div 
                        ref={slideWidth} 
                        className={`slide_item item${idx} ${slideOn(idx)}`} 
                        key={idx}
                        onMouseDown={e=>e.preventDefault}
                    >
                        {ele.title}
                    </div>
                ))}
                {slideMove >= sWrapW-slideW ? (
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
                            setSMove(slideW*idx+1),
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