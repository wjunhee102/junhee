import React from 'react';
import './css/connect.css';


// function useInput(defaultValue) {
//     const [value, setValue] = useState(defaultValue);

//     const onChange = e => {
//         const {
//             target: { value }
//         } = e;
//         setValue(value);
//     };

//     return { value, onChange };
// }

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


 
// function Connect() {
//     const name = useInput("")
//     return (
//         <section className="connect">
//             <h1>use Hooks</h1>
//             <br />
//             <input {...name} placeholder="whats your name" />
//             <input value={name.value} onChange={name.onChange} placeholder="whats your name" />
//             <h4>{name.value}</h4>
//             <br />
//         </section>
//     )
// }

const connect_info = {
    name : "황준희",
    phone : "010-9878-8227",
    email : "wjunhee102@naver.com",
    cv : ""
}

function Connect() {
    return (
        <>
        <section className="connect">
            <div className="inner">
                <h2 className="name">{connect_info.name}</h2>
                <p className="phone">{connect_info.phone}</p>
                <p className="email">{connect_info.email}</p>
            </div>
        </section>
        <footer id="footer">
            <div className="inner">
                <p className="copy">&#169;황준희</p>
            </div>
        </footer>
        </>
    )
}




export default Connect; 