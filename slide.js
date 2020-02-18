// 슬라이더


//변수
const 
      on = "on",
      play = "play",
      pause = "pause",
      mainSlide = document.querySelector(".main_slide"),
      allSlide = mainSlide.querySelectorAll(".slide_item"),
      firstSlide = mainSlide.querySelector(".slide_item:first-child"),
      lastSlide = mainSlide.querySelector(".slide_item:last-child"),
      slideDots = document.querySelector(".slide_dots"),
      allDots = slideDots.querySelectorAll(".slide_dot"),
      firstDot = slideDots.querySelector(".slide_dot:first-child"),
      lastDot = slideDots.querySelector(".slide_dot:last-child"),      
      btn_next = document.querySelector(".btn_next"),
      btn_prev = document.querySelector(".btn_prev"),
      auto_play = document.querySelector(".auto_play"),
      btn_play = auto_play.querySelector(".btn_play")
      ;

let 
   sw = true,
   num,
   ii ,
   iNum = 0,
   iii ,
   playOnOff = 0,
   autoPlay
   ;

// 다음 슬라이드 
function slideNext() {
   const currentSlide = mainSlide.querySelector(`.${on}`);
   const currentDot = slideDots.querySelector(`.${on}`);
   if (currentSlide){
      currentSlide.classList.remove(on);
      currentDot.classList.remove(on);
      const nextSlide = currentSlide.nextElementSibling;
      const nextDot = currentDot.nextElementSibling;
      if (nextSlide) {
         nextSlide.classList.add(on);
         nextDot.classList.add(on);
         iNum = 0;
         pauseAdd(nextDot);
      } else {
         firstSlide.classList.add(on);
         firstDot.classList.add(on);
         pauseAdd(firstDot);
         iNum = 0;
      }
   } else {
      firstSlide.classList.add(on);
      firstDot.classList.add(on);
      pauseAdd(firstDot);
      iNum = 0;
   }
}

// 이전 슬라이드
function slidePrev() {
   const currentSlide = mainSlide.querySelector(`.${on}`);
   const currentDot = slideDots.querySelector(`.${on}`);
   if (currentSlide){
      currentSlide.classList.remove(on);
      currentDot.classList.remove(on);
      const prevSlide = currentSlide.previousElementSibling;
      const prevDot = currentDot.previousElementSibling;
      if (prevSlide) {
         prevSlide.classList.add(on);
         prevDot.classList.add(on);
         iNum = 0;
         pauseAdd(prevDot);
      } else {
         lastSlide.classList.add(on);
         lastDot.classList.add(on);
         pauseAdd(lastDot);
         iNum = 0;
      }
   } else {
      lastSlide.classList.add(on);
      lastDot.classList.add(on);
      pauseAdd(lastDot);
      iNum = 0;
   }
}

// 슬라이드 닷
function onRemove() {
   const currentSlide = mainSlide.querySelector(`.${on}`);
   const currentDot = slideDots.querySelector(`.${on}`);
   if (currentSlide) {
      currentSlide.classList.remove(on);
      currentDot.classList.remove(on);
   }
}

// 슬라이드 닷 일시 정지 추가
function pauseAdd(x) {
   const pauseDot = slideDots.querySelector(`.${pause}`);
   if (pauseDot){
      pauseDot.classList.remove(pause);
      x.classList.add(pause);
   }
}

// 슬라이드 닷 개별 클릭 이벤트
function slideDotsNum() {
   for (let i = 0 ; i < allDots.length; i++ ){
      allDots[i].onclick = function(){
         onRemove();
         allDots[i].classList.add(on);
         allSlide[i].classList.add(on);
         pauseAdd(allDots[i]);
         iNum = 0;
      }
   }
}

// 슬라이드 자동 실행 시간
function countSlide() {
   iNum++ 
   if (iNum == 21) {
      iNum = 0
      slideNext();
   }
}


//슬라이드 시간 초기화
function swSwich() {
   btn_play.classList.toggle(pause);
   const pauseOn = auto_play.querySelector(`.${pause}`);
   if(pauseOn) {
      sw = false;
   } else {
      sw = true;
   }
}

// 슬라이드 자동 실행
function slidePlay() {  
   if(sw == true) {
      autoPlay = setInterval(countSlide, 100);
   } else  {
      clearInterval(autoPlay);
   }
}

// 자동 실행 재생/일시정지 버튼
function click_btnPlay() {
   btn_play.classList.toggle(pause);
   const pauseOn = auto_play.querySelector(`.${pause}`);
   const currentDot = slideDots.querySelector(`.${on}`);
   const pauseDot = slideDots.querySelector(`.${pause}`);
   if(pauseOn) {
      currentDot.classList.add(pause);
      sw = false;
   } else {
      pauseDot.classList.remove(pause);
      sw = true;
   }
}

// 화면 클릭시 자동 정지 함수

// mousedown
function screenPlay() {
   const currentDot = slideDots.querySelector(`.${on}`);
   const pauseDot = slideDots.querySelector(`.${pause}`);
   if(!playOnOff) {
      currentDot.classList.add(pause);
      sw = false;
   } else {
      btn_play.classList.remove(pause);
      pauseDot.classList.remove(pause);
      sw = true;
      playOnOff = 0;
   }
}

// mouseup
function screenPause(e) {
   e.preventDefault();
   const pauseOn = auto_play.querySelector(`.${pause}`);
   const currentDot = slideDots.querySelector(`.${on}`);
   if(!pauseOn){
      btn_play.classList.add(pause);
      currentDot.classList.add(pause);
      playOnOff = 1;
   } 
   sw = false;
}


// 마우스 클릭 넘기기
let firstX, secondX
;
// 마우스 최초 좌표값
function mouseFirst(e) {
   firstX = e.clientX; 
   // console.log(firstX);
   mainSlide.addEventListener("mousemove",mouseMoving);
}
// 마우스 이동 값
function mouseMoving(e) {
   secondX =  e.clientX ;
   // console.log(secondX);
}
// 마우스 슬라이더 넘기기 실행 함수
function touchedMove() {
   let Xpoint = firstX - secondX
   // console.log(Xpoint);
   if(Xpoint >= 150 || Xpoint <= -150) {
      if (Xpoint >= 150) {
         slideNext();
      } else if(Xpoint <= -150){
         slidePrev();
      }
   }
}


// 실행 함수
function init() {
   slideNext();
   btn_next.addEventListener("click", slideNext);
   btn_prev.addEventListener("click", slidePrev);
   countSlide();
   slidePlay();
   slideDotsNum();
   btn_play.addEventListener("click",click_btnPlay);
   btn_play.addEventListener("click",slidePlay);
   mainSlide.addEventListener("mousedown",screenPause);
   mainSlide.addEventListener("mousedown",slidePlay);
   mainSlide.addEventListener("mouseup",screenPlay);
   mainSlide.addEventListener("mouseup",slidePlay);
   mainSlide.addEventListener("mousedown",mouseFirst);
   mainSlide.addEventListener("mouseup",touchedMove);
}

init();
