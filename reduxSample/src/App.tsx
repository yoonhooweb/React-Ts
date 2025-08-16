import Count from "./components/Count";
import CountOutside from "./components/CountOutside";
import Theme from "./components/Theme";
import ThemeButton from "./components/ThemeButton";

export default function App() {
    return (
        <>
            <Count />
            <CountOutside />
            <Theme></Theme>
            <ThemeButton></ThemeButton>
        </>
    );
}
