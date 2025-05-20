"use client";

import { cn } from "@/app/lib/utils";
import NextImage, { ImageProps } from "next/image";
import { useState } from "react";

interface CustomImageProps extends ImageProps {
  className?: string;
  wrapperClassName?: string;
  rounded?: boolean;
  border?: boolean;
  shadow?: boolean;
  fallbackSrc?: string;
  showSkeleton?: boolean;
}

export default function Image({
  className,
  wrapperClassName,
  rounded = true,
  border = false,
  shadow = false,
  alt = "Image",
  fallbackSrc = "/fallback.png", // default fallback
  showSkeleton = true,
  ...props
}: CustomImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        rounded && "rounded-xl",
        border && "border border-base-300",
        shadow && "shadow-md",
        wrapperClassName
      )}
    >
      {showSkeleton && isLoading && (
        <div className="skeleton absolute inset-0 animate-pulse bg-base-300" />
      )}

      <NextImage
        {...props}
        alt={alt}
        onError={() => setHasError(true)}
        onLoadingComplete={() => setIsLoading(false)}
        src={hasError ? fallbackSrc : props.src}
        className={cn(
          "object-cover w-full h-full transition-opacity duration-300",
          isLoading && "opacity-0",
          !isLoading && "opacity-100",
          className
        )}
      />
    </div>
  );
}
