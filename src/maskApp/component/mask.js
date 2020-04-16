import React, { useState, useEffect } from'react';
import MaskStore from "./maskStore";
import "./css/mask.css";
import { address } from '../link/address';
import useCallDate from '../hook/useCallDate';

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

function SelectButton({value, num, name, text}) {
    console.log(value)
    return(
        <button 
        onClick={value(num)}
        type="button" className={`btn_gnb ${name}`}>
            <span className="blind">{text}</span>
        </button>
    )
}

const selectBtn = [
    {
        name : "plenty",
        text : "5단계",
        key : 4
    },
    {
        name : "some",
        text : "4단계",
        key : 3
    },
    {
        name : "few",
        text : "3단계",
        key : 2
    },
    {
        name : "empty",
        text : "4단계",
        key : 1
    },
    {
        name : "all",
        text : "5단계",
        key : 0
    }
]


function Mask() {
    const [ adrName, setAdrName] = useState(address["서울특별시 동대문구"]);
    const [ btnValue, setBValue ] = useState(0);
    const { data , error, isLoading, callUrl } = useCallDate(adrName);
    const aaa = useInput();
    const loadingStyle = {
        color : "#fff",
        position : 'absolute',
        left : '50%',
        top : '50%',
        transform : `translate(-50%, -50%)`
    }
    useEffect(()=> {
        document.title = '마스크 현황';
    })
    // function changeReign() {
    //     setAdrName();
    // }
    // console.log(aaa);
    useEffect(()=>{
        setAdrName(aaa.value)
        console.log(btnValue)
    },[adrName, aaa.value, btnValue])
    

    return (
        <div className="mask_wrap">
            <div className="inner">
                <header className="header">
                    <h1 className="logo">
                        <span className="blind">로고</span>
                    </h1>
                    <nav className="gnb">
                    <select name="adr" {...aaa}>
                        <option value={address["서울특별시 동대문구"]}>서울특별시 동대문구</option>
                        <option value={address["서울특별시 노원구"]}>서울특별시 노원구</option>
                        <option value={address["서울특별시 마포구"]}>서울특별시 마포구</option>
                        <option value={address["경기도 의정부시"]}>경기도 의정부시</option>
                    </select>
                    <button type="button"
                        onClick={()=>{ 
                            callUrl();
                        }}
                    >
                        확인
                    </button>
                </nav>
                {/* <div className="selectBtn">
                    {selectBtn.map((ele, idx)=>(
                        <SelectButton 
                            name={ele.name}
                            num={ele.key}
                            text={ele.text}
                            key={idx}
                            value={setBValue}
                        />
                    ))}
                </div> */}
                </header>
                
                { isLoading ? (
                    <div style={loadingStyle}>Loading...</div>
                ):(data.stores.map((ele, idx)=>(
                    <MaskStore 
                    name={ele.name}
                    addr={ele.addr}
                    idx={idx}
                    key={idx}
                    stat={!ele.remain_stat ? ("unknown") : (ele.remain_stat)}
                    type={ele.type}
                    toggle={btnValue}
                    />
                ))) }
            </div>
        </div>
    )
}

export default Mask;