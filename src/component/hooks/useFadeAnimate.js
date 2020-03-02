import { useState, useRef, useEffect } from 'react'



function useFadeAnimate() {
    const [ NODE_OPACITY, setOPACITY] = useState(0);
    
    let START = 0;
    const PARENT = useRef(null);
    const NODE = useRef(null);

    let op_value = 0;
    function fadeAnimation() {
        const DISTANCE = PARENT.current.getBoundingClientRect().height;
        const START_PONIT = START - DISTANCE/2;
        const END_POINT = START + DISTANCE/2;

        let pY = window.pageYOffset;

        if (pY < START_PONIT || pY > END_POINT) {
            return false
        } else {

        const START_SECTION = DISTANCE/2;
        

        function animate() {
            let start = NODE_OPACITY

            op_value = NODE_OPACITY;
            let end = pY - START_PONIT;
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
                op_value = (END_POINT - pY)*0.2
                increase = -(end - 3*DISTANCE/10)/(DISTANCE+START_SECTION);
                final = 0;
                distance = Math.abs((end-start))
                start = DISTANCE-start
            }
       
            op_value += increase

            NODE.current.style.opacity = op_value;
            // console.log(distance, start , end , op_value)
       
            if(Math.abs(op_value) <= distance/1000) {
                requestAnimationFrame(animate);
            } else {
                if (pY < START_PONIT || pY > END_POINT) {
                    op_value = 0;
                }
                if(op_value >= 1) {
                    op_value = 1
                } else if(op_value <= 0){
                    op_value = 0
                }
                setOPACITY(op_value);
            } 

        }
        // console.log(NODE_OPACITY, START)
        window.requestAnimationFrame(animate);
        }     
       
    }

    useEffect(()=>{
        window.addEventListener("scroll" , fadeAnimation, true);
        return ()=> window.removeEventListener("scroll" , fadeAnimation, true)
    },[NODE_OPACITY])
    
    
    return { node : NODE, 
             parent : PARENT,
             start : START }
}


export default useFadeAnimate;