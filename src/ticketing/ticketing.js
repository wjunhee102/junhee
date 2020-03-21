import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import useCallData from '../hooks/useCallData';


function MovieList({cd,name, rank}) {
    return (
        <article className={`movie m${cd}`}>
            <h2>{name}</h2>
            <p className={`rank rank${rank}`}></p>
        </article>
    )
}

function Ticketing() {
    const [ apikey, setKey ] = useState("5075b061cad8c046fd3b006ec8600d2e");
    const [ date, setDate ] = useState(new Date);
    const Year = date.getFullYear();
    const Month = ()=>{
            if(date.getMonth() < 9) {
                return `0${date.getMonth()+1}`
            }
                return date.getMonth()+1
            } 
    const Day = ()=>{
            if(date.getDate() < 9) {
                return `0${date.getDate()}`
            }
                return date.getDate()
            } 
    const { data, error, isLoading, callUrl } = useCallData(`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${Year}${Month()}${Day()-1}`);
    const [ movieInfo , setMovieInfo ] = useState([]);



    useEffect(()=>{
        console.log(data.boxOfficeResult);
        console.log(new Date)
        console.log(`${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`);
    },[data])
    return (
        
        <div className="ticketing">
            {isLoading ? (
                <div>
                    Loading...
                </div>
            ):(
                !data.boxOfficeResult ? (
                    error
                ):(
                    data.boxOfficeResult.dailyBoxOfficeList.map(ele => (
                        <MovieList 
                            cd={ele.movieCd}
                            name={ele.movieNm}
                            rank={ele.rank}
                            key={ele.movieCd}
                        />
                    ))
                )
            )}
            
        </div>
    )
}

export default Ticketing;