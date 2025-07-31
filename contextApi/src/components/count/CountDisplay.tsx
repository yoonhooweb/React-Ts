import { useCounter } from "../../context/counter/useCounter";

export default function CountDisplay() {
    const { count } = useCounter();

    return (
        <>
            <h1>Count: {count}</h1>
        </>
    );
}
