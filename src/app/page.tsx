"use client";

import Button from "@/components/ui/Button";
import Image from "@/components/ui/Image";
import { useTranslation } from "react-i18next";
import { ROADMAP } from "./lib/constants";
import Timeline from "@/components/ui/Timeline";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="px-6 min-h-[calc(100vh-104px)]">
      {/* Introduction */}
      <div
        className="hero bg-base-200 min-h-[calc(100vh-104px)] rounded-xl mb-4"
        id="home"
      >
        <div className="hero-content flex-col lg:flex-row items-center justify-center lg:shadow-md rounded-xl">
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
            showSkeleton
            className="rounded-full"
          />
          <div className="md:max-w-2/3">
            <p className="text-3xl font-bold">
              {t("greeting")}
              <br className="md:hidden" />
              <span className="text-xl font-bold flex">{t("role")}</span>
            </p>
            <p id="introduction" className="py-6">
              {t("introduction")}
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3 w-full">
              <Button>{t("contactMe")}</Button>
              <Button variant="outline">{t("learnMore")}</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stacks */}

      {/* Timeline */}
      <div
        className="hero bg-base-200 min-h-[calc(100vh-104px)] rounded-xl mt-6 p-4 flex flex-col items-center justify-center"
        id="timeline"
      >
        <div className="flex items-center justify-center">
          <Timeline data={ROADMAP} />
        </div>
      </div>
    </div>
  );
}
