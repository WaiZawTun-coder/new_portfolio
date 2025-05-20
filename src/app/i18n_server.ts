"use server";

import { getTranslations } from "next-intl/server";
import acceptLanguage from "accept-language";

acceptLanguage.languages(["en", "my", "jp"]);

export async function getTranslation(headers: Headers) {
  const lang =
    headers.get("x-language") ||
    acceptLanguage.get(headers.get("accept-language") || "") ||
    "en";

  const t = await getTranslations({ locale: lang, namespace: "common" });
  return t;
}
