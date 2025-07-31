import { useCounterAction } from "../../context/counter/useCounter";

export default function CountButton() {
    /* const { plus, minus, reset } = useCounterAction(); */
    const { countDispatch } = useCounterAction();
    console.log("button reRender");
    return (
        <>
            <button onClick={() => countDispatch({ type: "minus" })}>감소</button>
            <button onClick={() => countDispatch({ type: "reset" })}>리셋</button>
            <button onClick={() => countDispatch({ type: "plus" })}>증가</button>
        </>
    );
}
