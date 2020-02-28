import { useState, useRef, useEffect} from 'react'



function useFadeAnimate(P_offsetY) {

    const [START_PONIT, setS_POINT] = useState(P_offsetY);
    const [NODE_OP, setNODE_OP] = useState(0);
    
    const NODE = useRef(null);
    const moving_NODE = useRef(null);


    function fadeAnimation() {
        const DISTANCE = NODE.current.getBoundingClientRect().height;
        const END_POINT = START_PONIT + DISTANCE

        let pY = window.pageYOffset;

        if (pY < START_PONIT && pY > END_POINT) return false
        
        const START_SECTION = START_PONIT + DISTANCE/2 ;
        const MIDDLE_SECTION = START_PONIT + (DISTANCE/10)*2;
        
        let op = NODE_OP;
        let time = null;
        function animate(timestamp) {
            if(!time) time = timestamp
            let progress = timestamp - time
            let start = START_PONIT + pY;
            let end;
            let increase;
            let final;

            if (pY <= START_SECTION) {
                end = START_SECTION;
                increase = (DISTANCE/2)/100000;
                final = 1;
            } else if (pY > START_PONIT && pY < MIDDLE_SECTION) {
                end = MIDDLE_SECTION;
                increase = 0;
                final = 1;
            } else {
                end = END_POINT;
                increase = -(DISTANCE - 3*DISTANCE/10)/100;
                final = 0;
            }
            let distance = Math.abs(start - end);

            op += increase

            moving_NODE.current.style.opacity = op;

            if(progress < distance) {
                requestAnimationFrame(animate);
            } else {
                moving_NODE.current.style.opacity = final;
                setNODE_OP(final);
            }
        }     
        window.requestAnimationFrame(animate);
    }

    useEffect(()=>{
        window.addEventListener("scroll" , fadeAnimation, true);
        console.log(START_PONIT, window.pageYOffset);
        return ()=> window.removeEventListener("scroll" , fadeAnimation, true)
    },[NODE_OP])
    
    
    return { moving_NODE, NODE }
}


export default useFadeAnimate;