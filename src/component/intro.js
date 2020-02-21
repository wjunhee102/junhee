import React, { useState, useEffect } from 'react';
import useHeight from './hooks/useHeight';

// function MainVisual({valueY, valueS, valueOp, valuePos}) {

//     return (
//             <div className="main_visual" style={{position: `${valuePos}`, transform: `translateY(${valueY}px)` , perspective :`400px`}}>
//                 <div className="visual" style={{transform: `translate3d(-50%, -50%, ${-(valueS)}px)`}}>
//                     <h2 className="tit" style={{opacity : valueOp, transition: `0.5s`}}>HELLO, WORLD</h2>
//                 </div>
//             </div>
//     )
// }

const visualTypo = [
    "안녕하세요",
    "신입 프론트 엔드 개발자",
    "황준희입니다."
]

function classOn(s,x){
    if( s === x) {
        return "on"
    } else {
        return 'off'
    }
}

function mainOn(s,x){
    if( s === x) {
        return "on"
    } else if (s > x){
        return 'end'
    } else {
        return 'off'
    }
}

function background(s){
    if( s >= 3) {
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

function MainVisual({on, height}) {
    
    const main_visual = useHeight();

    height(main_visual.height)

    return (
        <article className={`mainVisual`} ref={main_visual.value}>
            <div className={`contents ${mainOn(on,3)}`}>
                <div className="img_box">
                    <div className="img">
                        <span>황준희</span>
                    </div>
                    <div className="cover"></div>
                </div>
                <div className="text_box">
                    <h3>황준희</h3>
                    <p>프론트 엔드 개발자</p>
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
        [typo, setTypo] = useState(0),
        [mainH, setMainH] = useState(0)
        ;

    
    
    // scroll 변수   
    let 
        lastScroll = 0,
        ticking = false
        ;
    
    // intro섹션 parallex함수
    function move(scroll_pos) {
        let typoH = typo/2,
            mainArea = introH.height-(typo-typo/3)
            ;
        if(scroll_pos <= introH.height) {
            if (scroll_pos < typo-typoH ) {
                setOn(0)
            } else if(scroll_pos >= typo && scroll_pos <= (typo*2-typoH)) {
                setOn(1)
            } else if(scroll_pos >= typo*2 && scroll_pos <= (typo*3-typoH)) {
                setOn(2)
            } else if(scroll_pos >= typo*3 && scroll_pos <= mainArea ) {
                setOn(3)
    
            } else {
                if (scroll_pos > mainArea) {
                    setOn(4)
                } else {
                    setOn(-1)
                }
            }
        } 
    }

    function moveRe(scroll_pos) {
        let typoH = typo/2,
            mainArea = introH.height-(typo-typo/3)
            ;
            if (scroll_pos < typo-typoH ) {
                setOn(0)
            } else if(scroll_pos >= typo && scroll_pos <= (typo*2-typoH)) {
                setOn(1)
            } else if(scroll_pos >= typo*2 && scroll_pos <= (typo*3-typoH)) {
                setOn(2)
            } else if(scroll_pos >= typo*3 && scroll_pos <= mainArea ) {
                setOn(3)
    
            } else {
                if (scroll_pos > mainArea) {
                    setOn(4)
                } else {
                    setOn(-1)
                }
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
        moveRe(window.pageYOffset);
        window.addEventListener('scroll',introScroll)
        return ()=> window.removeEventListener('scroll',introScroll)
    },[valueOn, typo, mainH])


    return (
        <section 
            className="intro" 
            ref={introH.value} 
            style={{background: `${background(valueOn)}`, transition: `0.3s ease-in-out`}}
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
            <MainVisual  
                on={valueOn} 
                height={setMainH}
            />
            
        </section>
    )
}


export default Intro;