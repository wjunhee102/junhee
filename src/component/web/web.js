import React from 'react';
import './css/web.css';
import './css/team.css';
import useHeight from '../hooks/useHeight';

//내용
const port_site = [
    {
        title: "react",
        keyword: "React",
        title2: "React clone입니다.",
        lang: ["javascript"],
        divice: "데스크탑",
        personnel: ["황준희"],
        content: "React의 핵심 컨셉인 변경된 요소만 돔에 적용 하는 것을 구현해보았습니다.",
        img: "react",
        link: "https://bklog-app-deploy.vercel.app",
        git: "https://github.com/wjunhee102/bklog-app",
        sub: false
    },
    {
        title: "bklog",
        keyword: "Bklog",
        title2: "블록 형태의 문서 작성 App입니다.(제작중)",
        lang: ["typescript", "react", "nestjs"],
        divice: "데스크탑",
        personnel: ["황준희"],
        content: "notion의 블록 형태의 문서 컴포넌트와 실시간으로 업데이트가 되는 서비스를 직접 구현해보았습니다.",
        img: "bklog",
        link: "https://bklog-app-deploy.vercel.app",
        git: [["https://github.com/wjunhee102/bklog-app", "Client 소스코드"], ["https://github.com/wjunhee102/bklog-api", "Server 소스코드"]],
        sub: false
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
                        
                        {/* <ul className="pers_menu">
                            {personnel.map((ele , idx)=> (
                                <li className={`pers${idx}`} key={idx}>{ele}</li>
                            ))}
                        </ul> */}
                        <h5 className="tit2">{title2}</h5>
                        <p className="exp">{content}</p>
                        <p className="git">
                            {
                                typeof git === "string"?
                                <a href={git} className="gitlink" target="_blink">소스코드</a> 
                                : git.map((data, idx) => <a key={idx} href={data[0]} className="gitlink" target="_blink">{data[1]}</a>)
                            }
                            
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
                <h2 className="tit">Project</h2>
                <p className="exp">
                    개인적으로 작업한 결과물들입니다.
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