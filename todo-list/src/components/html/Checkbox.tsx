import { useId } from "react";

type checkboxProps = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
    type?: "checkbox";
    parentClassName: string;
};
function Checkbox(props: checkboxProps) {
    const { parentClassName, children, ...rest } = props;
    const uuid = useId();
    return (
        <div className={parentClassName}>
            <input id={uuid} {...rest} />
            <label htmlFor={uuid}>{children}</label>
        </div>
    );
}

export default Checkbox;
