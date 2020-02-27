import { useState, useCallback } from 'react';

function useHeight() {
    const [height, setHeight] = useState(0);

    const value = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
            window.addEventListener('resize',()=>{
                setHeight(node.getBoundingClientRect().height);
            })
        }},[]);
    
    return { height , value }
}

export default useHeight;