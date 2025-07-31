import { useContext } from "react";
import { ThemeActionContext, ThemeContext } from "./ThemeContext";

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme 는 CounterProvider 안에서만 가능합니다.");
    }
    return context;
}

export function useThemeAction() {
    const contextAction = useContext(ThemeActionContext);

    if (!contextAction) {
        throw new Error("useTheme 는 CounterProvider 안에서만 가능합니다.");
    }
    return contextAction;
}
