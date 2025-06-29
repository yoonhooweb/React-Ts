export const initalData = {
    currentNumber: "0", //현재 입력되는 숫자
    preNumber: "", //이전 입력되는 숫자
    operation: null, // 현재 선택된 연산자
    isNewNumber: true, // 새로운 숫자 입력 여부
};
export const performCalculation = (
    prev: number,
    current: number,
    operator: string
) => {
    switch (operator) {
        case "+":
            return prev + current;
        case "-":
            return prev - current;
        case "/":
            return prev / current;
        case "*":
            return prev * current;
        default:
            return current;
    }
};