import { useLayoutEffect, useMemo, useState } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

const defaultValue: UserPreferences = {
  language: "ko",
  fontSize: "medium",
  notifications: {
    email: false,
    push: false,
    desktop: false,
  },
  colorScheme: "system",
};

export default function SettingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const save = localStorage.getItem("preferences");
    return save ? JSON.parse(save) : defaultValue;
  });
  const updateLanguage = (language: UserPreferences["language"]) => {
    setPreferences((preferences) => ({ ...preferences, language }));
  };
  const updateFontSize = (fontSize: UserPreferences["fontSize"]) => {
    setPreferences((preferences) => ({ ...preferences, fontSize }));
  };
  const updateNotifications = (
    key: keyof UserPreferences["notifications"],
    value: boolean
  ) => {
    setPreferences((preferences) => ({
      ...preferences,
      notifications: { ...preferences.notifications, [key]: value },
    }));
  };
  const updateColorScheme = (colorScheme: UserPreferences["colorScheme"]) => {
    setPreferences((preferences) => ({ ...preferences, colorScheme }));
  };
  const memoization = useMemo(
    () => ({
      updateLanguage,
      updateFontSize,
      updateNotifications,
      updateColorScheme,
    }),
    []
  );

  useLayoutEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));

    document.documentElement.style.fontSize = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }[preferences.fontSize];

    if (preferences.colorScheme === "system") {
      document.documentElement.classList.remove("light", "dark");
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    } else {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(preferences.colorScheme);
    }
  }, [preferences]);

  return (
    <>
      <SettingContextAction value={memoization}>
        <SettingContext value={{ preferences }}>{children}</SettingContext>
      </SettingContextAction>
    </>
  );
}
