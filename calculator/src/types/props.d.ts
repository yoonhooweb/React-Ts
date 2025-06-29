type ButtonConfigs = {
    value: string;
    className: string;
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

type calculatorType = {
    currentNumber: string;
    preNumber: string;
    operation: null | string;
    isNewNumber: boolean;
}