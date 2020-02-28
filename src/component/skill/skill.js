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
        position: 'fixed',
        left: `50%`,
        top: `50%`,
        transform: `translate(-50%, -50%)`,
        fontSize: '2em'
    }
    sPos(skillH.height)
    

    const skillH2 = useFadeAnimate(18820.5);

    return (
        <section className="skill">
            <h2>skill</h2>
            <div className="skill12" ref={skillH2.NODE} style={{width: `100%` , height : `1000px`}}>
                <h3 ref={skillH2.moving_NODE} style={h3Style}>안녕하세요</h3>
            </div>
            <Slide />
        </section>
    )
}

export default Skill;