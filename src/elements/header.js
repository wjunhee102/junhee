import React from 'react';
import PropTypes from 'prop-types';

function Gnb({id ,link , title , index}) {
    return (
        <li className={id + index}>
            <a href={link}>{title}</a>
        </li>
    )
}

const gnb_info = [
    {
        id : "btn_gnb" ,
        link : "section" ,
        title : "소개"
    },
    {
        id : "btn_gnb" ,
        link : "section" ,
        title : "기술"
    },
    {
        id : "btn_gnb" ,
        link : "section" ,
        title : "웹"
    },
    {
        id : "btn_gnb" ,
        link : "section" ,
        title : "디자인"
    },
    {
        id : "btn_gnb" ,
        link : "section" ,
        title : "연결"
    }
]

gnb_info.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

function Header() {
    return (
        <header id="header" className="header">
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
                            <Gnb id={info.id} index={idx} link={info.link} title={info.title} key={idx} />
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;