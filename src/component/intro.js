import React, { useState, useEffect } from 'react';
import useHeight from './hooks/useHeight';

function MainVisual({valueY, valueS, valueOp, valuePos}) {

    return (
            <div className="main_visual" style={{position: `${valuePos}`, transform: `translateY(${valueY}px)` , perspective :`400px`}}>
                <div className="visual" style={{transform: `translate3d(-50%, -50%, ${-(valueS)}px)`}}>
                    <h2 className="tit" style={{opacity : valueOp, transition: `0.5s`}}>HELLO, WORLD</h2>
                </div>
            </div>
    )
}

const visualTypo = [
    "안녕하세요",
    "신입 퍼블리셔",
    "황준희입니다."
]

function classOn(s,x){
    if( s === x) {
        return "on"
    } else {
        return 'off'
    }
}

function background(s){
    if( s === 3) {
        return "#fff"
    } else {
        return '#000'
    }
}

function Visual({typo, idx, on, height}) {
    const typoEle = useHeight();
    height(typoEle.height)
    
    return (
        <article className={`typo typo${idx+1}`} ref={typoEle.value}>
            <h2 className={classOn(on,idx)}>
                {typo}
            </h2>
        </article>
    )
}

function Visual2({on}) {
    

    return (
        <article className={`main_visual2`} >
            <div className={`contents ${classOn(on,3)}`}>
                <div className="img_box">
                    <div className="img">
                        <span>황준희</span>
                    </div>
                </div>
                <div className="text_box">
                    <h3>황준희</h3>
                    <p>신입 웹 퍼블리셔</p>
                </div>
            </div>
        </article>
    )
}


function Intro({iPos, hOn}) {
    const 
        [valuePos, setPosi] = useState("fixed"),
        [valueY, setY] = useState(0),
        [valueS, setS] = useState(0),
        [valueOp, setOp] = useState(1),
        [valueOn, setOn] = useState(0)
        ;
    const
        [typo, setTypo] = useState(0);

    
    
    // scroll 변수   
    let 
        lastScroll = 0,
        ticking = false
        ;
    
    // intro섹션 parallex함수
    function move(scroll_pos) {
        if (scroll_pos < typo-typo/2 ) {
            setOn(0)
        } else if(scroll_pos >= typo && scroll_pos < (typo*2-typo/2)) {
            setOn(1)
        } else if(scroll_pos >= typo*2 && scroll_pos < (typo*3-typo/2)) {
            setOn(2)
        } else if(scroll_pos >= typo*3) {
            setOn(3)
        } else {
            setOn(-1)
        }
    }
   
    function introScroll() {
        lastScroll = window.pageYOffset 
        if(!ticking) {
            window.requestAnimationFrame(()=> {
                move(lastScroll);
                hOn(valueOn);
            })
            ticking = true ;
        }
            ticking = false ;
        }
        
    
    const
        introH = useHeight();
        iPos(introH.height);


    useEffect(()=>{
        window.addEventListener('scroll',introScroll)
        return ()=> window.removeEventListener('scroll',introScroll)
    },[valueOn, typo])


    return (
        <section 
            className="intro" 
            ref={introH.value} 
            style={{background: `${background(valueOn)}`, transition: `0.5s ease-in-out`}}
            >
            {visualTypo.map((ele, idx)=>(
                <Visual 
                idx={idx}
                typo={ele}
                key={idx}
                on={valueOn}
                height={setTypo}
                />
            ))}
            <Visual2  on={valueOn} />
            
        </section>
    )
}


export default Intro;