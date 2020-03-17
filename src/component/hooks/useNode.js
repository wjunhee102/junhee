import { useState,  useCallback } from 'react';



function useNode() {
    const [ ele , setEle ] = useState(0);
    const [ width, setWidth] = useState(0);
    const [ height, setHeight ] = useState(0); 

    const nodeGet = useCallback( node =>{
        if (node !== null) {
            setEle(node);
            setWidth(node.getBoundingClientRect().width);
            setHeight(node.getBoundingClientRect().height);
            window.addEventListener('resize',()=>{
                setWidth(node.getBoundingClientRect().width);
                setHeight(node.getBoundingClientRect().height);
            })
        }},[]);
    return { ele , nodeGet, width, height }
}

export default useNode ;