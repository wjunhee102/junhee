import React, { useRef, useEffect } from 'react';
import './css/header.css';
import useHeight from '../hooks/useHeight';

const gnb_info = [
    {
        id : "btn_gnb" ,
        link : "section",
        title : "intro"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "skill"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "web"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "others"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "contact"
    }
]

const m_gnb_info = [
    {
        id : "btn_gnb" ,
        link : "section",
        title : "I"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "S"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "W"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "O"
    },
    {
        id : "btn_gnb" ,
        link : "section",
        title : "C"
    }
]

// gnb_info.propTypes = {
//     id: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
// };

function headerOn(x) {
    if(x < 3) {
        return 'off'
    } else {
        return 'on'
    }
}




function Gnb({id ,link , title , index, move}) {
    return (
        <li className={id + index}>
            <a href={link} 
                onClick={ e => ((
                e.preventDefault(),
                move(index)
                ))}>{title}</a>
        </li>
    )
}

function Header({setHPos , moveS, hOn}) {

    //헤더 height 값 가져오기
    const
        headerH = useHeight();
        setHPos(headerH.height);

    // 모바일 버튼 이벤트 
    const BTN_GNB = useRef();
    const M_GNB = useRef();
    const GNB = useRef();


    let firstTouchY = 0;
    let touchMove = 0;
    let position = 0;
    let TOUCH_ON = false;

    const POINT = (x, y) => {
        let i = x-y 
        if(i <= 0) {
            i = 0
        } else if (i >= 230) {
            i = 230
        }
        return i 
    };
    


    const BTN_ACTION = (e)=>{
        e.preventDefault();
        const touch = e.changedTouches[0];
        firstTouchY = touch.clientY;
        M_GNB.current.style.height = `230px`;
        GNB.current.style.opacity = 1;
        TOUCH_ON = true;
    }
    const BTN_MOVE = (e)=> {
        if(!TOUCH_ON) return false; 
        e.preventDefault();
        const touch = e.changedTouches[0];
        touchMove = touch.clientY;
        position =  POINT(firstTouchY, touchMove);
        BTN_GNB.current.style.transform = `translateY(${-position}px)`;
    }
    const BTN_END = ()=> {
        TOUCH_ON = false;
        if(position > 51 ) {
            let i = 4 - Math.round((position - 51)/44);
            moveS(i);
        } 
        BTN_GNB.current.style.transform = `translateY(${0}px)`;
        M_GNB.current.style.height = `0px`;
        GNB.current.style.opacity = 0.7;
    } 
         

    useEffect(()=>{
        BTN_GNB.current.addEventListener("touchstart" , BTN_ACTION ,{passive: false});
        BTN_GNB.current.addEventListener("touchmove", BTN_MOVE ,{passive: false});
        BTN_GNB.current.addEventListener("touchend", BTN_END ,{passive: false});
        return ()=> {
            BTN_GNB.current.removeEventListener("touchstart" , BTN_ACTION ,{passive: false});
            BTN_GNB.current.removeEventListener("touchmove", BTN_MOVE ,{passive: false});
            BTN_GNB.current.removeEventListener("touchend", BTN_END ,{passive: false});
        }
    },[moveS, TOUCH_ON]);
    //

    return (
        <header id="header" className={`header ${headerOn(hOn)}`} ref={headerH.value} >
            <div className="inner">
                <h1 className="logo">
                    <a href="https://wjunhee102.github.io/junhee/">
                        <span>황준희 포트폴리오 로고</span>
                    </a>
                </h1>
            
                <nav className="gnb" ref={GNB}>
                    <ul className="menu_gnb">
                        {gnb_info.map((info, idx)=>(
                            <Gnb 
                                id={info.id} 
                                index={idx} 
                                link={info.link} 
                                title={info.title} 
                                key={idx} 
                                move={moveS} 
                            />
                        ))}
                    </ul>
                    <ul className="menu_m_gnb" ref={M_GNB} >
                        {m_gnb_info.map((info, idx)=>(
                            <Gnb 
                                id={info.id} 
                                index={idx} 
                                link={info.link} 
                                title={info.title} 
                                key={idx}
                                move={moveS} 
                            />
                        ))}
                    </ul>
                    <button type="button" className={`btn_gnb`} ref={BTN_GNB}>
                        <span className="btn_logo">JUN</span>
                        <span className="blind">gnb 이동 버튼</span>
                    </button>
                </nav>
                
            </div>
        </header>
    );
}


export default Header;