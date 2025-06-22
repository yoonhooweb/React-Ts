import { useState } from "react";
import Count from "./Count";
import CountButton from "./CountButton";

export default function CountDisplay() {
    const [count , setCount] = useState<number>(0)

    const handleIncrement = () =>  {
        setCount(count => count + 1)
    }

    const handleDecrement = () => {
        setCount(count => count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <Count count = {count}/>
            <CountButton handleIncrement = {handleIncrement } handleDecrement = { handleDecrement } handleReset = { handleReset}/>
        </>
    );
}
