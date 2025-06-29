import { useState } from "react";

const checkboxGroup = {
    group1 : false,
    group2 : false,
    group3 : false
}

function Checkbox() {

    const [oneCheck, setOneCheck] = useState(false);
    const [groupCheck, setGroupCheck] = useState(checkboxGroup)
    const handleOneCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOneCheck(e.target.checked);
    }

    const handleGroupCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGroupCheck(prev => ({
            ...prev,
            [e.target.name] : e.target.checked
        }))
    }

    return (
        <>
            <h1 style={{ borderTop: "5px solid #333", paddingTop: "20px" }}>
                Checkbox
            </h1>
            <div>
                <h1 style={{ borderTop: "1px solid #333", paddingTop: "20px" }}>
                    한개 선택만
                </h1>
                <input type="checkbox" name="" id="ch1" checked={oneCheck} onChange={e => handleOneCheck(e) }/>
                <label htmlFor="ch1">선택1{oneCheck ? "선택됨" : "선택안됨"}</label>
            </div>
            <h1 style={{ borderTop: "1px solid #333", paddingTop: "20px" }}>
                여러개 선택
            </h1>
            <div>
                <label htmlFor="group1">그룹1{groupCheck.group1 ? "선택됨" : "선택안됨"}</label>
                <input type="checkbox" name="group1" id="group1" checked= {groupCheck.group1} onChange={handleGroupCheckbox}/>
            </div>
            <div>
                <label htmlFor="group2">그룹2{groupCheck.group2 ? "선택됨" : "선택안됨"}</label>
                <input type="checkbox" name="group2" id="group2" checked= {groupCheck.group2} onChange={handleGroupCheckbox}/>
            </div>
            <div>
                <label htmlFor="group3">그룹3{groupCheck.group3 ? "선택됨" : "선택안됨"}</label>
                <input type="checkbox" name="group3" id="group3" checked= {groupCheck.group3} onChange={handleGroupCheckbox}/>
            </div>
        </>
    );
}

export default Checkbox;
