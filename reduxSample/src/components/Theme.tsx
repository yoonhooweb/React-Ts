import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Theme() {
    const backTheme = useSelector((state: RootState) => state.theme.theme);
    return (
        <>
            <h1>현재테마 : {backTheme}</h1>
        </>
    );
}
