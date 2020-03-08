import React, { useState, useEffect, useRef } from 'react';
import useNode from '../hooks/useNode';
import useHeight from '../hooks/useHeight';
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
                asdasdkl;sd<br />
                &nbsp;&nbsp;<span>항상 노력 합니다.</span>"
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

//skillkind 내용
const skillKind = [
    {
        name : 'html5',
        tit : "",
        content: "데스크탑, 모바일, 반응형에 맞춰 레이아웃 제작 가능합니다."
    },
    {
        name : 'css3',
        tit : "",
        content : "웹 디자인 시안대로 스타일을 적용할 수 있습니다."
    },
    {
        name : 'jQuery',
        tit : "",
        content : "플러그인을 사용하여 원하는 기능을 구현할 수 있습니다."
    },
    {
        name : 'javascript',
        tit : "",
        content : "플러그인과 라이브러리를 사용하지 않고, 원하는 기능을 구현 가능합니다."
    },
    {
        name : 'react',
        tit : "",
        content : "기본적인 웹 페이지 제작 가능합니다."
    },
    {
        name : 'photoshop',
        tit : "GTQ 1급 보유.",
        content: "이벤트 디자인, 합성/보정, 웹 디자인, 상품 페이지 디자인 제작 가능합니다."
    },
    {
        name : 'illustrator',
        tit : "",
        content : "타이포 디자인, 라벨 디자인, 웹 icon 디자인을 할 수 있습니다."
    },
    {
        name : 'scss',
        tit : "",
        content : "SCSS가 가지고 있는 기능들을 사용하여 기존 CSS3보다 효율적으로 작업할 수 있습니다."
    }
]

function Skills({classname}) {
    return (
        <li className={`icon ${classname}`}><span>{classname}</span></li>
    )
}

// profile 컴포넌트
function Profile({on, text}) {

    return (
        <div className="profile">
            <ProfileText on={text}/>
            <ul className={`iconBox ${on}`} >
                {skillKind.map((ele , idx)=>(
                    <Skills 
                        classname={ele.name}
                        key={idx}
                    />
                ))}
                <li className="tit">
                    <h3>
                        skill <br />
                        <span>활용 가능한 기술</span>
                    </h3>
                </li>   
                <li className="box">
                    
                </li>
            </ul>
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
    const 
        [visualOn, setVOn] = useState("off"),
        [op, setOp] = useState(1),
        [frame , setF] = useState(1),
        [mainI , setMainI] = useState(1),
        [proOn , setPOn] = useState("off"),
        [textChane , setTC] = useState(0)
    ;
    const 
        main_visual = useHeight(),
        contentNode = useNode(),
        coverEle = useRef(),
        mainImage = useRef(),
        contentBox = useRef(),
        keyframeImg = useRef()
        ;
    height(main_visual.height);


    // cover event
    function coverEvent() {
        // intro 이외에 이벤트 발생 막기
        if(window.pageYOffset > intro) return false


        let 
            startContent = typoH*3,
            scroll_y = window.pageYOffset,
            typo = typoH*4 + typoH/3,
            opac,
            lateX,
            keyframe
            ;

        let contentWidth = contentBox.current.getBoundingClientRect().width;
        
        if(startContent <= scroll_y) {
            opac = (scroll_y-startContent)/500
            if(scroll_y <= startContent+500) {
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

        if( typo <= scroll_y && scroll_y <= intro){
            keyframe = Math.round((scroll_y - (typo + contentWidth))/70)
            lateX = scroll_y - typo
            if(scroll_y <= typo + contentWidth) {
                coverEle.current.style.transform = `translate(${-lateX}px, 0)`;
                setOp(1);
                setMainI(1);
                setF(1);
                setTC(0);
            } else {
                coverEle.current.style.transform = `translate(${-contentWidth}px,0)`;
                setOp(0);
                setPOn("off");
                if (scroll_y > typo + contentWidth) {

                    if (keyframe >= 65) {
                        keyframeImg.current.style.opacity = 0
                        setF(65);
                        setMainI(2);
                        setOp(1);
                        setPOn("off");
                        setTC(2);
                        if(keyframe >= 90) {
                            setTC(3);
                            setPOn("on");
                        }
                    } else if(keyframe <= 1) {
                        keyframeImg.current.style.opacity = 1
                        setF(1);
                        setMainI(1);
                    } else {
                        keyframeImg.current.style.opacity = 1
                        setTC(1);
                        setPOn("off");
                        setF(keyframe)
                        setOp(0)
                        if(keyframe > 32) {
                            setMainI(2);
                            setTC(2);
                        }
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
    function mainWidth() {
        let width = window.innerWidth
        if(width > 1024) {
            mainImage.current.style.width =  `1024px`
            width = 1024
        } else {
            mainImage.current.style.width =  `${width}px`
        }
        let height = Math.round(width*0.9)
        mainImage.current.style.height = `${height}px`
    }

    // 메인 비디오 opacity 변경 함수

    
    useEffect(()=>{
        mainWidth();
        window.addEventListener("resize" , mainWidth);
        return ()=> window.removeEventListener("resize" , mainWidth);
    },[mainImage])

    useEffect(()=>{
        window.addEventListener('scroll',coverEvent);
        return ()=> window.removeEventListener('scroll', coverEvent);
    },[typoH, contentNode.width, visualOn, frame, intro, mainI, proOn, textChane])


    return (
        <article className={`mainVisual`} ref={main_visual.value}>
            <div className={`contents ${mainOn(on,3)}`} ref={contentBox}>
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
                        <div className="video_box">
                            <div className={`imgBox ${proOn}`} style={{opacity : op}}>
                                <img src={`./video/junheeMain${mainI}.jpg`} alt="junhee"/>
                            </div>
                            <img className="keyframe" ref={keyframeImg} src={`./video/keyframe/jun${frame}.jpg`} alt="junhee"/>
                        </div>
                        <Profile on={proOn} text={textChane}/>
                    </div>
                </div>
            </div>
        </article>
    )
}


export default MainVisual;