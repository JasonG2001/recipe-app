"use client";

import { cn } from "components/utils";
import { NavigationId, navigations } from "constants/navigations";
import { useGetPathVariables } from "hooks/useGetPathVariables";
import Link from "next/link";
import { forwardRef, HTMLAttributes } from "react";

type NavigationLinkProps = {
  navigationId: NavigationId;
} & HTMLAttributes<HTMLAnchorElement>;

export const NavigationLink = forwardRef<HTMLDivElement, NavigationLinkProps>(
  ({ navigationId, className }, ref) => {
    const { pathVariables } = useGetPathVariables();
    const curNavigationId = pathVariables[0];
    console.log({ curNavigationId });

    return (
      <div
        className={cn(
          "py-2 px-4 rounded-md",
          curNavigationId === navigationId ? "bg-primary" : "",
          className
        )}
        ref={ref}
      >
        <Link href={`/${navigationId}`}>{navigations[navigationId]}</Link>
      </div>
    );
  }
);

NavigationLink.displayName = "NavigationLink";
