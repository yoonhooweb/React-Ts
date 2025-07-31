import { useMemo, useState } from "react";
import { ThemeActionContext, ThemeContext } from "./ThemeContext";

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const themeMemo = useMemo(() => ({ changeTheme }), []);

    return (
        <>
            <ThemeActionContext value={themeMemo}>
                <ThemeContext value={{ theme }}>{children}</ThemeContext>
            </ThemeActionContext>
        </>
    );
}

export default ThemeProvider;
