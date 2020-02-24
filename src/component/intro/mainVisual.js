import React, { useState, useEffect, useRef } from 'react';
import useNode from '../hooks/useNode';
import useHeight from '../hooks/useHeight';

// 비디오 컴포넌트
function MainVideo({num}) {
    return(
        <img src={`./video/keyframe/jun${num}.jpg`} />
    )
}
//

// profile 컴포넌트
function Profile() {
    return (
        <div className="profile">
            <div className="inner"></div>
        </div>
    )
} 

//on class 함수
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

//메인 비주얼 컴포넌트
function MainVisual({on ,height, typoH, intro}) {
    const [visualOn, setVOn] = useState("off");
    const [op, setOp] = useState(1)
    const [frame , setF] = useState(1)
    const [mainI , setMainI] = useState(1);
    const 
        main_visual = useHeight(),
        contentNode = useNode(),
        coverEle = useRef()
        ;
    height(main_visual.height);

    function coverEvent() {
        if(window.pageYOffset > intro) return false
        let 
            startContent = typoH*3,
            scroll_y = window.pageYOffset,
            typo = typoH*4 + typoH/3,
            opac,
            lateX,
            keyframe
            ;
        
        if(startContent <= scroll_y) {
            opac = (scroll_y-startContent)/500
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

        if( typo <= scroll_y && scroll_y <= intro){
            keyframe = Math.round((scroll_y - (typo + contentNode.width))/100)
            lateX = scroll_y - typo
            if(scroll_y <= typo + contentNode.width) {
                coverEle.current.style.transform = `translate(${-lateX}px, 0)`;
                setOp(1)
                setMainI(1);
                setF(1)
            } else {
                coverEle.current.style.transform = `translate(${-contentNode.width}px,0)`;
                setOp(0);
                if (scroll_y > typo + contentNode.width) {
                    if (keyframe >= 65) {
                        setF(65);
                        setMainI(2);
                        setOp(1);
                    } else if(keyframe <= 1) {
                        setF(1);
                        setMainI(1);
                    } else {
                        if(keyframe > 40) {
                            setMainI(2);
                        }
                        setF(keyframe)
                        setOp(0)
                    }
                } 
            } 

        } else {
            if(typo > scroll_y ) {
                coverEle.current.style.transform = `translate(0, ${0}px)`;
                setF(1)
                setMainI(1)
            } else {
                setMainI(2)
            }
        }
        
    }


    useEffect(()=>{
        window.addEventListener('scroll',coverEvent);
        return ()=> window.removeEventListener('scroll', coverEvent);
    },[typoH, contentNode.width, visualOn, frame, intro, mainI])


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
                <div className="cover" ref={coverEle}>
                    <div className="inner">
                        <div className="video_box">
                            <div className="imgBox" style={{opacity : op}}>
                                <img src={`./video/junheeMain${mainI}.jpg`} />
                            </div>
                            <MainVideo num={frame} />
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>`
        </article>
    )
}


export default MainVisual;