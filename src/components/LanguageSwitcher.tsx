"use client";

import i18n from "@/app/i18n";
import Dropdown, { DropdownOption } from "./Dropdown";
import { useEffect, useState } from "react";

const languageOptions: DropdownOption[] = [
  { label: "English", value: "en" },
  { label: "မြန်မာ", value: "my" },
  { label: "日本語", value: "jp" },
];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("");

  useEffect(() => {
    const save_lang = localStorage.getItem("locale");
    if (save_lang) setLang(save_lang);
  }, []);

  const switchTo = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("locale", lang);
    window.location.reload(); // ensure content reflects new locale
  };

  return (
    <Dropdown
      options={languageOptions}
      selected={lang}
      onSelect={(val) => {
        setLang(val);
        switchTo(val);
      }}
      label="Choose language"
    />
  );
}
