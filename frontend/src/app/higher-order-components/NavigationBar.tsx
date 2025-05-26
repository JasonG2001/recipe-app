import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "components/navigation/NavigationMenu";
import { Separator } from "components/separator/Separator";
import { NavigationId, navigations } from "constants/navigations";
import { forwardRef, HTMLAttributes } from "react";
import { NavigationLink } from "./NavigationLink";
import Image from "next/image";
import { cn } from "components/utils";

const navigationIds: NavigationId[] = Object.keys(navigations).map(
  (nav) => nav as NavigationId
);

export const NavigationBar = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => {
  return (
    <>
      <NavigationMenu className={cn("gap-10", className)} ref={ref}>
        <Image width={150} height={1} src="/images/logo.png" alt="logo" />
        <NavigationMenuList className="w-[500px]">
          {navigationIds.map((navId) => (
            <NavigationMenuItem key={navId}>
              <NavigationLink navigationId={navId} />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Separator />
    </>
  );
});

NavigationBar.displayName = "NavigationBar";
