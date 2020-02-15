import React, { useCallback } from 'react';



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
            
        </section>
    )
}

export default Skill;