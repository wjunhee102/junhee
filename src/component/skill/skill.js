import React, { useState, useEffect } from 'react';
import './css/skill.css';
import Slide from './slide';
import useHeight from '../hooks/useHeight';
import useFadeAnimate from '../hooks/useFadeAnimate';


function Skill({sPos, onon}) {
    const
        skillH = useHeight();
    
    const h3Style = {
        zIndex: `1000`,
        width : `100%`,
        height: `300px`,
        backgroundColor: `red`,
        position: 'absolute',
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`,
        fontSize: '2em',
        opacity: 0
    }
    sPos(skillH.height)
    

    const skillH2 = useFadeAnimate();


    return (
        <section className="skill" ref={skillH.value}>
            <h2>skill</h2>
            <div className="skill12" ref={skillH2.parent} style={{width: `100%` , height : `1000px`}}>
                <h3 ref={skillH2.node} style={h3Style}>안녕하세요</h3>
            </div>
            <Slide />
        </section>
    )
}

export default Skill;