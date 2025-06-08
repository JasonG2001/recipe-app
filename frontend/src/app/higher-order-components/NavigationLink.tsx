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
          "py-4 px-8 rounded-md h-full",
          curNavigationId === navigationId &&
            "bg-gradient-to-b from-white via-lime-200 to-white",
          className
        )}
        ref={ref}
      >
        <Link
          href={`/${navigationId}`}
          className="flex flex-col items-center justify-center group w-32"
        >
          <div>{navigations[navigationId].title}</div>
          <div className="text-xs hidden group-hover:block text-center">
            {navigations[navigationId].subTitle}
          </div>
        </Link>
      </div>
    );
  }
);

NavigationLink.displayName = "NavigationLink";
