import React, { useState, useEffect, useCallback } from 'react';
import useHeight from './hooks/useHeight';
import useNode from './hooks/useNode';


//타이포 텍스트
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

function mainOn(s,x){
    if( s === x) {
        return "on"
    } else if (s > x){
        return 'end'
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

//메인 비주얼 컴포넌트
function MainVisual({on ,height, typoH}) {
    const [visualOn, setVOn] = useState("off");
    const 
        main_visual = useHeight(),
        contentNode = useNode(),
        coverEle = useNode()
        ;
      
    height(main_visual.height);

    function coverEvent() {
        let 
            startContent = typoH*3,
            scroll_y = window.pageYOffset,
            typo = typoH*4 + typoH/3,
            lateX = scroll_y - typo,
            opac = (scroll_y-startContent)/500
            ;

        if(startContent <= scroll_y) {
            if(scroll_y <= startContent+500) {
                contentNode.ele.style.opacity = opac;
                setVOn('off')
            } else {
                contentNode.ele.style.opacity = 1;
                setVOn('on')
            }
        } else {
            contentNode.ele.style.opacity = 0;
            setVOn('off')
        }

        if( typo <= scroll_y ){
            if(scroll_y <= typo + contentNode.width) {
                coverEle.ele.style.transform = `translate(${-lateX}px, 0)`;
    
            } else {
                coverEle.ele.style.transform = `translate(${-contentNode.width}px,0)`;
            } 

        } else {
            coverEle.ele.style.transform = `translate(0, ${0}px)`;
        }
        
    }


    useEffect(()=>{
        window.addEventListener('scroll',coverEvent);
        return ()=> window.removeEventListener('scroll', coverEvent);
    },[typoH, contentNode.width, visualOn])


    return (
        <article className={`mainVisual`} ref={main_visual.value}>
            <div className={`contents ${mainOn(on,3)}`} ref={contentNode.nodeGet}>
                <div className="img_box">
                    <div className="img">
                        <span>황준희</span>
                    </div>
                </div>
                <div className={`text_box ${visualOn}`}>
                    <h3>황준희</h3>
                    <p>프론트 엔드 개발자</p>
                </div>
                <div 
                className="cover"
                ref={coverEle.nodeGet}
                ></div>
            </div>
        </article>
    )
}
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
        
        
        iPos(introH.height);
    
    // scroll 변수   
    let 
        lastScroll = 0,
        ticking = false
        ;
    
    // intro섹션 parallex함수
    function move(scroll_pos) {
        let typoH = typo/2,
            mainArea = introH.height - (typo-typo/3)
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
            />
            
        </section>
    )
}
//

export default Intro;