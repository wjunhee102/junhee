import { useState, useEffect } from 'react';
import axios from 'axios';


function useCallDate( url ) {
    const [ data, setData ] = useState([]);
    const [ error, setError] = useState("");
    const [ isLoading, setLoading ] = useState(true);

    const callUrl = async() => {
        try {
            const { data } = await axios.get(url);
            setData(data)
        } catch {
            setError("데이터가 없습니다.")
            console.log("error");
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        callUrl();
    },[])

    return ( { data, error, isLoading, callUrl } );
}

export default useCallDate;