"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import { APP_NAME } from "@/utils/constants";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
            <Link href="/" className="text-xl font-bold text-base-content">
              {APP_NAME}
            </Link>
          </div>
          <div className="flex-none gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="btn btn-ghost text-sm text-base-content hover:bg-base-200"
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
          "lg:hidden fixed top-0 left-0 z-50 h-full w-72 transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
          "bg-base-200 text-base-content shadow-lg border-r border-base-300"
        )}
      >
        <div className="relative p-6 space-y-6 h-full">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 btn btn-sm bg-base-300 hover:bg-base-100 text-base-content"
            aria-label="Close sidebar"
          >
            <XIcon />
          </button>

          <h2 className="text-2xl font-bold text-base-content">Menu</h2>

          <ul className="space-y-3 mt-10">
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
