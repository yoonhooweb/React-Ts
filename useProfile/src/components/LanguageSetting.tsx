import { Languages } from "lucide-react";
import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";

export default function LanguageSetting() {
    const { preferences } = useSetting();
    const { updateLanguage } = useSettingAction();
    const { t } = useTranslation();
    return (
        <>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Languages className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t.languageSetting}</h2>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {/* On: bg-blue-500 text-white */}
                    {/* Off: bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 */}
                    {(["ko", "ja", "en"] as const).map((lan) => (
                        <button
                            className={twMerge(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                lan === preferences.language
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                            )}
                            onClick={() => updateLanguage(lan)}
                        >
                            {lan === "ko" ? t.languageSetting : lan === "ja" ? "日本語" : "English"}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
