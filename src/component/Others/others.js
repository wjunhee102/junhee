import React from 'react';
import Calulator from './calulator/calulator';
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
        title : "Others"
    }

    return (
        <section className="others">
            <Foreword 
                title={othersContents.title}
            />
            <div className="inner">
                
                <article className="">
                    <Calulator />
                </article>
                <article>
                    <Link to={{pathname: '/maskApp'}}>
                        마스크앱
                    </Link>
                </article>
                <article>
                    <Link to={{pathname: '/ticketing'}}>
                        예매 앱
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default Others;