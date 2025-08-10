import { useDispatch } from "react-redux";
import { minus } from "../features/counter/counterSlice";

export default function CountButton() {
    const dispatch = useDispatch();
    return (
        <>
            {/* 타입의 속성으로는 사용할 slice에 name 값을 사용 */}
            <button
                onClick={() => {
                    dispatch(minus());
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
                    dispatch({ type: "counterSlice/plus" });
                }}
            >
                증가
            </button>
        </>
    );
}
