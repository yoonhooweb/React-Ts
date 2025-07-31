import { useCounter } from "../../context/counter/useCounter";

export default function CountOutside() {
    const { count } = useCounter();
    return (
        <>
            <h1>CountOutside: {count}</h1>
        </>
    );
}
