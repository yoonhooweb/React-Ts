interface UserPreferences {
    language: "ko" | "en" | "ja";
    fontSize: "samll" | "medium" | "large";
    noti: {
        email: boolean;
        push: boolean;
        desktop: boolean;
    };
    color: "system" | "light" | "dark";
}

interface PreferencesContextType {
    preferences: UserPreferences;
}

interface PreferencesContextActionType {
    updateLanguage: (language: UserPreferences["language"]) => void;
    updateFontSize: (size: UserPreferences["fontSize"]) => void;
    updateNoti: (key: keyof UserPreferences["noti"], value: boolean) => void;
    updateColor: (scheme: UserPreferences["color"]) => void;
}
