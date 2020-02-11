import React, { useState } from 'react';

const port_site = [
    {
        title : "naver",
        skill : ["HTML5", "CSS3", "Javascipt"],
        divice : "데스크탑",
        content : "HTML5/CSS를 배우고 만든 웹입니다. “네이버에 블랙모드가 있다면 어떨까?”라는 생각으로 만들었습니다.",
        img : ""
    },
    {
        title : "apple",
        skill : ["HTML5", "CSS3", "Javascipt"],
        divice : "반응형",
        content : "웹 퍼블리싱를 알기 전부터 많이 관심이 있었고 꼭 한번 만들어 보고 싶었던 사이트 입니다. 반응형으로 제작하였고, HTML5/CSS3로만 만들었습니다.",
        img : ""
    },
    {
        title : "podopod",
        skill : ["HTML5", "CSS3", "Javascipt"],
        divice : "데스크탑 / 모바일",
        content : "-	jQuery를 배우고 만든 사이트입니다. 각 섹션마다 애니메이션을 넣어서 동적인 느낌을 들게 만들었습니다.",
        img : ""
    }
]
const port_site_T = {
    title : "CGV",
    skill : ["HTML5", "CSS3", "Javascipt"],
    divice : "데스크탑",
    personnel : "황준희 / 서정린/ 김영훈 / 이제현 / 홍승표",
    content : "팀 프로젝트로 만든 CGV리뉴얼 사이트입니다. 저는 이 프로젝트에서 기획 및 제작 총괄을 맡았습니다. 넷플릭스와 롯데시네마를 벤치마킹하여 디자인하였고, 웹 접근성을 고려하여 만들었습니다. 동적 기능은 라이브러리와 플러그인을 사용하지 않고 바닐라 자바스크립트로 만들었습니다. ",
    img : ""
}


function Port(title, skill, divi, content, img) {
    return (
        <div className={`port_site ${title}`}>
            <h3 className="tit">{title}</h3>
            <ul>{skill }</ul>
        </div>
    )
}

function Web() {
    return (
        <section className="web">

        </section>
    )
}

export default Web;