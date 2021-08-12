import React, { useState, useEffect } from 'react';
import './css/skill.css';
import useHeight from '../hooks/useHeight';
import useScroll from '../hooks/useScroll';



// //skillkind 내용
const skillKind = [
    {
        name : 'html5',
        tit : "frontend",
        content: ""
    },
    {
        name: 'css3',
        tit: "frontend",
        content: ""
    },
    {
        name: 'javascript',
        tit: "frontend",
        content: ""
    },
    {
        name: 'react',
        tit: "frontend",
        content: ""
    },
    {
        name: 'typescript',
        tit: "frontend / backend",
        content: ""
    },
    {
        name: 'vue',
        tit: "frontend",
        content: ""
    },
    {
        name: 'nodeJs',
        tit: "backend",
        content: ""
    },
    {
        name: 'nestJs',
        tit: "backend",
        content: ""
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