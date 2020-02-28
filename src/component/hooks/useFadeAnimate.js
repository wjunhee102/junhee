import { useState, useRef, useEffect } from 'react'



function useFadeAnimate(P_offsetY) {

    const START_PONIT = P_offsetY;
    
    const NODE = useRef(null);
    const moving_NODE = useRef(null);

    let op_value = 0;
    function fadeAnimation() {

        const DISTANCE = NODE.current.getBoundingClientRect().height;
        const END_POINT = START_PONIT + DISTANCE

        let pY = window.pageYOffset;

        if (pY < START_PONIT || pY > END_POINT) {

            return false
        } else {

        const START_SECTION = DISTANCE/2 ;
        const MIDDLE_SECTION = START_SECTION;
        
        let start = pY - START_PONIT;

        function animate() {
            let end;
            let increase;
            let final;
            let distance ;
            

            if (start <= START_SECTION) {
                op_value = (pY - START_PONIT)/START_SECTION
                end = START_SECTION;
                increase = START_SECTION/(START_SECTION*2.5);
                final = 1;
                distance = Math.abs((end-start))/5
            }  else {
                end = DISTANCE*0.7;
                op_value = (END_POINT - pY)/200
                increase = -(end - 3*DISTANCE/10)/(DISTANCE+START_SECTION);
                final = 0;
                distance = Math.abs((end-start))
                start = DISTANCE-start
            }
       
            op_value += increase

            moving_NODE.current.style.opacity = op_value;
            console.log(distance, start , end , op_value)
       
            if(Math.abs(op_value) <= distance/1000) {
                requestAnimationFrame(animate);
            } else {
                // if(start <= START_PONIT || start >= END_POINT) {
                //     final = 0;
                //     op_value = 0;
                // } else if(start >= START_SECTION && start <= MIDDLE_SECTION){
                //     final = 1;
                //     op_value = 1;
                // } else {
                //     final = op_value;
                // }
                // moving_NODE.current.style.opacity = final;

            } 

        }
        
        window.requestAnimationFrame(animate);
        }     
       
    }

    useEffect(()=>{
        window.addEventListener("scroll" , fadeAnimation, true);
        return ()=> window.removeEventListener("scroll" , fadeAnimation, true)
    },[])
    
    
    return { moving_NODE, NODE }
}


export default useFadeAnimate;