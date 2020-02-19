import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        const {
            target: { value }
        } = e;
        setValue(value);
    };

    return { value, onChange };
}

function useFetch(url){
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const callUrl = async() => {
        try {
            const { data } = await Axios.get(url);
            setPayload(data);
        } catch {
            setError("놉");
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        callUrl();
    },[])

    return { payload, loading, error}
}



function Connect() {
    const name = useInput("")
    const { payload, loading, error } = useFetch("https://aws.random.cat/meow")
    return (
        <section className="connect">
            <h1>use Hooks</h1>
            <br />
            <input {...name} placeholder="whats your name" />
            <input value={name.value} onChange={name.onChange} placeholder="whats your name" />
            <br />
            {loading && <span>loading your cat</span>}
            {!loading && error && <span>{error}</span>}
            {!loading && payload && <img src={payload.title} width="150"/>}
        </section>
    )
}




export default Connect; 