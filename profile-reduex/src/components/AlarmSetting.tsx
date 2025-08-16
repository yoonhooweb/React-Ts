import { Bell } from "lucide-react";
import { twMerge } from "tailwind-merge";
import useTranslation from "../libs/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateNotifications } from "../features/setting/settingSlice";

export default function AlarmSetting() {
    const notifications = useSelector((state: RootState) => state.setting.notifications);
    const dispatch = useDispatch();

    const { t } = useTranslation();
    return (
        <>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <Bell className="text-blue-500" size={24} />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t.notifications.label}</h2>
                </div>
                <div className="space-y-4">
                    {(Object.keys(notifications) as (keyof UserPreferences["notifications"])[]).map((key) => (
                        <label key={key} className="flex items-center justify-between">
                            <span className="text-gray-700 dark:text-gray-300 capitalize">
                                {key === "email" ? t.notifications.email : key === "push" ? t.notifications.push : t.notifications.desktop}
                            </span>
                            {/* On: bg-blue-500 */}
                            {/* Off: bg-gray-300 dark:bg-gray-600 */}
                            <button
                                className={twMerge(
                                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                    notifications[key] ? "bg-blue-500" : " bg-gray-300 dark:bg-gray-600"
                                )}
                                onClick={() => dispatch(updateNotifications({ key, value: !notifications[key] }))}
                            >
                                {/* On: translate-x-6  */}
                                {/* Off: translate-x-1 */}
                                <span
                                    className={twMerge(
                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1",
                                        notifications[key] ? "translate-x-6 " : " translate-x-1"
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
