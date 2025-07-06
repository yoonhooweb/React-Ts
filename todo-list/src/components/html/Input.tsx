type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>["type"];

/* 이러면 모든 타입을 다 받아옴 Omit이란 : 특정 타입 제거 */
type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
    type: Exclude<ReactInputType, "radio" | "checkbox">;
};

function Input(props: InputProps) {
    const { ...rest } = props;
    return (
        <>
            <input {...rest} />
        </>
    );
}

export default Input;
