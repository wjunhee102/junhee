import React, { useState, useCallback, useEffect } from 'react';
import Slide from './skill/slide'


function Skill({sPos}) {
    const [skillHeigth , setSH] = useState(0) 

    const
        skillH = useCallback(node => {
        if (node !== null) {
            setSH(node.getBoundingClientRect().height);
        }},[])
        ;
    useEffect(()=>{
        sPos(skillHeigth)
    });

    return (
        <section className="skill" ref={skillH}>
            <h2>workmanship</h2>
            <Slide />
        </section>
    )
}

export default Skill;