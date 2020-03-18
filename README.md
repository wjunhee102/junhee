# 안녕하세요 신입 개발자 황준희 포트폴리오 사이트입니다.

이 사이트는 스크롤링을 이용하여 자연스럽게 내용을 읽히게 하려고 노력했습니다. 
그래서 전반적으로 **scroll**위치에 따라 작동하는 애니메이션을 주로 활용하였습니다.

홈페이지는 

1. intro(간단 자기 소개)
2. skill(활용 가능 기술 소개)
3. web(웹 포트폴리오)
4. connect(연락처)

그리고 섹션간 이동을 할 수 있는 **header(gnb)**으로 구성되어 있습니다.

그리고 목차의 구성에 따라 컴포넌트를 분리하였습니다.



## 주요사항

#### header-gnb는 최대한 보는 사람이 답답하지 않을 수 있도록 제작하였습니다.

 이 홈페이지에 gnb메뉴를 누르면 이름에 해당하는 섹션으로 이동할 수 있습니다. scrollTop을 이용하여 이동을 하는데, 단순히 그 위치에 이동을 하면 툭툭 끊기는 느낌이 나서 애니메이션을 효과를 이용하였습니다. 

```
function moveSection(x) {  
        let 
            scrollY = window.pageYOffset,
            i = secH[x],
            start = i - scrollY,
            startTime = null
            ;
		// moveSection 재생
			moveStart = true


        //가속도 
        function easeOut (t, b, c, d) {
            return c * ( -Math.pow( 2, -12 * t/d ) + 1 ) + b;
        };

        //animate
        function animate(timestamp) {
            
            if(!startTime) startTime = timestamp
            let progress = timestamp - startTime
            let moving = easeOut(progress, scrollY, start, 2500)

            window.scrollTo(0, moving);
            if (moveStart) {
                if (progress < 2500) {
                    requestAnimationFrame(animate);
                } else {
                    window.scrollTo(0, i);
                }
            }
            
        }
        window.requestAnimationFrame(animate);
    }
```

단순히 일정 속도로만 움직이면 단조로워서 가속도 함수를 이용하여 조금은 다이나믹하고 부드럽게 움직이게 하였습니다.

 모바일에서는 조금 더 사용자 경험을 고려해서 만들었습니다. 보통 모바일에서는 웹을 한손으로 
핸드폰을 파지하여 엄지로 스크롤을 하여 봅니다. 그래서 단순히 접었다 폈다하는 토글 메뉴로는 본래 gnb 목적인 편하게 항목을 이동하는 것을 해친다 생각하여 조금 몇가지 기능을 추가 했습니다.

 먼저 모바일에서 보면 gnb의 위치가 오른쪽 하단에 위치합니다. 그래서 오른쪽 엄지로 쉽게 
누를 수 있게 하였습니다. 그리고 동그란 gnb를 터치하면 접혀있던 gnb에서 길게 확장 됩니다.
그리고 로고가 touch down이 되 있는 손가락을 따라 움직입니다. 그리고 멈춘 위치의 좌표를 계산해서 math.round로 반올림 하여 해당 위치의 섹션으로 이동하도록 제작했습니다.
```
const BTN_ACTION = (e)=>{
        e.preventDefault();
        const touch = e.changedTouches[0];
        firstTouchY = touch.clientY;
        M_GNB.current.style.height = `230px`;
        GNB.current.style.opacity = 1;
        TOUCH_ON = true;
    }
const BTN_MOVE = (e)=> {
        if(!TOUCH_ON) return false; 
        e.preventDefault();
        const touch = e.changedTouches[0];
        touchMove = touch.clientY;
        position =  POINT(firstTouchY, touchMove);
        BTN_GNB.current.style.transform = `translateY(${-position}px)`;
    }
const BTN_END = ()=> {
        TOUCH_ON = false;
        if(position > 51 ) {
            let i = 4 - Math.round((position - 51)/44);
            moveS(i);
        } 
        BTN_GNB.current.style.transform = `translateY(${0}px)`;
        M_GNB.current.style.height = `0px`;
        GNB.current.style.opacity = 0.7;
    } 
```


#### 인트로는 간단한 인사말과 저의 대한 소개를 간략하게 핵심만 읽고 넘어 갈 수 있게 제작했습니다. 

 그래서 scroll위치에서 트리커처럼 animation이 실행하는 트리거를 활용하는 것 뿐만 아니라 스크롤 이동이 동영상의
 keyFrame처럼 scroll을 할때마다 실행하게 되어 있습니다.
 
 ```   
    if(startContent <= scroll_y) {
            opac = (scroll_y-startContent)/1000
            if(scroll_y <= startContent+1000) {
                contentBox.current.style.opacity = opac;
                setVOn('off')
            } else {
                contentBox.current.style.opacity = 1;
                setVOn('on')
            }
        } else {
            contentBox.current.style.opacity = 0;
            setVOn('off')
        }
    

    if( CoverStart <= scroll_y && scroll_y <= CoverStart + innerH + mainH){
            
            keyframe = Math.round((scroll_y - CoverStart)/(innerH /65))
            lateX = scroll_y - CoverStart
            
            if(scroll_y <= CoverStart + innerH ) {
                
                coverEle.current.style.transform = `translate(${-lateX}px, 0)`;
                setMainI(2);
                setF(keyframe);
                setCOn(1);
            } else {
                coverEle.current.style.transform = `translate(${-innerH}px,0)`;
                setMainI(2);
                setF(65);
                setCOn(2);
            } 

        } else {
            if(scroll_y < CoverStart ) {
                coverEle.current.style.transform = `translate(0, ${0}px)`;
                setF(0)
                setMainI(0)
                setCOn(1);
            } else if (scroll_y > CoverStart + innerH + mainH) {
                setCOn(2);
            } 
        }
 ```

첫 인사말 부분에서는 몰입이 될 수 있도록 어두운 배경에 흰글씨로 글씨가 돋보이게 할 수 있게 했습니다. 
그리고 임팩트를 주기위해 어두운 배경에서 흰배경으로 자연스럽게 넘어가면서 제 사진이 나올 수 있게 했습니다.

이미지의 경우 화면 크기에 따라 맞추기 위해서 스크립트로 inner 사이즈에 따라 변할 수 있도록 하였습니다.
 
 ```
 let width = innerWidth
        if(width > 1024) {
            mainImage.current.style.width =  `1024px`
            width = 1024
        } else {
            mainImage.current.style.width =  `${width}px`
        }

        let height = Math.round(width*0.9)
        mainImage.current.style.height = `${height}px`

 ```

## 문제점

 처음 리액트를 사용해서 만드는 사이트여서 그런지 생각보다 여러 문제가 발생 했습니다. 저는 
react hooks을 사용하여 만들었는데, 아직 이해가 되지 않는 부분이 많습니다.
 생애주기에 대해 제대로 이해를 하지 못하고 있어서 퍼포먼스가 저하되는 부분이 많습니다. 그래서 계속 공부하고 있고 현업에서 일하는 선배들에게 많이 배우고 싶습니다.

 작성중입니다....

<!-- #### useState
 처음에는 css값을 바꿔줄 때 바뀐 값을 state에 저장하여 그 값을 적용하고 업데이트 하는 
식으로 하였습니다. 하지만 그렇게 만드니까 웹이 굉장히 느렸습니다. 다른 이유 때문에 느렸을 수 도 있지만, 별로 좋은 방법이 아닌 생각이 들었습니다. 그리고 Mouse Move 좌표값에 따라 움직여주질 않았습니다. 그래서 다음 방법으로 바꿨습니다.

#### useCallback
 그 다음에 시도했던 방법은 useCallback으로 기존의 자바스크립트 처럼 도큐멘트를 불러와서 
스타일을 적용하는 방식으로 했습니다. 이 또한 하다보니 작업에 부하가 많이 걸리는 것 같아서 다른 방법을 찾아보았습니다.

#### useRef, useEffect 
 class를 이용한  -->