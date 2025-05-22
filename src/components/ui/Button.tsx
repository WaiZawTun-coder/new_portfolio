import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  shadow?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className,
  shadow = false,
  type = "button",
}: ButtonProps) {
  const base = "btn";
  const sizeClass = size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "";
  const variantClass = `btn-${variant}`;
  const shadowClass = shadow ? "btn-shadow" : "btn-shadow-none";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, variantClass, sizeClass, className, shadowClass)}
    >
      {children}
    </button>
  );
}
