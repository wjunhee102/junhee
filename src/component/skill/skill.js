import React, { useState, useEffect } from 'react';
import './css/skill.css';
import useHeight from '../hooks/useHeight';
import useScroll from '../hooks/useScroll';



// //skillkind 내용
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


function Skills({name, content, tit}) {
    return (
        <li className={`icon ${name}`}>
            <div className="iconImg">
                <span>{name}</span>
            </div>
            <div className="iconcontents">
                <h4 className="icontit">{name}</h4>
                <p className="content"><span>{tit}</span>{content}</p>
            </div>
        </li>
    )
}

function Skill({sPos, iPos}) {
    const [ skillOn, setSkillOn ] = useState('on');

    const skillH = useHeight();
    const { scrollY } = useScroll(); 


    sPos(skillH.height);
    
    useEffect(()=> {
        if(scrollY >= iPos-1) {
            setSkillOn('on')
        } else {
            setSkillOn('off')
        }
    },[scrollY, iPos])

    return (
        <section className="skill" ref={skillH.value}>
            <div className="inner">
                <div className="tit">
                    <h3>
                        skill
                    </h3>
                    <p>
                        활용 가능한 기술
                    </p>
                </div> 
                <div className="junimg">
                    <span className="name">황준희</span>
                </div>
                <ul className={`iconBox ${skillOn}`} >
                    {skillKind.map((ele , idx)=>(
                        <Skills 
                            name={ele.name}
                            content={ele.content}
                            tit={ele.tit}
                            key={idx}
                        />
                    ))}
                      
                </ul>
            </div>
        </section>
    )
}

export default Skill;