import Count from "./components/Count";
import CountOutside from "./components/CountOutside";
import CounterProvider from "./context/counter/CounterProvider";

export default function App() {
    return (
        <>
            <CounterProvider>
                <Count />
                <CountOutside />
            </CounterProvider>
        </>
    );
}
