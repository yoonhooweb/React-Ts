import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ThemeActionContext = createContext<ThemeContextActionType | null>(null);
