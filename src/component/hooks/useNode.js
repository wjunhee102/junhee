import React, { useState,  useCallback} from 'react';



function useNode() {
    const [ ele , setEle ] = useState(0);
    const [ width, setWidth] = useState(0);

    const nodeGet = useCallback( node =>{
        if (node !== null) {
            setEle(node);
            setWidth(node.getBoundingClientRect().width);
            window.addEventListener('resize',()=>{
                setWidth(node.getBoundingClientRect().width);
            })
        }},[]);
    
    return { ele , nodeGet, width }
}

export default useNode ;