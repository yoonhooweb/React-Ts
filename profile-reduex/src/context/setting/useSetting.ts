import { useContext } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

export function useSetting() {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error(
      "useSetting은 SettingProvider 내부에서만 사용할 수 있습니다."
    );
  }
  return context;
}

export function useSettingAction() {
  const context = useContext(SettingContextAction);
  if (!context) {
    throw new Error(
      "useSettingAction은 SettingProvider 내부에서만 사용할 수 있습니다."
    );
  }
  return context;
}
