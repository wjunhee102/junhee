import React, { useState, useEffect } from 'react';
import './css/skill.css';
import Slide from './slide';
import useHeight from '../hooks/useHeight';


function Skill({sPos}) {
    const
        skillH = useHeight();
    
    sPos(skillH.height)


    return (
        <section className="skill" ref={skillH.value}>
            <Slide />
        </section>
    )
}

export default Skill;