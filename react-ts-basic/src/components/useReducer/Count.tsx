import { useReducer } from "react";

type Action = 
 | {type : 'plus'}
 | 

export default function Count() {
    const countPlus = (
        count: number,
        action: actionType,
    ) => {
        switch (action.type) {
            case "plus":
                return count + 1;
            case "minus":
                return count - 1;
            case "reset":
                return 0;
            case "payload":
                return action.payload;
            default:
                return 0;
        }
    };

    const [count, dispatch] = useReducer(countPlus, 0);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "plus"})}>
                증가
            </button>
            <button onClick={() => dispatch({ type: "minus" })}>감소</button>
            <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
            <button onClick={() => dispatch({ type: "payload" , payload: 20 } )}>20으로변경</button>
        </>
    );
}
