import React from 'react';
import { Link } from 'react-router-dom';
import './css/others.css';

function Foreword({ title, content }) {
    return (
        <div className="foreword">
            <div className="inner">
                <h2 className="tit">{title}</h2>
                <p className="exp">
                    {content}
                </p>
            </div>
        </div>
    )
}

function Others() {
    const othersContents = {
        title : "Others",
        content : "현재 제작중입니다."
    }

    return (
        <section className="others">
            <Foreword 
                title={othersContents.title}
                content={othersContents.content}
            />
            <div className="inner">
                
                <article className="">
                    <Calulator />
                </article>
            </div>
        </section>
    )
}

export default Others;