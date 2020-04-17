import { useState, useRef, useEffect } from 'react';

function useHeight() {
    const [height, setHeight] = useState(0);
    const value = useRef();
    const aaa = window.outerHeight

    useEffect(()=>{
        if(value) {
            const { current } = value;
            setHeight(current.getBoundingClientRect().height);
        }
    },[aaa])

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setHeight(value.current.getBoundingClientRect().height);
        })
        return()=> window.removeEventListener('resize',()=>{
            setHeight(value.current.getBoundingClientRect().height);
        })
    },[])

    return { height, value }
}

export default useHeight;