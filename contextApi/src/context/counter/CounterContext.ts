import { createContext } from "react";

export const CounterContext = createContext<CountContextType | null>(null);
export const CounterContextAction = createContext<CountContextTypeAction | null>(null);