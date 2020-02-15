import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const gnb_info = [
    {
        id : "btn_gnb" ,
        link : "section",
        //title : "소개",
        title : "intro"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        //title : "기술",
        title : "workmanship"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        //title : "웹",
        title : "web"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        //title : "디자인",
        title : "design"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        //title : "연결",
        title : "connect"
    }
]

gnb_info.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

function Gnb({id ,link , title , index, move}) {
    return (
        <li className={id + index}>
            <a href={link} onClick={(e)=> (
                e.preventDefault(),
                move(index)
            )}>{title}</a>
        </li>
    )
}

function Header({introH, skillH, webH}) {
    const 
        [headerPos, setHPos] = useState(0)
        ;

    const
        headerH = useCallback(node => {
        if (node !== null) {
            setHPos(node.getBoundingClientRect().height);
        }},[])
        ;
    const secH = [
        0,
        introH,
        introH+skillH-headerPos,
        introH+skillH+1000-headerPos,
        introH+skillH+1200-headerPos
    ]
   

    function moveSection(x) {  
        let 
            scrollY = window.scrollY,
            i = secH[x],
            start = Math.abs(scrollY - i),
            time = start/200
        ;

        if(start <= 200) {
            time = 1 ;
        }
        console.log(time)
        function mov() {
            if(scrollY < i-1) {
                scrollY = scrollY+time
                window.scrollTo(0, scrollY);
            } else if(scrollY > i+1) {
                scrollY = scrollY-time
                window.scrollTo(0, scrollY);
            } else {
                scrollY = i
                window.scrollTo(0, scrollY);
                console.log(scrollY);
            }
            if (scrollY != i) {
                requestAnimationFrame(mov);
            }
        }
        mov();    
    }
    

    return (
        <header id="header" className="header" ref={headerH} >
            <div className="inner">
                <h1 className="logo">
                    <a href="https://wjunhee102.github.io/junhee/">
                        Junhee
                        <span>황준희 포트폴리오 로고</span>
                    </a>
                </h1>
            
                <nav className="gnb">
                    <ul className="menu_gnb">
                        {gnb_info.map((info, idx)=>(
                            <Gnb 
                                id={info.id} 
                                index={idx} 
                                link={info.link} 
                                title={info.title} 
                                key={idx} 
                                move={moveSection} 
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;