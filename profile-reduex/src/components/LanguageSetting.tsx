import { Languages } from "lucide-react";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateLanguage } from "../features/setting/settingSlice";

export default function LanguageSetting() {
    const language = useSelector((state: RootState) => state.setting.language);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    return (
        <>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Languages className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t.languageSetting}</h2>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {(["ko", "en", "ja"] as const).map((lang) => (
                        <button
                            key={lang}
                            className={twMerge(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                language === lang
                                    ? " bg-blue-500 text-white "
                                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            )}
                            onClick={() => dispatch(updateLanguage(lang))}
                        >
                            {lang === "ko" ? "한국어" : lang === "en" ? "English" : "日本語"}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
