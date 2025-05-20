"use client";

import Button from "@/components/Button";
import Image from "@/components/ui/Image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="px-6 min-h-[calc(100vh-88px)]">
      {/* Introduction */}
      <div className="hero bg-base-200 min-h-[calc(100vh-88px)] rounded-t-xl">
        <div className="hero-content flex-col lg:flex-row items-center justify-center shadow-md rounded-xl">
          <Image
            src="/profile.png"
            alt="User photo"
            width={260}
            height={260}
            style={{
              maxWidth: "260px",
              maxHeight: "260px",
              minWidth: "260px",
              minHeight: "260px",
            }}
            placeholder="blur"
            blurDataURL="/blur.jpg"
            loading="lazy"
            rounded
            border={false}
            shadow={false}
            fallbackSrc="/fallback.jpg"
            showSkeleton
            className="rounded-full"
          />
          <div className="md:max-w-2/3">
            <p className="text-3xl font-bold">{t("greeting")}</p>
            <p id="introduction" className="py-6">
              {t("introduction")}
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <Button>{t("contactMe")}</Button>
              <Button variant="ghost">{t("learnMore")}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
