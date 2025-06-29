import { useState } from "react";

type formType = {
    id: string;
    pw: number;
    checkbox: boolean;
    email: string;
    address: string | number;
};

function Input() {
    const [input, setInput] = useState("");
    const [forms, setForms] = useState<formType>({
        id: "",
        pw: 123,
        checkbox: false,
        email: "",
        address: "",
    });

    const handleInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleInputData2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForms({
            ...forms,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>input 한개 제어</h1>
            <input type="text" value={input} onChange={ handleInputData }/>
            
            <h1>Input 여러개 제어 : {[
                    forms.id,
                    forms.pw,
                    forms.address,
                    forms.email,
                    forms.checkbox
                    ]
                } </h1>
            <input
                type="text"
                name="id"
                value={forms.id}
                onChange={handleInputData2}
            />
            <input
                type="password"
                name="pw"
                value={forms.pw}
                onChange={handleInputData2}
            />
            <input
                type="text"
                name="email"
                value={forms.email}
                onChange={handleInputData2}
            />
            <input
                type="text"
                name="address"
                value={forms.address}
                onChange={handleInputData2}
            />
        </div>
    );
}

export default Input;
