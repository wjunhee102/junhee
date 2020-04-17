/*global kakao*/
import React, { useEffect, useRef } from "react";


const { kakao } = window;

function KakaoMap() {
    
    // useEffect(()=>{
        
    //     kakao.maps.load(()=>{
            
    //         const container = document.getElementById("map");
    //         const options = {
    //             center : new kakao.maps.LatLng(33.450701, 126.570667),
    //             level: 5
    //         }
    //         const map = new kakao.maps.Map(container, options)
    //     },[kakao.maps]);

    // });

    // useEffect(() => { 
    //     const container = document.getElementById('map'); 
    //     const options = { center: new kakao.maps.LatLng(33.450701, 126.570667), level: 3 }; 
    //     const map = new kakao.maps.Map(container, options); 
    // }, []);


    useEffect(() => {
        console.log(kakao)
        kakao.maps.load(() => {
            let el = document.getElementById('map');
            let map = new kakao.maps.Map(el, {
                center: new kakao.maps.Coords(523951.25, 1085073.75)
            })
        })

    }, [kakao.maps]);
    

    return(
        <div className="kakao">
            <div id="map"  style={{width:'500px',height:'400px'}}></div>
        </div>
    )
}


export default KakaoMap;
