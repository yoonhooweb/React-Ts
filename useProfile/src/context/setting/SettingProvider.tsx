import { useLayoutEffect, useMemo, useState } from "react";
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
    const [preferences, setPreferences] = useState<UserPreferences>(() => {
        /* 로직을 만들어서 값을 지정하는 경우에는 함수값으로 useState의 값으로 지정하는게 편하다  */
        const save = localStorage.getItem("preferences");
        return save ? JSON.parse(save) : defaultValue;
    });

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

    /* 
        useLayoutEffect : 콤포넌트가 렌더링이 되기전에 실행됨
        useEffect : 렌더링이 된 후 실행
    */

    /* useEffect(() => { */
    useLayoutEffect(() => {
        localStorage.setItem("preferences", JSON.stringify(preferences));

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
