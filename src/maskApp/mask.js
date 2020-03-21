import React, { useState, useEffect } from'react';
import PropTypes from "prop-types";
import axios from 'axios';
import './css/mask.css';

function MaskStore({name, addr, idx, type, stat}) {
    return (
        <article className={`${idx} type${type} ${stat}`}>
            <h2>{name}</h2>
            <h3>{addr}</h3>
        </article>
    )
}

function Mask() {
    const [ mask, setMast ] = useState([]);
    const [ error, setError] = useState("");
    const [ isLoading, setLoading ] = useState(true);
    const url = "https://openapi.naver.com/v1/search/movie.json?X-Naver-Client-Id=zv2Bor_4oVRCOlTk1KwA?X-Naver-Client-Secret=bO_K7XzI8K"
    let options = {
        method: 'GET',
        // HOST: 'openapi.naver.com',
        url: "https://openapi.naver.com/v1/search/movie.json",
        headers : {
                "HOST": "openapi.naver.com",
                "Content-Type" : "plain/text",
                "X-Naver-Client-Id" : "zv2Bor_4oVRCOlTk1KwA",
                "X-Naver-Client-Secret" : "bO_K7XzI8K"
        },
        data : {
            query : 'starwars'
        }
    };

    const callUrl = async() => {
        try {
            const data  = await axios.get({
                method: 'GET',
                url: "https://openapi.naver.com/v1/search/movie.json",
                headers : {
                        "HOST": "openapi.naver.com",
                        "Content-Type" : "plain/text",
                        "X-Naver-Client-Id" : "{zv2Bor_4oVRCOlTk1KwA}",
                        "X-Naver-Client-Secret" : "{bO_K7XzI8K}"
                },
                data : {
                    query : 'starwars',
                    display : 10
                }});
            setMast(data)
            
        } catch {
            setError("데이터가 없습니다.")
        } finally {
            setLoading(false);
        }
    }
    callUrl();
    useEffect(()=>{
        console.log(mask)
    },[mask])

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

export default Mask;