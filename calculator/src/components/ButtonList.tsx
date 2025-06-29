
function ButtonList({
    value,
    className,
    onClick,
}: ButtonConfigs) {
    return <input type="button" value={value} className={className} onClick={onClick}/>;
}

export default ButtonList;
