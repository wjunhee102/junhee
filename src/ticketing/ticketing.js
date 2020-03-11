import React, { useState, useEffect } from'react';
import PropTypes from "prop-types";
import axios from 'axios';
import './css/ticketing.css';

function MaskStore({name, addr, idx, type, stat}) {
    return (
        <article className={`${idx} type${type} ${stat}`}>
            <h2>{name}</h2>
            <h3>{addr}</h3>
        </article>
    )
}

function Ticketing() {
    const [ mask, setMast ] = useState([]);
    const [ error, setError] = useState("");
    const [ isLoading, setLoading ] = useState(true);
    const callUrl = async() => {
        try {
            const { data : { stores } } = await axios.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%9D%98%EC%A0%95%EB%B6%80%EC%8B%9C");
            setMast(stores)
        } catch {
            setError("데이터가 없습니다.")
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        callUrl();
    },[])

    return (
        <div className="ticketing">
            <div className="inner">
                { isLoading ? (
                    <div>Loading...</div>
                ):(mask.map((ele, idx)=>(
                    <MaskStore 
                    name={ele.name}
                    addr={ele.addr}
                    idx={idx}
                    key={idx}
                    stat={ele.remain_stat}
                    type={ele.type}
                    />
                ))) }
            </div>
        </div>
    )
}

export default Ticketing;