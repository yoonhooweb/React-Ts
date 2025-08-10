import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function CountDisplay() {
    const count = useSelector((state: RootState) => state.counter.count);
    return (
        <>
            <h1>Count: {count}</h1>
        </>
    );
}
