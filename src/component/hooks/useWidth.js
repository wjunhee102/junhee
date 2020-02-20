import React, { useState, useCallback } from 'react';

function useWidth() {
    const [width, setWidth] = useState(0);
    const [ele, setEle] = useState(0);

    const value = useCallback(node => {
        if (node !== null) {
            setEle(node)
            setWidth(node.getBoundingClientRect().width);
            window.addEventListener('resize',()=>{
                setWidth(node.getBoundingClientRect().width);
            })
        }},[]);
    
    return { width , value, ele }
}

export default useWidth;