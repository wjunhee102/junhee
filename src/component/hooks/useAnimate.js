import { useState, useRef, useEffect} from 'react'


function useAnimate() {
    const [width, setWi] = useState(0);
    const bbbb = useRef(null);
    function aaaaa() {
        setWi(bbbb.current.getBoundingClientRect().width)
    }
    useEffect(()=>{
        aaaaa();
    },[bbbb])
    
    
    return { width, bbbb }
}


export default useAnimate;