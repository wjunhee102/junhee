import React from 'react';
import './css/web.css';
import './css/team.css';
import useHeight from '../hooks/useHeight';

//내용
const port_site = [
    {
        title : "naver",
        keyword : "네이버",
        title2 : "네이버를 다크모드로 만들어 보았습니다.",
        lang : ["html5", "css3"],
        divice : "데스크탑",
        personnel : ["황준희"],
        content : ' 만들면서 제일 고민 했었던 부분은 뉴스 스탠드 영역입니다. 언론사 로고가 흰색 배경에 JPG파일로 되어 있어서 검은색 배경과 어울리게 하려고 현실에 있는 신문 가판대처럼 꾸며 그 안에 로고를 집어 넣었습니다. ',
        img : "naver",
        link : "https://wjunhee102.github.io/port_sub/naver/index.html",
        git : "https://github.com/wjunhee102/port_sub/tree/master/naver",
        sub : false
    },
    {
        title : "apple",
        keyword : "Apple",
        title2 : "애플 메인페이지입니다.",
        lang : ["html5", "css3"],
        divice : "반응형",
        personnel : ["황준희"],
        content : ' 저에게 영감을 많이 주던 사이트입니다. 그래서 웹 분야를 알기 전부터 만들어 보고 싶었습니다. 버튼을 눌렀을 때 메뉴가 나오게 하는 동작은 input과 label을 이용하였습니다. 반응형으로 제작되었습니다.',
        img : "apple",
        link : "https://wjunhee102.github.io/port_sub/applemain/appleindex.html",
        git : "https://github.com/wjunhee102/port_sub/tree/master/applemain",
        sub : false
    },
    {
        title : "podopod",
        keyword : "포도팟",
        title2 : "포도팟 프로모션 사이트입니다.",
        lang : ["html5", "css3","jQuery", "javascript"],
        divice : "데스크탑",
        personnel : ["황준희"],
        content : ' 제이쿼리를 이용하여 동적인 사이트를 만들었습니다. Scroll 위치가 각섹션 위치에 오면 애니메이션이 동작하도록 만들었습니다.',
        img : "podopod",
        link : "https://wjunhee102.github.io/port_sub/podo/index.html",
        git : "https://github.com/wjunhee102/port_sub/tree/master/podo",
        sub : false
    },
    {
        title : "cgv",
        keyword : "CGV",
        title2 : "CGV 메인페이지 리뉴얼 사이트입니다.",
        lang : ["html5", "css3", "javascript"],
        divice : "데스크탑",
        personnel : ["황준희", "서정린", "홍승표", "김영훈", "이제현"],
        content : '  CGV 메인 페이지를 리뉴얼 해봤습니다. 디자인은 넷플리스와 롯데 시네마를 참고하였습니다. 플러그인을 사용하지 않고 순수 자바스크립트로 제작하였습니다. 저는 이 프로젝트에서 기획과 전반적인 제작 총괄을 담당했습니다.',
        img : "cgv",
        link : "https://wjunhee102.github.io/TeamProJ/",
        git : "https://github.com/wjunhee102/TeamProJ/",
        sub : false
    }
]


//기본 구성 요소
function Port({title, divi, title2, content, img, lang, personnel, link, keyword, git}) {  
    return (
        <article className={`port_site ${title}`}>
            <div className="inner">

                <div className={`textbox`}>
                    
                    <div className={`contents ${title}`}>
                        <h3 className="tit">
                            <span className="text">{keyword}</span>
                            <span className="line"></span>
                        </h3>
                        <h4 className="divi">{divi}</h4>
                        <ul className="lang_menu">
                            {lang.map((ele , idx)=> (
                                <li className={`lang ${ele}`} key={idx}></li>
                            ))}
                        </ul>
                        
                        <ul className="pers_menu">
                            {personnel.map((ele , idx)=> (
                                <li className={`pers${idx}`} key={idx}>{ele}</li>
                            ))}
                        </ul>
                        <h5 className="tit2">{title2}</h5>
                        <p className="exp">{content}</p>
                        <p className="git">
                            <a href={git} className="gitlink" target="_blink">소스코드 주소 &#62;</a>
                        </p>
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
                    git={ele.git}
                />
            ))}
        </section>
    )
}

export default Web;