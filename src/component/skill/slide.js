import React, { useState, useCallback, useEffect } from 'react';
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

const SlideItem = ({cName , width, con})=>{
    return(
        <div className={cName} ref={width} onMouseDown={e=>e.preventDefault}>{con}</div>
    )
}

function Slide() {
    const 
        [slideMove, setSMove] = useState(0),
        [slideW, setSW] = useState(0),
        [slideIdx, setSIdx] = useState(0),
        [slideStart, setSStart] = useState(false),
        [sWrap, setWrap] = useState(0),
        [sWrapW, setWW] = useState(0),
        [slideNext, setNext] = useState(true)
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
        mouseEnter = true
        ;
    

    function slideOn(x) {
        if(slideIdx === x) {
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
            if(wrapMove === 0) return false
            inum = Math.round(wrapMove/slideW);
            moving(inum, wrapMove, 1000);
        }
        
    }

    function slideStartOn() {
        if(slideNext === false) {
            setSStart(false)
        } else {
            setSStart(true)
        }
    }

    
    function moving(num, x, second) {
        mouseUp = false;
        let 
            i = slideW*num,
            start = i - x,
            startTime = null
            ;

        if(i <= -slideW) {
            setSIdx(slide_item.length-1);
        } else if(i >= sWrapW){
            setSIdx(0);
        } else {
            setSIdx(num);
        }

        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -8 * t/d ) + 1 ) + b;
        };

        //animate
        function animate(timestamp) {
            
            if(!startTime) startTime = timestamp
            let progress = timestamp - startTime
            let move = easeOut(progress, x, start, second)
            setSMove(move)
           
   
            if (progress < second) {
                requestAnimationFrame(animate);
            } else {
                if(i <= -slideW) {
                    setSMove(sWrapW-slideW);
                } else if(i >= sWrapW){
                    setSMove(0);
                } else {
                    setSMove(i);
                }
            }
        }
        window.requestAnimationFrame(animate);
    }   

    useEffect(
        () => {
            const start = setTimeout(()=>{setSStart(true)},0)
            return ()=> clearTimeout(start);
        },
        [slideStart]
    )
    
    useEffect(
        () => {
            if (!slideStart) {
                return;
            } 
            const id = setInterval(()=>{moving(slideIdx+1,slideMove, 1000)}, 2000)
            return () => clearInterval(id);
        },
        [slideStart, slideMove, slideIdx, slideW]
    );


    return (
        
        <div className="main_slide" >

            <div className="slide_view">
                <div 
                    className="slide_wrap" 
                    style={{transform : `translateX(${-slideMove}px)`}}
                    ref={slideWrap}
                    onClick={slideEvent}
                    onMouseEnter={slideEvent}
                    onMouseDown={e=>((
                        e.preventDefault,
                        slideDown(e)
                    ))}
                    onMouseMove={slideMoving}
                    onMouseUp={slideStop}
                    onMouseLeave={slideStop}
                >
                    {slideMove <= 0 ? (
                    <div ref={slideWidth} className={`slide_item item4 last`}>{slide_item[slide_item.length-1].title}</div>):(
                        null
                    )}
                    {slide_item.map((ele, idx)=>(
                        <SlideItem 
                            width={slideWidth}
                            key={idx}
                            cName={`slide_item item${idx} ${slideOn(idx)}`}
                            con={ele.title}
                        />
                    ))}
                    {slideMove >= sWrapW-slideW ? (
                    <div ref={slideWidth} className={`slide_item item0 first`}>{slide_item[0].title}</div>):(
                        null
                    )}
                </div>
            </div>

            <div className="slide_dots">
                
                {slide_item.map((ele, idx)=>(
                    <div className={`slide_dot slide_dot${idx} ${(slideOn(idx))}`} key={idx}>
                        <a 
                            href="#btn" 
                            onClick={(e)=>((
                            e.preventDefault,
                            setSMove(slideW*idx+1),
                            setSIdx(idx),
                            moving(idx, slideMove, 1000)
                            ))}
                        >
                            {ele.content}
                        </a>
                    </div>
                ))}
            </div>

            <button 
                onClick={()=>(moving(slideIdx-1,slideMove, 1000))}
                className="btn_prev slide_arrows" 
                type="button">
                    prev
            </button>
            <button 
                onClick={()=>(moving(slideIdx+1,slideMove, 1000))}
                className="btn_next slide_arrows" 
                type="button">
                    next
            </button>

            <div className="auto_play">
                <button className="btn_play" onClick={()=>((setSStart(!slideStart),setNext(!slideNext)))}>재생/일시정지{`${slideStart} ${slideNext}`}</button>
            </div>

        </div>
    )
}

export default Slide;