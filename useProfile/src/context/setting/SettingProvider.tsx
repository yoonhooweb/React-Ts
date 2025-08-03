import { useEffect, useMemo, useState } from "react";
import { SettingContenxt, SettingContenxtAction } from "./SettingContext";

const defaultValue: UserPreferences = {
    language: "ko",
    fontSize: "medium",
    noti: {
        email: false,
        desktop: false,
        push: false,
    },
    color: "system",
};

function SettingProvider({ children }: { children: React.ReactNode }) {
    const [preferences, setPreferences] = useState<UserPreferences>(defaultValue);

    const updateLanguage = (language: UserPreferences["language"]) => {
        setPreferences((prev) => ({ ...prev, language }));
    };
    const updateFontSize = (fontSize: UserPreferences["fontSize"]) => {
        setPreferences((prev) => ({ ...prev, fontSize }));
    };
    const updateColor = (color: UserPreferences["color"]) => {
        setPreferences((prev) => ({ ...prev, color }));
    };

    const updateNoti = (key: keyof UserPreferences["noti"], value: boolean) => {
        setPreferences((prev) => ({ ...prev, noti: { ...prev.noti, [key]: value } }));
    };

    const memoiztion = useMemo(() => ({ updateLanguage, updateColor, updateNoti, updateFontSize }), []);

    useEffect(() => {
        document.documentElement.style.fontSize =
            {
                small: "14px",
                medium: "16px",
                large: "18px",
            }[preferences.fontSize] ?? "16px";

        if (preferences.color === "system") {
            document.documentElement.classList.remove("light", "dark");
            if (window.matchMedia("(prefers-color-scheme : dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.add("light");
            }
        } else {
            document.documentElement.classList.remove("light", "dark");
            document.documentElement.classList.add(preferences.color);
        }
    }, [preferences]);

    return (
        <>
            <SettingContenxtAction value={memoiztion}>
                <SettingContenxt value={{ preferences }}>{children} </SettingContenxt>
            </SettingContenxtAction>
        </>
    );
}

export default SettingProvider;
