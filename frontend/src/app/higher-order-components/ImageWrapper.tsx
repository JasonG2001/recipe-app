import { cn } from "components/utils";
import Image from "next/image";
import { forwardRef, ImgHTMLAttributes } from "react";

type ImageWrapperProps = {
  width?: number;
  height?: number;
  url: string;
  alt: string;
} & Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height"
>;

export const ImageWrapper = forwardRef<HTMLImageElement, ImageWrapperProps>(
  ({ width, height, url, alt, className, ...props }, ref) => (
    <div className="flex justify-center items-center w-full">
      <Image
        width={width ?? 2000}
        height={height ?? 1}
        src={url}
        alt={alt}
        ref={ref}
        className={cn("rounded-lg", className)}
        {...props}
      />
    </div>
  )
);

ImageWrapper.displayName = "ImageWrapper";
