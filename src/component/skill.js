import React, { useState } from 'react';

function Slide() {
    return (
        <div class="main_slide">

            <div class="slide_wrap">
                <div class="slide_item">1</div>
                <div class="slide_item">2</div>
                <div class="slide_item">3</div>
                <div class="slide_item">4</div>
                <div class="slide_item">5</div>
            </div>

            <div class="slide_dots">
                <div class="slide_dot"><a href="javascript:;">1</a></div>
                <div class="slide_dot"><a href="javascript:;">2</a></div>
                <div class="slide_dot"><a href="javascript:;">3</a></div>
                <div class="slide_dot"><a href="javascript:;">4</a></div>
                <div class="slide_dot"><a href="javascript:;">5</a></div>
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

        </section>
    )
}

export default Skill;