// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../public/locales/en/common.json";
import my from "../../public/locales/my/common.json";
import jp from "../../public/locales/jp/common.json";

const resources = {
  en: { common: en },
  my: { common: my },
  jp: { common: jp },
};

i18n.use(initReactI18next).init({
  resources,
  lng:
    typeof window !== "undefined"
      ? localStorage.getItem("locale") || "en"
      : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  ns: ["common"],
  defaultNS: "common",
});

export default i18n;
