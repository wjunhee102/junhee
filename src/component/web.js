import React, { useState, useCallback } from 'react';


const port_site = [
    {
        title : "네이버에 ",
        keyword : "다크모드",
        title2 : "가 있다면",
        lang : ["html5", "css3"],
        divice : "데스크탑",
        personnel : ["황준희"],
        content : ' HTML5/CSS를 배우고 만든 웹입니다.',
        img : "./images/naver_large.jpg",
        link : "https://wjunhee102.github.io/port_sub/naver/index.html",
        sub : false
    },
    {
        title : "",
        keyword : "애플",
        title2 : "",
        lang : ["html5", "css3"],
        divice : "반응형",
        personnel : ["황준희"],
        content : ' 웹 퍼블리싱을 알기 전부터 많이 관심이 있었고 꼭 한번 만들어 보고 싶었던 사이트 입니다. 반응형으로 제작하였고, HTML5/CSS3로만 만들었습니다.',
        img : "./images/apple_large.jpg",
        link : "https://wjunhee102.github.io/port_sub/applemain/appleindex.html",
        sub : false
    },
    {
        title : "포도팟",
        keyword : "",
        title2 : "",
        lang : ["html5", "css3","jQuery"],
        divice : "데스크탑 / 모바일",
        personnel : ["황준희"],
        content : ' jQuery를 배우고 만든 사이트입니다. 각 섹션마다 애니메이션을 넣어서 동적인 느낌을 들게 만들었습니다.',
        img : "./images/podo_large.jpg",
        link : "https://wjunhee102.github.io/port_sub/podo/index.html",
        sub : false
    },
    {
        title : "CGV",
        keyword : "팀 프로젝트",
        title2 : "",
        lang : ["html5", "css3", "javascript"],
        divice : "데스크탑",
        personnel : ["황준희", "서정린", "김영훈", "이제현", "홍승표"],
        content : ' 팀 프로젝트로 만든 CGV리뉴얼 사이트입니다. 저는 이 프로젝트에서 기획 및 제작 총괄을 맡았습니다. 넷플릭스와 롯데시네마를 벤치마킹하여 디자인하였고, 웹 접근성을 고려하여 만들었습니다. 동적 기능은 라이브러리와 플러그인을 사용하지 않고 만들었습니다.',
        kind : [
            {
                title : "web",
                sub : "웹",
                img : "./images/cgv_large.jpg",
                link : "https://wjunhee102.github.io/TeamProJ/"
            },
            {
                title : "psd",
                sub : "디자인 시안",
                img : "./images/podo_large.jpg",
                link : "https://wjunhee102.github.io/TeamProJ/"
            },
            {
                title : "word",
                sub : "기획서",
                img : "./images/naver_large.jpg",
                link : "https://wjunhee102.github.io/TeamProJ/"
            }
        ],
        sub : true
    }
]


function ImgBox({idx, img, title, link, on}) {
    
    return (
        <li className={`img img${idx} ${on}`} >
            <a href={link} className={`img${idx}`} target="_blink">
                <img src={img} title={title} alt={title} />
            </a>
        </li>
    )
}

function Btn_team({title, value, sub, on}) {
    return (
        <button className={`btn_team ${title} ${on}`} onClick={value}>{sub}</button>
    )
}


function Team({kind}) {
    const 
        [con, setCon] = useState(0),
        [activeW, setActivW] = useState(0)
        ;
    const    
        width = useCallback(node => {
        if (node !== null) {
          setActivW(node.getBoundingClientRect().width);
        }},[])
        ;

    function onClass(x) {
        if(con == x) {
            return "on"
        } else {
            return ''
        }
    }

    function active(x) {
        console.log(activeW);
        return activeW*x
    }

    function onClass(x) {
        if(con == x) {
            return "on"
        } else {
            return ''
        }
    }

    return(
        <div className="wrap_team">
            <ul className="contents">
                {kind.map((ele,idx)=>(
                    <ImgBox 
                        idx={idx}
                        img={ele.img}
                        title={ele.title}
                        link={ele.link}
                        on={onClass(idx)}
                        key={idx}
                    />
                ))}
            </ul>
            <div className="menu_team">
                <div className="inner">
                {kind.map((ele, idx)=>(
                    <Btn_team 
                        title={ele.title}  
                        value={()=>setCon(idx)}
                        sub={ele.sub}
                        on={onClass(idx)}
                        key={idx}
                    />
                ))}
                </div>
                <div className="active">
                    <span className="active_bar" style={{transform: `translate(${active(con)}px)`}} ref={width}></span>
                </div>
            </div>
        </div>
        
    )
}

function Port({title, divi, content, img, lang, personnel, link, title2, keyword, sub ,idx, kind}) {  
    return (
        <article className={`port_site site${idx}`}>
            <div className="inner">
                <h3 className="tit">
                    <span className="tit_top">{title}</span>
                    <span className="key">{keyword}</span>{title2}
                </h3>
                <div className="imgbox">
                    { !sub ? (
                        <a href={link} className="img01" target="_blink">
                            <img src={img} title={title} alt={title} />
                        </a>
                    ):(
                        <Team kind={kind}/>
                    )}  
                </div>
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
    const
        webH = useCallback(node => {
        if (node !== null) {
            wPos(node.getBoundingClientRect().height);
        }},[])
        ;

    return (
        <section className="web" ref={webH} >
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