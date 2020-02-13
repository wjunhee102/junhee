import React, { useState } from 'react';
import './../css/slide.css';

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
        <div class="main_slide">

            <div class="slide_wrap">
                {slide_item.map((ele, idx)=>(
                    <div class={`slide_item item${idx}`} key="idx">{ele.title}</div>
                ))}
            </div>

            <div class="slide_dots">
                {slide_item.map((ele, idx)=>(
                    <div class={`slide_dot slide_dot${idx}`} key="idx"><a href="javascript:;">{ele.content}</a></div>
                ))}
            </div>

            <button class="btn_prev slide_arrows">prev</button>
            <button class="btn_next slide_arrows">next</button>

            <div class="auto_play">
                <button class="btn_play">재생/일시정지</button>
            </div>

        </div>
    )
}

function Skill() {
    return (
        <section className="skill">
            <h2>workmanship</h2>
            <Slide />
        </section>
    )
}

export default Skill;