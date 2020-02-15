import React, { useState } from 'react';

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        const {
            target: {value}
        } = e;
        setValue(value);
    };

    return { value, onChange};
}


function Connect() {
    const name = useInput("")
    console.log(name);
    return (
        <section className="connect" >
            <input {...name} placeholder="whats your name" />
        </section>
    )
}




export default Connect; 