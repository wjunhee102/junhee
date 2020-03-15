import React, { useState, useEffect, useRef } from 'react';
import useNode from '../hooks/useNode';
import useScroll from '../hooks/useScroll';
import useInnerSize from '../hooks/useInnerSize';
import './css/mainVisual.css'




const about = [
    {
        type : "name",
        content : "황준희"
    },
    {
        type : "year",
        content : "1993년 1월 생"
    },
    {
        type : "education",
        content : "신한대학교 경영학과 졸업"
    },
    {
        type : "Awards1",
        content : "신한대 2018 하반기 창업 경진 대회 장려상"
    },
    {
        type : "Awards2",
        content : "계명대학교 제5회 전국 대학생토론대회 입선"
    }
]
function AboutMe({classname, content}) {
    return (
        <li className={`about ${classname}`}><span>{content}</span></li>
    )
}

function ProfileText({on}) {
    const titEvent = (x, y) => {
        if(x === y) return "on"
        if(x === 3)  {
            return "end";
        }
        return "off";
    }

    return (
        <div className="text-box">
            <h2 className={`tit ${titEvent(on, 1)}`}>
                 <br />
                &nbsp;&nbsp;<span></span>
            </h2>
            <ul className={`about ${titEvent(on, 2)}`}>
                { about.map((ele, idx)=>(
                    <AboutMe 
                        classname={ele.type}
                        content={ele.content}
                        key={idx}
                    />
                ))}
            </ul>
        </div>
    )
}



// profile 컴포넌트
function Profile({text}) {

    return (
        <div className="profile">
            <ProfileText on={text}/>
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


//메인 비주얼 컴포넌트
function MainVisual({on ,height, typoH, intro}) {
    const 
        [visualOn, setVOn] = useState("off"),
        // [op, setOp] = useState(1),
        [frame , setF] = useState(1),
        [mainI , setMainI] = useState(1),
        [coverOn, setCOn] = useState(0)
        ;
    ;
    const { innerWidth } = useInnerSize();
    const { scrollY } = useScroll();
    const 
        main_visual = useNode(),
        contentNode = useRef(),
        coverEle = useRef(),
        mainImage = useRef(),
        contentBox = useRef()
        // keyframeImg = useRef()
        ;
    const keyframe = useNode();

    

    
    useEffect(()=>{
        let width = innerWidth
        if(width > 1024) {
            mainImage.current.style.width =  `1024px`
            width = 1024
        } else {
            mainImage.current.style.width =  `${width}px`
        }
        let height = Math.round(width*0.9)
        mainImage.current.style.height = `${height}px`
    },[innerWidth])
    

    useEffect(()=> {
        if(contentNode.current) {
            const { current } = contentNode;
            let width = 2000 + main_visual.width;
            current.style.marginBottom = `${typoH - typoH/3}px`;
            current.style.height = `${width}px`;
            
        }   
    },[typoH, main_visual.width])

    useEffect(()=>{

        let mainH = typoH - typoH/3;
        let startContent = typoH*3;
        let scroll_y = scrollY;
        let CoverStart = startContent + 2000;
        let contentWidth = contentBox.current.getBoundingClientRect().width;
        let innerH = contentWidth;
        let opac,
            lateX,
            keyframe
            ;
            
        if(startContent <= scroll_y) {
            opac = (scroll_y-startContent)/1000
            if(scroll_y <= startContent+1000) {
                contentBox.current.style.opacity = opac;
                setVOn('off')
            } else {
                contentBox.current.style.opacity = 1;
                setVOn('on')
            }
        } else {
            contentBox.current.style.opacity = 0;
            setVOn('off')
        }

        if( CoverStart <= scroll_y && scroll_y <= CoverStart + innerH + mainH){
            keyframe = Math.round((scroll_y - CoverStart)/(innerH /65))
            lateX = scroll_y - CoverStart
            
            if(scroll_y <= CoverStart + innerH ) {
                
                coverEle.current.style.transform = `translate(${-lateX}px, 0)`;
                setMainI(2);
                setF(keyframe);
                setCOn(1);
            } else {
                coverEle.current.style.transform = `translate(${-innerH}px,0)`;
                setMainI(2);
                setF(65);
                setCOn(2);
            } 

        } else {
            if(scroll_y < CoverStart ) {
                coverEle.current.style.transform = `translate(0, ${0}px)`;
                setF(0)
                setMainI(0)
                setCOn(1);
            } else if (scroll_y > CoverStart + innerH + mainH) {
                setCOn(2);
            } 
        }
    },[scrollY, intro, typoH, main_visual.width, main_visual.height])

    useEffect(()=>{
        height(main_visual.height);
    },[main_visual.height])
    return (
        <article className={`mainVisual ${visualOn}`} ref={main_visual.nodeGet}>
            <div className="container"  ref={contentNode}>
            <div className={`contents ${mainOn(coverOn,1)}`} ref={contentBox}>
                <div className="img_box">
                    <div className="img" ref={mainImage}>
                        <span>황준희</span>
                    </div>
                </div>
                <div className={`text_box ${visualOn}`}>
                    <h3>황준희</h3>
                    <p>프론트 엔드 개발자</p>
                </div>
                <div className="cover" ref={coverEle}>
                    <div className="inner">
                        <h2 className="greeting"><span>만나서</span>반가워요!</h2>
                        <div className={`video_box`}>
                            <div className={`imgBox`} style={{opacity: 0}}>
                                <img src={`./video/junheeMain${mainI}.jpg`} ref={keyframe.nodeGet} alt="junhee"/>
                            </div>
                            <img className={`keyframe ${mainOn(coverOn,1)}`}  src={`./video/keyframe/jun${frame}.jpg`} alt="junhee" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Profile text={coverOn}/>
        </article>
    )
}


export default MainVisual;