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

## 1. 인트로

 #### 인트로는 간단한 인사말과 저의 대한 소개를 간략하게 핵심만 읽고 넘어 갈 수 있게 제작했습니다. 
 그래서 scroll위치에서 트리커처럼 animation이 실행하는 트리거를 활용하는 것 뿐만 아니라 스크롤 이동이 동영상의
 keyFrame처럼 scroll을 할때마다 실행하게 되어 있습니다.
 
 ```    if(startContent <= scroll_y) {
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

## 2. 스킬





하지만 처음 리액트를 사용해서 만드는 사이트여서 그런지 생각보다 여러 문제가 발생 했습니다. 
주로 가장 큰 문제는 퍼포먼스가 많이 떨어지는 것입니다. 

