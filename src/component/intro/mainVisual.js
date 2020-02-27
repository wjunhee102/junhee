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
                "더 나은 내일이 되길 위하여<br />
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
        name : 'illustrator',
        img : 'illu.png'
    },
    {
        name : 'scss',
        img : 'scss.png'
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
        [textChane , setTC] = useState(0),
        [mainImageW , setImageW] = useState(1024),
        [mainImageH , setImageH] = useState(1024)
    ;
    const 
        main_visual = useHeight(),
        contentNode = useNode(),
        coverEle = useRef()
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
            keyframe = Math.round((scroll_y - (typo + contentNode.width))/70)
            lateX = scroll_y - typo
            if(scroll_y <= typo + contentNode.width) {
                coverEle.current.style.transform = `translate(${-lateX}px, 0)`;
                setOp(1);
                setMainI(1);
                setF(1);
                setTC(0);
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
                        setTC(2);
                        if(keyframe >= 90) {
                            setTC(3);
                            setPOn("on");
                        }
                    } else if(keyframe <= 1) {
                        setF(1);
                        setMainI(1);
                    } else {
                        setTC(1);
                        setPOn("off");
                        if(keyframe > 32) {
                            setMainI(2);
                            setTC(2);
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
    function mainWidth() {
        let width = window.innerWidth
        if(width > 1024) {
            setImageW(1024)
        } else {
            setImageW(width)
        }
        let heigth = Math.round(mainImageW*0.9)
        setImageH(heigth)
    }

    // 메인 비디오 opacity 변경 함수
    function profileOff() {
        if(frame === 65) {
            return 0;
        } else {
            return 1;
        }
    }
    
    useEffect(()=>{
        mainWidth();
        window.addEventListener("resize" , mainWidth);
        return ()=> window.removeEventListener("resize" , mainWidth);
    },[mainImageW, mainImageH])

    useEffect(()=>{
        window.addEventListener('scroll',coverEvent);
        return ()=> window.removeEventListener('scroll', coverEvent);
    },[typoH, contentNode.width, visualOn, frame, intro, mainI, proOn, textChane])


    return (
        <article className={`mainVisual`} ref={main_visual.value}>
            <div className={`contents ${mainOn(on,3)}`} ref={contentNode.nodeGet}>
                <div className="img_box">
                    <div className="img" style={{width: `${mainImageW}px`, height : `${mainImageH}px`}}>
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
                            <img className="keyframe" style={{opacity : profileOff()}} src={`./video/keyframe/jun${frame}.jpg`} alt="junhee"/>
                        </div>
                        <Profile on={proOn} text={textChane}/>
                    </div>
                </div>
            </div>`
        </article>
    )
}


export default MainVisual;