import React from 'react';
import './css/skill.css';
import Slide from './slide';
import useHeight from '../hooks/useHeight';
import useAnimate from '../hooks/useAnimate';


function Skill({sPos}) {
    const
        skillH = useHeight();
    const sss = useAnimate();
    
    sPos(skillH.height)
    
    return (
        <section className="skill" ref={skillH.value}>
            <h2 ref={sss.bbbb}>skill</h2>
            <Slide />
        </section>
    )
}

export default Skill;