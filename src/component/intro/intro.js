import React, { useState, useEffect } from 'react';
import './css/intro.css';
import MainVisual from './mainVisual';
import useHeight from '../hooks/useHeight';
import useScroll from '../hooks/useScroll';
// import useFadeAnimate from '../hooks/useFadeAnimate';



// 타이포 텍스트
const visualTypo = [
    "안녕하세요",
    "프론트엔드 개발자",
    "황준희입니다"
]
//


//on class 함수
function classOn(s,x){
    if( s === x) {
        return "on"
    } else {
        return 'off'
    }
}
//

//타이포 컴포넌트
function Visual({typo, idx, on, height}) {
    const typoEle = useHeight();
    height(typoEle.height);
    
    
    return (
        <article className={`typo typo${idx+1}`} ref={typoEle.value}>
            <h2 className={classOn(on,idx)}>
                {typo}
            </h2>
        </article>
    )
}
//


//


//intro 컴포넌트
function Intro({iPos, hOn}) {

    const 
        [valueOn, setOn] = useState(0)
        ;
    const
        [typo, setTypo] = useState(0),
        [mainH, setMainH] = useState(0)
        ;
    const
        introH = useHeight()
        ;
    
    const { scrollY } = useScroll();

    // App에 값 전달    
    
    useEffect(()=>{
            let height = mainH + typo*3
            iPos(height)
    },[mainH, typo])


    //intro섹션 parallex함수
    function move(scroll_pos) {
         
        let mainArea = mainH + typo*2 + typo/3;
        
            if (scroll_pos < typo ) {
                setOn(0)
            } else if(scroll_pos >= typo && scroll_pos <= typo*2) {
                setOn(1)
            } else if(scroll_pos >= typo*2 && scroll_pos <= typo*3) {
                setOn(2)
            } else if(scroll_pos >= typo*3 && scroll_pos < mainArea ) {
                setOn(3)
            } else if (scroll_pos >= mainArea){
                setOn(4)
            } else {
                setOn(-1)
            }
    }
   
    useEffect(()=>{
        move(scrollY);
        hOn(valueOn);
    },[valueOn, scrollY])

    return (
        <section 
            className="intro" 
            ref={introH.value} 
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
                typoH={typo}
                intro={introH.height}
            />
        </section>
    )
}
//

export default Intro;