import React from 'react';
import './css/skill.css';
import useHeight from '../hooks/useHeight';


function Skill({sPos}) {
    const
        skillH = useHeight();
    
    sPos(skillH.height)


    return (
        <section className="skill" ref={skillH.value}>
        
        </section>
    )
}

export default Skill;