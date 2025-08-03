import { Bell } from "lucide-react";
import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";

export default function AlarmSetting() {
    const { preferences } = useSetting();
    const { updateNoti } = useSettingAction();

    return (
        <>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Bell className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">알림 설정</h2>
                </div>
                <div className="space-y-4">
                    {(Object.keys(preferences.noti) as (keyof UserPreferences["noti"])[]).map((key) => (
                        <label key={key} className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300 capitalize">
                                {key === "email" ? "이메일 알림" : key === "push" ? "푸쉬알림" : "데스크톱 알림"}
                            </span>
                            {/* On: bg-blue-500 */}
                            {/* Off: bg-gray-300 dark:bg-gray-600 */}
                            <button
                                className={twMerge(
                                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                    preferences.noti[key] ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                                )}
                                onClick={() => updateNoti(key, !preferences.noti[key])}
                            >
                                {/* On: translate-x-6  */}
                                {/* Off: translate-x-1 */}
                                <span
                                    className={twMerge(
                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                        preferences.noti[key] ? "translate-x-6" : "translate-x-1"
                                    )}
                                />
                            </button>
                        </label>
                    ))}
                </div>
            </div>
        </>
    );
}
