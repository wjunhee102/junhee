import React, { useState ,useCallback, useEffect } from 'react';
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

function headerOn(x) {
    if(x >= 3) {
        return 'on'
    } else {
        return 'off'
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
    const [hHeight , setHH] = useState(0)

    //헤더 height 값 가져오기
    const
        headerH = useCallback(node => {
        if (node !== null) {
            setHH(node.getBoundingClientRect().height);
            window.addEventListener('resize', ()=>{
                setHH(node.getBoundingClientRect().height);
            })
        }},[])
        ;

    useEffect(()=>{
        setHPos(hHeight);
    })

    return (
        <header id="header" className={`header ${headerOn(hOn)}`} ref={headerH} >
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
                                move={moveS} 
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;