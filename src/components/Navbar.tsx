"use client";

import { APP_NAME } from "@/utils/constants";
import clsx from "clsx";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./ui/Button";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [showNav] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const navLinks = [
    { label: t("home"), href: "#home", id: "home" },
    { label: "Timeline", href: "#timeline", id: "timeline" },
    { label: t("about"), href: "#about", id: "about" },
    { label: t("contact"), href: "#contact", about: "contact" },
  ];

  const handleScroll = (event: React.MouseEvent, id: string | undefined) => {
    event.preventDefault();
    if (id != undefined) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
      router.push(`#${id}`);
    }
  };

  useEffect(() => {
    const id = window.location.hash.substring(1);
    if (id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
      router.push(`#${id}`);
    }
  }, [router]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentY = window.scrollY;
  //     if (currentY > lastScrollY && currentY > 80) {
  //       setShowNav(false);
  //     } else {
  //       setShowNav(true);
  //     }
  //     setLastScrollY(currentY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  return (
    <>
      {/* Sticky nav, hide on scroll down */}
      <div
        className={clsx(
          "fixed top-0 z-50 w-full transition-transform duration-300",
          showNav ? "translate-y-0" : "-translate-y-full"
        )}
      >
        {/* Desktop Nav */}
        <div className="hidden lg:flex navbar bg-base-100 text-base-content shadow-md px-4">
          <div className="flex-1">
            <Link href="/" className="text-xl font-bold text-base-content px-4">
              {APP_NAME}
            </Link>
          </div>
          <div className="flex gap-4 items-center justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  if (!link.href.includes("/")) handleScroll(event, link.id);
                }}
                className="btn btn-ghost min-w-[100px] text-sm text-base-content hover:bg-primary hover:text-primary-content"
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden navbar bg-base-100 text-base-content shadow-md px-4">
          <div className="flex-1">
            <Button
              className="text-base-content"
              variant="ghost"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </Button>
            <Link href="/" className="text-xl font-bold ml-2 text-base-content">
              {APP_NAME}
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[4.5rem] lg:h-[4rem]"></div>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <aside
        className={clsx(
          "lg:hidden fixed top-16 left-0 z-50 h-[calc(100vh-64px)] w-72 transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
          "bg-base-200 text-base-content shadow-lg border-r border-base-300"
        )}
      >
        <div className="relative p-6 space-y-6 h-full">
          {/* Close Button */}
          {/* <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 btn btn-sm bg-base-300 hover:bg-base-100 text-base-content"
            aria-label="Close sidebar"
          >
            <XIcon />
          </button> */}

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-2 font-medium transition-all hover:bg-primary hover:text-primary-content"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </div>
      </aside>
    </>
  );
}
