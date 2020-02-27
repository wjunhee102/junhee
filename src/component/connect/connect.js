import React, { useState} from 'react';


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

// function useFetch(url){
//     const [payload, setPayload] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     const callUrl = async() => {
//         try {
//             const { data } = await Axios.get(url);
//             setPayload(data);
//         } catch {
//             setError("놉");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(()=>{
//         callUrl();
//     },[])

//     return { payload, loading, error}
// }

// function createComponet(x, y) {
//     let ratio = x/y,
//         width = 150,
//         height = 150*ratio
//         ;
        
// }



function Connect() {
    const name = useInput("")
    return (
        <section className="connect">
            <h1>use Hooks</h1>
            <br />
            <input {...name} placeholder="whats your name" />
            <input value={name.value} onChange={name.onChange} placeholder="whats your name" />
            <h4>{name.value}</h4>
            <br />
        </section>
    )
}




export default Connect; 