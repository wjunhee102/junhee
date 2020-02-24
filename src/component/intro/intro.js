import React, { useState, useEffect } from 'react';
import './css/intro.css';
import MainVisual from './mainVisual';
import useHeight from '../hooks/useHeight';



// 타이포 텍스트
const visualTypo = [
    "안녕하세요",
    "신입 프론트 엔드 개발자",
    "황준희입니다."
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
    height(typoEle.height)
    
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
        
    // App에 값 전달    
    iPos(introH.height);
    
    // scroll 변수   
    let 
        ticking = false
        ;
    
    // intro섹션 parallex함수
    function move(scroll_pos) {
         
        let typoH = typo/2,
            mainArea = mainH + typo*2 + typo/3
            ;
            if (scroll_pos < typo-typoH ) {
                setOn(0)
            } else if(scroll_pos >= typo && scroll_pos <= (typo*2-typoH)) {
                setOn(1)
            } else if(scroll_pos >= typo*2 && scroll_pos <= (typo*3-typoH)) {
                setOn(2)
            } else if(scroll_pos >= typo*3 && scroll_pos < mainArea ) {
                setOn(3)
            } else if (scroll_pos >= mainArea){
                setOn(4)
            } else {
                setOn(-1)
            }
    }
   
    // 스크롤 이벤트 실행 함수
    function introScroll() {
        if(!ticking) {
            window.requestAnimationFrame(()=> {
                move(window.pageYOffset);
                hOn(valueOn);
            })
            ticking = true ;
        }
            ticking = false ;
    }


    useEffect(()=>{
        move(window.pageYOffset);
        console.log(valueOn);
        window.addEventListener('scroll',introScroll)
        return ()=> window.removeEventListener('scroll',introScroll)
    },[valueOn, typo, mainH])

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