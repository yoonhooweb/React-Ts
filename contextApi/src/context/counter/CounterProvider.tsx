import { useMemo, useReducer, useState } from "react";
import { CounterContext, CounterContextAction } from "./CounterContext";
import countReducer from "../../reducer/countReducer";

export default function CounterProvider({ children }: { children: React.ReactNode }) {
    /* const [count, setCount] = useState(0); */
    const [count, countDispatch] = useReducer(countReducer, 0);

    /* const plus = () => {
        setCount((prev) => prev + 1);
    };
    const minus = () => {
        if (count <= 0) {
            setCount(0);
        } else {
            setCount((prev) => prev - 1);
        }
    };
    const reset = () => {
        setCount(0);
    };
 */
    /* const memoiztion = useMemo(() => ({ plus, minus, reset }), []); */

    return (
        <>
            {/* <CounterContextAction value={memoiztion}> */}
            <CounterContextAction value={{ countDispatch }}>
                <CounterContext value={{ count }}>{children}</CounterContext>
            </CounterContextAction>
        </>
    );
}
