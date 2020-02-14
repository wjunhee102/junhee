import React from 'react';
import './../../css/slide.css';

const slide_item = [
    {
        title : "slide" ,
        content : 1,
        img : ""
    },
    {
        title : "slide" ,
        content : 1,
        img : ""
    },
    {
        title : "slide" ,
        content : 1,
        img : ""
    },
    {
        title : "slide" ,
        content : 1,
        img : ""
    },
    {
        title : "slide" ,
        content : 1,
        img : ""
    }
]



function Slide() {
    return (
        <div className="main_slide">

            <div className="slide_wrap">
                {slide_item.map((ele, idx)=>(
                    <div className={`slide_item item${idx}`} key={idx}>{ele.title}</div>
                ))}
            </div>

            <div className="slide_dots">
                {slide_item.map((ele, idx)=>(
                    <div className={`slide_dot slide_dot${idx}`} key={idx}><a href="javascript:;">{ele.content}</a></div>
                ))}
            </div>

            <button className="btn_prev slide_arrows">prev</button>
            <button className="btn_next slide_arrows">next</button>

            <div className="auto_play">
                <button className="btn_play">재생/일시정지</button>
            </div>

        </div>
    )
}

export default Slide;