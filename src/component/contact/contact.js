import React from 'react';
import './css/contact.css';


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

const contact_info = {
    name : "황준희",
    phone : "010-9878-8227",
    email : "wjunhee102@naver.com",
    cv : ""
}

function Contact() {
    return (
        <>
        <section className="contact">
            <div className="inner">
                <p className="closing">
                    <span>...</span>
                    
                    <br /> 포트폴리오를 봐주셔서 감사합니다.
                    <br /> 
                
                </p>
                <div className="contact_info">
                    <p className="phone">{contact_info.phone}</p>
                    <p className="email">{contact_info.email}</p>
                    <a className="link" href="https://github.com/wjunhee102/junhee" target="_blink">소스코드 주소 &#62;</a>
                </div>
            </div>
        </section>
        <footer id="footer">
            <div className="inner">
                <p className="copy">&#169;Copyright 2020 황준희.</p>
            </div>
        </footer>
        </>
    )
}




export default Contact; 