import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function Gnb({id ,link , title , index, move}) {
    return (
        <li className={id + index}>
            <a href={link} onClick={()=>move(index)}>{title}</a>
        </li>
    )
}

const gnb_info = [
    {
        id : "btn_gnb" ,
        link : "javascript:;",
        //title : "소개",
        title : "intro"
    },
    {
        id : "btn_gnb" ,
        link : "javascript:;",
        //title : "기술",
        title : "workmanship"
    },
    {
        id : "btn_gnb" ,
        link : "javascript:;",
        //title : "웹",
        title : "web"
    },
    {
        id : "btn_gnb" ,
        link : "javascript:;",
        //title : "디자인",
        title : "design"
    },
    {
        id : "btn_gnb" ,
        link : "javascript:;",
        //title : "연결",
        title : "connect"
    }
]

gnb_info.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

function Header({introH, skillH, webH}) {
    const 
        [movePoint, setMov] = useState(0),
        [headerPos, setHPos] = useState(0)
        ;

    const
        headerH = useCallback(node => {
        if (node !== null) {
            setHPos(node.getBoundingClientRect().height);
        }},[])
        ;
    function moveSection(x) {        
        let scrollY = window.scrollY
        let i = 0;
        switch(x){
            case 1 :
                i = introH;
                break;
            case 2 :
                i = introH+skillH;
                break;
            case 3 :
                i = introH+skillH+500;
                break;  
            case 4 :
                i = introH+skillH+400;
                break;  
            default :
                i = 0;
        }
        let start = Math.abs(scrollY - i);
        let time = start/200;
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
                    <a href="#">
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
                                intro={introH}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;