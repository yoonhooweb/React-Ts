import Count from "./components/count/Count";
import CountOutside from "./components/count/CountOutside";
import Theme from "./components/theme/Theme";
import ThemeButton from "./components/theme/ThemeButton";
import CounterProvider from "./context/counter/CounterProvider";
import ThemeProvider from "./context/theme/ThemeProvider";

export default function App() {
    return (
        <>
            <CounterProvider>
                <ThemeProvider>
                    <Count />
                    <CountOutside />
                    <Theme></Theme>
                    <ThemeButton></ThemeButton>
                </ThemeProvider>
            </CounterProvider>
        </>
    );
}
