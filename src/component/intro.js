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


function Intro({iPos}) {
    const [ introHeight, setIH ] = useState(0);

    const 
        [valuePos, setPosi] = useState("fixed"),
        [valueY, setY] = useState(0),
        [valueS, setS] = useState(0),
        [valueOp, setOp] = useState(1)
        ;
    
    // scroll 변수   
    let 
        lastScroll = 0,
        ticking = false
        ;
    
    // intro섹션 parallex함수
    function move(scroll_pos) {
        if (scroll_pos < 800) {
            if (scroll_pos <= 150) {
                setOp(1);
            } else {
                setOp(0);
                
            }
        } 
    }
    function introMove(scrollY) {
        move(scrollY);
            if (scrollY < 800) {
                setS(scrollY);
                setPosi("fixed");
                setY(0);
            } else {
                setS(800);
                setY(800);
                setPosi("absolute");
            }
	}
	
    
    function introScroll() {
        lastScroll = window.pageYOffset 
        if(!ticking) {
            window.requestAnimationFrame(()=> {
                introMove(lastScroll);
            })
            ticking = true ;
        }
            ticking = false ;
        }
        

    const
        introH = useCallback(node => {
        if (node !== null) {
            setIH(node.getBoundingClientRect().height);
        }},[])
        ;
    
    useEffect(()=>{
        iPos(introHeight)
    })

    useEffect(()=>{
        window.addEventListener('scroll',introScroll)
        return ()=> window.removeEventListener('scroll',introScroll)
    },[valuePos,valueY,valueS,valueOp])

    return (
        <section className="intro" ref={introH}>
            <MainVisual 
                valueY={valueY} 
                valueS={valueS} 
                valueOp={valueOp} 
                valuePos={valuePos}
            />
        </section>
    )
}


export default Intro;