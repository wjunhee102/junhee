import React, { useState } from 'react';

const port_site = [
    {
        title : "naver",
        lang : ["HTML5", "CSS3"],
        divice : "데스크탑",
        personnel : ["황준희"],
        content : "HTML5/CSS를 배우고 만든 웹입니다. “네이버에 블랙모드가 있다면 어떨까?”라는 생각으로 만들었습니다.",
        img : ""
    },
    {
        title : "apple",
        lang : ["HTML5", "CSS3"],
        divice : "반응형",
        personnel : ["황준희"],
        content : "웹 퍼블리싱를 알기 전부터 많이 관심이 있었고 꼭 한번 만들어 보고 싶었던 사이트 입니다. 반응형으로 제작하였고, HTML5/CSS3로만 만들었습니다.",
        img : ""
    },
    {
        title : "podopod",
        lang : ["HTML5", "CSS3", "jQuery"],
        divice : "데스크탑 / 모바일",
        personnel : ["황준희"],
        content : "jQuery를 배우고 만든 사이트입니다. 각 섹션마다 애니메이션을 넣어서 동적인 느낌을 들게 만들었습니다.",
        img : ""
    },
    {
        title : "CGV",
        lang : ["HTML5", "CSS3", "Javascipt"],
        divice : "데스크탑",
        personnel : ["황준희", "서정린", "김영훈", "이제현", "홍승표"],
        content : "팀 프로젝트로 만든 CGV리뉴얼 사이트입니다. 저는 이 프로젝트에서 기획 및 제작 총괄을 맡았습니다. 넷플릭스와 롯데시네마를 벤치마킹하여 디자인하였고, 웹 접근성을 고려하여 만들었습니다. 동적 기능은 라이브러리와 플러그인을 사용하지 않고 바닐라 자바스크립트로 만들었습니다. ",
        img : ""
    }
]


function Port({title, divi, content, img, lang, personnel}) {  
    return (
        <div className={`port_site ${title}`}>
            <div className="imgbox">
                <img src={img} title={title} alt={title} />
            </div>
            <div className="contents">
                <h3 className="tit">{title}</h3>
                <ul className="lang_menu">
                    {lang.map((ele , idx)=> (
                        <li className={`lang${idx}`} key={idx}>{ele}</li>
                    ))}
                </ul>
                <h4 className="divi">{divi}</h4>
                <ul className="pers_menu">
                    {personnel.map((ele , idx)=> (
                        <li className={`pers${idx}`} key={idx}>{ele}</li>
                    ))}
                </ul>
                <p className="exp">{content}</p>
            </div>
        </div>
    )
}

function Web() {
    return (
        <section className="web">
            <div className="foreword">
                <h2 className="tit">Portfolio</h2>
                <p className="exp">
                    포트폴리오입니다. 
                </p>
            </div>
            {port_site.map((ele,idx) => (
                <Port 
                    title={ele.title} 
                    divi={ele.divice} 
                    content={ele.content} 
                    lang={ele.lang}
                    personnel={ele.personnel} 
                    img={ele.img} 
                    key={idx}
                />
            ))}
        </section>
    )
}

export default Web;