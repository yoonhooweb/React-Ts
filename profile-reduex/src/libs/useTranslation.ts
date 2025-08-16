import { useSelector } from "react-redux";
import { SupportedLanguage, translations } from "./i18n";
import { RootState } from "../store/store";

export default function useTranslation() {
  const language = useSelector((state: RootState) => state.setting.language);
  const lang = language as SupportedLanguage;
  const t = translations[lang];
  return { t, lang };
}
