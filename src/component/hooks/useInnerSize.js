import { useState, useEffect } from 'react';

const useInnerSize = ()=> {
    const [ state,  setState ] = useState({
        innerWidth : 0,
        innerHeight : 0
    }) 

    const windowResizeEvent = ()=> {
        setState({
            innerWidth : window.innerWidth,
            innerHeight : window.innerHeight
        })
        console.log(window.innerWidth);
    }

    useEffect(()=> {
        windowResizeEvent();
    },[]);

    useEffect(()=> {
        window.addEventListener("resize" , windowResizeEvent);
        return ()=>  window.removeEventListener("resize" , windowResizeEvent);
    },[]);

    return state
}

export default useInnerSize