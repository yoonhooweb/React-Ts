import { useRef } from "react";

function UseRefStyle() {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleForm = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        console.log(e.target);
        console.log(inputRef.current?.value);
    };

    return (
        <>
            <form action='' onSubmit={handleForm}>
                <input type='text' ref={inputRef} />
                <button type='submit'>버튼</button>
            </form>
        </>
    );
}

export default UseRefStyle;
