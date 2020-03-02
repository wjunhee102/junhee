import React, { useState, useCallback } from 'react';
import './css/web.css';
import './css/team.css';
import useHeight from '../hooks/useHeight';

//내용
const port_site = [
    {
        title : "naver",
        keyword : "네이버",
        title2 : "",
        lang : ["html5", "css3"],
        divice : "데스크탑",
        personnel : ["황준희"],
        content : ' HTML5/CSS를 배우고 만든 웹입니다.',
        img : "naver",
        link : "https://wjunhee102.github.io/port_sub/naver/index.html",
        sub : false
    },
    {
        title : "apple",
        keyword : "Apple",
        title2 : "",
        lang : ["html5", "css3"],
        divice : "반응형",
        personnel : ["황준희"],
        content : ' 웹 퍼블리싱을 알기 전부터 많이 관심이 있었고 꼭 한번 만들어 보고 싶었던 사이트 입니다. 반응형으로 제작하였고, HTML5/CSS3로만 만들었습니다.',
        img : "apple",
        link : "https://wjunhee102.github.io/port_sub/applemain/appleindex.html",
        sub : false
    },
    {
        title : "podopod",
        keyword : "포도팟",
        title2 : "",
        lang : ["html5", "css3","jQuery", "javascript"],
        divice : "데스크탑",
        personnel : ["황준희"],
        content : ' jQuery를 배우고 만든 사이트입니다. 각 섹션마다 애니메이션을 넣어서 동적인 느낌을 들게 만들었습니다.',
        img : "podopod",
        link : "https://wjunhee102.github.io/port_sub/podo/index.html",
        sub : false
    }
]


//기본 구성 요소
function Port({title, divi, content, img, lang, personnel, link, keyword, idx}) {  
    return (
        <article className={`port_site site${idx} ${title}`}>
            <div className="inner">
                <div className={`textbox ${title}`}>
                    <h3 className="tit">
                        <span className="text">{keyword}</span>
                        <span className="line"></span>
                    </h3>
                    <div className="contents">
                    <p className="exp">{content}</p>
                    <div className="detail">
                        <ul className="lang_menu">
                            {lang.map((ele , idx)=> (
                                <li className={`lang ${ele}`} key={idx}></li>
                            ))}
                        </ul>
                        <h4 className="divi">{divi}</h4>
                        <ul className="pers_menu">
                            {personnel.map((ele , idx)=> (
                                <li className={`pers${idx}`} key={idx}>{ele}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
               
                <div className={`imgbox ${img}`}>
                    <a href={link} className="link" target="_blink">
                        <div className={`img`}>
                            <span className="blind">{title}</span>
                        </div>
                    </a>
                </div>
                
            </div>
        </article>
    )
}

function Foreword() {
    return (
        <div className="foreword">
            <div className="inner">
                <h2 className="tit">Portfolio</h2>
                <p className="exp">
                    웹 포트폴리오입니다. 
                </p>
            </div>
        </div>
    )
}


function Web({wPos}) {
    const web = useHeight();

    wPos(web.height);
    
    return (
        <section className="web" ref={web.value} >
            <Foreword />
            {port_site.map((ele,idx) => (
                <Port 
                    title={ele.title} 
                    keyword={ele.keyword}
                    title2={ele.title2}
                    divi={ele.divice} 
                    content={ele.content} 
                    lang={ele.lang}
                    personnel={ele.personnel} 
                    img={ele.img}
                    link={ele.link} 
                    key={idx}
                    sub={ele.sub}
                    idx={idx}
                    kind={ele.kind}
                />
            ))}
        </section>
    )
}

export default Web;