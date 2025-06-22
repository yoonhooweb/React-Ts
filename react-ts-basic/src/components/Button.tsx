export default function Button({
    message,
    children,
    handleClick2,
}: {
    message: string;
    children: React.ReactNode;
    handleClick2: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
    const handleClick = () => alert(message);

    return (
        <>
            <button onClick={handleClick}>{children}</button>
            <button onClick={handleClick2}>버튼 이벤트 알기</button>
        </>
    );
}
