export default function CountButton({
    handleIncrement,
    handleDecrement,
    handleReset,
}: {
    handleIncrement: () => void;
    handleDecrement: () => void;
    handleReset: () => void;
}) {
    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <button onClickCapture={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>reset</button>
        </>
    );
}




