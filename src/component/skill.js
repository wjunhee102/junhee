import React, { useCallback } from 'react';
import Slide from './skill/slide'


function Skill({sPos}) {
    const
        skillH = useCallback(node => {
        if (node !== null) {
            sPos(node.getBoundingClientRect().height);
        }},[])
        ;

    return (
        <section className="skill" ref={skillH}>
            <h2>workmanship</h2>
            <Slide />
        </section>
    )
}

export default Skill;