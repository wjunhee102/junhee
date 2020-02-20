import React, { useState, useCallback, useEffect } from 'react';
import Slide from './skill/slide';
import useHeight from './hooks/useHeight';


function Skill({sPos}) {
    const
        skillH = useHeight();
    
    sPos(skillH.height)

    return (
        <section className="skill" ref={skillH.value}>
            <h2>workmanship</h2>
            <Slide />
        </section>
    )
}

export default Skill;