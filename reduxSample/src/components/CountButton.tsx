import { useDispatch } from "react-redux";
import { incrementAsync, minus, plus } from "../features/counter/counterSlice";
import { AppDispatch } from "../store/store";

export default function CountButton() {
    /* 비동기 에서 가지고올때 타입 정하는법 */
    const dispatch = useDispatch<AppDispatch>();
    return (
        <>
            {/* 타입의 속성으로는 사용할 slice에 name 값을 사용 */}
            <button
                onClick={() => {
                    dispatch(minus({ num: 5, num2: 3 }));
                }}
            >
                감소
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "counterSlice/reset" });
                }}
            >
                리셋
            </button>
            <button
                onClick={() => {
                    dispatch(plus(10));
                }}
            >
                증가
            </button>
            <button
                onClick={() => {
                    dispatch(incrementAsync(10));
                }}
            >
                비동기 증가
            </button>
        </>
    );
}
