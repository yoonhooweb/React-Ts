import { createContext } from "react";

export const SettingContenxt = createContext<PreferencesContextType | null>(null);
export const SettingContenxtAction = createContext<PreferencesContextActionType | null>(null);
