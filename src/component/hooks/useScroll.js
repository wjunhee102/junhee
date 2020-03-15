import { useState, useEffect } from'react';


const useScroll = () => {
    const [ state, setState ] = useState({
        scrollY : 0
    });

    const scrollEvent = () => {
        setState({scrollY : window.pageYOffset});
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", scrollEvent);
        return ()=> window.removeEventListener("scroll", scrollEvent);
    },[]);

    return state;
}

export default useScroll;