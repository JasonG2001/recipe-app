import { cn } from "components/utils";
import { forwardRef, HTMLAttributes } from "react";

type PageContentWrapperProps = HTMLAttributes<HTMLDivElement>;

export const PageContentWrapper = forwardRef<
  HTMLDivElement,
  PageContentWrapperProps
>(({ className, children, ...props }, ref) => (
  <div className="w-full flex flex-col items-center bg-[#F8F8F8]">
    <div className={cn("w-10/12 pt-6", className)} {...props} ref={ref}>
      {children}
    </div>
  </div>
));

PageContentWrapper.displayName = "PageContentWrapper";
