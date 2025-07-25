import { useState } from "react";
import Count from "./Count";

function App() {
    const [isModal, setIsModal] = useState(false);

    const handleModal = () => {
        setIsModal((prev) => !prev);
    };

    return (
        <>
            <button onClick={handleModal}>화면변환</button>
            {isModal ? <Count /> : null}
        </>
    );
}

export default App;
