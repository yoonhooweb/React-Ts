import React, { useState } from "react";
import ChildA from "./ChildA";

function Count() {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    };
    return (
        <div>
            {count}
            <button onClick={plus}>증가</button>
            <ChildA />
        </div>
    );
}

export default Count;
