import { cn } from "components/utils";
import { forwardRef, ComponentProps } from "react";

export const MetricWrapper = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...props }, ref) => (
    <div className={cn("flex flex-col gap-2", className)} ref={ref} {...props}>
      {children}
    </div>
  )
);

MetricWrapper.displayName = "MetricWrapper";
