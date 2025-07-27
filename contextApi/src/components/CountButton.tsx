import { useCounterAction } from "../context/counter/useCounter";

export default function CountButton() {
    const { plus, minus, reset } = useCounterAction();
    console.log("button reRender");
    return (
        <>
            <button onClick={minus}>감소</button>
            <button onClick={reset}>리셋</button>
            <button onClick={plus}>증가</button>
        </>
    );
}
