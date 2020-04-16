import React, { useState, useEffect } from'react';
import PropTypes from "prop-types";



function MaskStore({name, addr, idx, type, stat, toggle}) {
    const [ stock, setStuck ] = useState({
        text : "",
        stat : "",
        key : ""
    })
    function onOff(x, y) {
        if(x >= y) {
            return "on"
        }
        return "off"
    }


    function stockStat() {
        let x, y;
        switch(stat) {
            case "plenty" :
                x = "많아유~";
                y = "100개 이상";
                setStuck({text : x, stat : y , key : 4})
                break;
            case "some" : 
                x = "보통이슈.";
                y = "30개 이상 100개미만";
                setStuck({text : x, stat : y, key : 3})
                break;
            case "few" :
                x = "얼마 남지 않았어오!";
                y = "2개 이상 30개 미만";
                setStuck({text : x, stat : y, key : 2})
                break;
            case "empty" : 
                x = "없어유...";
                y = "1개 이하";
                setStuck({text : x, stat : y, key : 1})
                break;
            default :
            setStuck({text : "나도 모르겠슈!", stat : "", key : 0})
        }
    }

    useEffect(()=>{
        stockStat();
    },[stat, toggle])
    
    return (
        <article className={`store store${idx} type${type} ${stat} ${onOff(stock.key, toggle)}`}>
            <div className="box">
                <h2>{name}</h2>
                <h3>{addr}</h3>
                <div className="stat">
                    <p>{stock.text}</p>
                    <span>{stock.stat}</span>
                </div>
            </div>
        </article>
    )
}

MaskStore.propTypes = {
    name: PropTypes.string.isRequired,
    addr: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    stat: PropTypes.string.isRequired
}

export default MaskStore;