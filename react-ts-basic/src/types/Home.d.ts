type HomeProps = {
    name: string,
    age: number,
    numberValue: number,
    stringValue: string,
    booleanValue: true | false,
    array: number[] | string[];
    object: { name: string, age: number },
    handleClick: () => void
}