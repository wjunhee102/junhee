import React, { useState, useEffect, useRef } from 'react';
import useNode from '../hooks/useNode';
import useHeight from '../hooks/useHeight';
import './css/mainVisual.css'

// 비디오 컴포넌트
function MainVideo({num, on}) {
    return(
        <img style={{opacity : on , transition: `0.3s ease-in-out`}} src={`./video/keyframe/jun${num}.jpg`} />
    )
}
//


//skillkind 내용
const skillKind = [
    {
        name : 'html5',
        img : 'html5i.png'
    },
    {
        name : 'css3',
        img : 'css3i.png'
    },
    {
        name : 'jQuery',
        img : 'jq.png'
    },
    {
        name : 'javascript',
        img : 'js.png'
    },
    {
        name : 'react',
        img : 'react.png'
    },
    {
        name : 'photoshop',
        img : 'photoshop.png'
    },
    {
        name : 'illustrater',
        img : 'illu.png'
    }
]

function Skills({classname}) {
    return (
        <li className={`icon ${classname}`}><span>{classname}</span></li>
    )
}

// profile 컴포넌트
function Profile() {
    return (
        <div className="profile">
            <div className="inner">
                <ul className={`iconBox`} >
                    {skillKind.map((ele , idx)=>(
                        <Skills 
                            classname={ele.name}
                            key={idx}
                        />
                    ))}
                </ul>
            </div>
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
    const [proOn , setPOn] = useState("off");
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
            keyframe = Math.round((scroll_y - (typo + contentNode.width))/40)
            lateX = scroll_y - typo
            if(scroll_y <= typo + contentNode.width) {
                coverEle.current.style.transform = `translate(${-lateX}px, 0)`;
                setOp(1)
                setMainI(1);
                setF(1)
            } else {
                coverEle.current.style.transform = `translate(${-contentNode.width}px,0)`;
                setOp(0);
                setPOn("off");
                if (scroll_y > typo + contentNode.width) {
                    if (keyframe >= 65) {
                        setF(65);
                        setMainI(2);
                        setOp(1);
                        setPOn("off");
                        if(keyframe >= 100) {
                            setPOn("on");
                        }
                    } else if(keyframe <= 1) {
                        setF(1);
                        setMainI(1);
                    } else {
                        setPOn("off");
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
    function prooff() {
        if(frame === 65) {
            return 0;
        } else {
            return 1;
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',coverEvent);
        return ()=> window.removeEventListener('scroll', coverEvent);
    },[typoH, contentNode.width, visualOn, frame, intro, mainI, proOn])


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
                            <div className={`imgBox ${proOn}`} style={{opacity : op}}>
                                <img src={`./video/junheeMain${mainI}.jpg`} />
                            </div>
                            <MainVideo num={frame} on={prooff()} />
                        </div>
                        <Profile />
                    </div>
                </div>
            </div>`
        </article>
    )
}


export default MainVisual;