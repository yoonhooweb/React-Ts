import { useState } from "react";

function UseInput(initalValue = "") {
    const [value, setValue] = useState(initalValue);
    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        handleValue,
    };
}

export default UseInput;
