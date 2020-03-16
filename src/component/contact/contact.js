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
                    <span>마치며...</span>
                    이 포트폴리오 사이트는 React로 만들었습니다.
                    <br />포트폴리오 만들기 시작했을 때 리액트에 관련된 동영상을 보았었고 왠지 저도 만들 수 있을것 같았습니다. 
                    <br />하지만 생각보다 어려웠습니다. 
                    <br />특히 Hooks이 어떻게 동작하는 아직도 이걸 완성한 지금도 잘 모르겠습니다.
                    <br />저의 부족함을 많이 느꼈습니다.  그래서 저는 더욱 배우고 싶어졌습니다.  선배 개발자들은 어떻게 자바스크립트를 다루고 어떻게 웹을 만드는지 배우고 싶습니다. 그리고 현업에서는 어떻게 리액트를 사용하는지 배우고 싶습니다.  
                </p>
                <div className="contact_info">
                    <h2 className="name">{contact_info.name}</h2>
                    <p className="phone">{contact_info.phone}</p>
                    <p className="email">{contact_info.email}</p>
                </div>
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




export default Contact; 