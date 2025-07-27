import Count from "./lazy/Count";
/* import Count from "./useEffect/Count"; */

function App() {
    /* const [isModal, setIsModal] = useState(false);

    const handleModal = () => {
        setIsModal((prev) => !prev);
    };

    return (
        <>
            <button onClick={handleModal}>화면변환</button>
            {isModal ? <Count /> : null}
        </>
    ); */

    return (
        <>
            <Count />
        </>
    );
}

export default App;
