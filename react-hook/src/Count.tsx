import { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("처음 마운트 : " + count);

        return () => {
            console.log("컴포넌트 삭제 ?");
        };
    }, []);

    useEffect(() => {
        console.log("처음 마운트 : " + count);
    }, [count]);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount((prev) => prev + 1)}>카운트증가</button>
        </div>
    );
}

export default Count;
