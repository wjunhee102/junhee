import React, { useState, useEffect ,useCallback } from 'react';

function MainVisual({valueY, valueS, valueOp, valuePos}) {
    return (
            <div className="main_visual" style={{position: `${valuePos}`, transform: `translateY(${valueY}px)` , perspective :`400px`}}>
                <div className="visual" style={{transform: `translate3d(-50%, -50%, ${-(valueS)}px)`}}>
                    <h2 className="tit" style={{opacity : valueOp, transition: `0.5s`}}>HELLO, WORLD</h2>
                </div>
            </div>
    )
}


function Intro({y, s, op, posi, iPos}) {
    const [ introHeight, setIH ] = useState(0);

    const
        introH = useCallback(node => {
        if (node !== null) {
            setIH(node.getBoundingClientRect().height);
        }},[])
        ;
    
    useEffect(()=>{
        iPos(introHeight)
    })


    return (
        <section className="intro" ref={introH}>
            <MainVisual 
                valueY={y} 
                valueS={s} 
                valueOp={op} 
                valuePos={posi}
            />
        </section>
    )
}


export default Intro;