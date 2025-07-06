type checkboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
    type?: "checkbox";
    parentClassName: string;
};
function Checkbox(props: checkboxProps) {
    const { parentClassName, children, ...rest } = props;
    return (
        <div className={parentClassName}>
            <input {...rest} />
            <label>{children}</label>
        </div>
    );
}

export default Checkbox;
