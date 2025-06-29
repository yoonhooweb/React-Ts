import { useState } from "react";
import ButtonList from "./ButtonList";
import { initalData, performCalculation } from "../utils/calculatorUtils";

export default function Calculator() {
    const [calculatorState, setCalculatorState] =
        useState<calculatorType>(initalData);

    const handleClear = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        setCalculatorState(initalData);
    };
    const handleOperlator = (
        e: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
        const operator = e.currentTarget.value;
        setCalculatorState((calculatorState) => {
            const current = parseFloat(calculatorState.currentNumber);
            if (calculatorState.currentNumber === "" && operator) {
                return calculatorState;
            } else if (calculatorState.preNumber && calculatorState.operation) {
                const prev = parseFloat(calculatorState.preNumber);
                const result = performCalculation(
                    prev,
                    current,
                    calculatorState.operation
                );
                return operator === "="
                    ? {
                          currentNumber: result.toString(),
                          preNumber: "",
                          operation: null,
                          isNewNumber: true,
                      }
                    : {
                          currentNumber: "",
                          preNumber: result.toString(),
                          operation: operator,
                          isNewNumber: true,
                      };
            } else if (operator === "=")
                return { ...calculatorState, isNewNumber: true };
            else
                return {
                    currentNumber: "",
                    preNumber: current.toString(),
                    operation: operator,
                    isNewNumber: true,
                };
        });
    };
    const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        const value = e.currentTarget.value;
        setCalculatorState((prev) => ({
            ...prev,
            currentNumber: prev.isNewNumber
                ? value
                : prev.currentNumber + value,
            isNewNumber: false,
        }));
    };
    // 소수점이 눌렸을때 처리
    const handleDot = () => {
        setCalculatorState((calculatorState) => {
            if (calculatorState.currentNumber.includes(".")) {
                return calculatorState;
            } else {
                return {
                    ...calculatorState,
                    currentNumber: calculatorState.currentNumber + ".",
                    isNewNumber: false,
                };
            }
        });
    };

    const buttonConfigs: ButtonConfigs[] = [
        {
            value: "C",
            className: "btn-basic bg-orange-500",
            onClick: handleClear,
        },
        { value: "1", className: "btn-basic", onClick: handleNum },
        { value: "2", className: "btn-basic", onClick: handleNum },
        { value: "3", className: "btn-basic", onClick: handleNum },
        {
            value: "*",
            className: "btn-basic bg-orange-500",
            onClick: handleOperlator,
        },
        { value: "5", className: "btn-basic", onClick: handleNum },
        { value: "6", className: "btn-basic", onClick: handleNum },
        {
            value: "+",
            className: "btn-basic bg-orange-500",
            onClick: handleOperlator,
        },
        { value: "7", className: "btn-basic", onClick: handleNum },
        { value: "8", className: "btn-basic", onClick: handleNum },
        { value: "9", className: "btn-basic", onClick: handleNum },
        {
            value: "-",
            className: "btn-basic bg-orange-500",
            onClick: handleOperlator,
        },
        {
            value: ".",
            className: "btn-basic bg-orange-500",
            onClick: handleDot,
        },
        {
            value: "0",
            className: "btn-basic bg-orange-500",
            onClick: handleNum,
        },
        {
            value: "=",
            className: "btn-basic bg-green-500",
            onClick: handleOperlator,
        },
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-neutral-900">
            <article className="w-[282px] border border-neutral-700 bg-neutral-300 p-1">
                <form
                    name="forms"
                    className="grid grid-cols-4 auto-rows-[65px] gap-1"
                >
                    <input
                        type="text"
                        name="output"
                        readOnly
                        className="col-span-4 text-right px-2 border-2 bg-white border-neutral-700 text-lg"
                        value={calculatorState.currentNumber}
                    />
                    {buttonConfigs.map((button) => {
                        return (
                            <ButtonList
                                key={button.value}
                                value={button.value}
                                className={button.className}
                                onClick={button.onClick}
                            />
                        );
                    })}
                </form>
            </article>
        </div>
    );
}
