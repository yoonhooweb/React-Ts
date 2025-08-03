import { useContext } from "react";
import { SettingContenxt, SettingContenxtAction } from "./SettingContext";

export function useSetting() {
    const context = useContext(SettingContenxt);
    console.log(context);
    if (!context) {
        throw new Error("useSetting은 <SettingProvider> 안에서만 사용해야 합니다");
    }
    return context;
}
export function useSettingAction() {
    const contextAction = useContext(SettingContenxtAction);
    console.log(contextAction);
    if (!contextAction) {
        throw new Error("useSettingAction은 <SettingProvider> 안에서만 사용해야 합니다");
    }

    return contextAction;
}
