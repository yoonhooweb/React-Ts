type ButtonProps = React.ComponentPropsWithoutRef<"button">;

function Button(props: ButtonProps) {
    const { children, ...rest } = props;
    return (
        <>
            <button {...rest}>{children}</button>
        </>
    );
}

export default Button;
