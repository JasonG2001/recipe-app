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
      <NavigationMenu className={cn("gap-28", className)} ref={ref}>
        <Image
          width={150}
          height={1}
          src="/images/logo.png"
          alt="logo"
          className="my-2"
        />
        <NavigationMenuList className="w-[800px]">
          {navigationIds.map((navId) => (
            <NavigationMenuItem key={navId}>
              <NavigationLink navigationId={navId} />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <div className="w-[150px] h-20" />
      </NavigationMenu>
      <Separator />
    </>
  );
});

NavigationBar.displayName = "NavigationBar";
