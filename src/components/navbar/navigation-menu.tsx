"use client";

import { NavigationMenu } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { NavigationItem, NavItem } from "./navigation-item";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { useTheme } from "next-themes";
import { dark, neobrutalism } from '@clerk/themes';

const navItems: NavItem[] = [
  { navigationLink: "/", navigationDescription: "Project Heartcode" },
  { navigationLink: "/quiz", navigationDescription: "Quiz" },
  { navigationLink: "/about-me", navigationDescription: "About Me" },
]

export function NavigationBar() {
  const currentTheme = useTheme()

  return (
    <NavigationMenu className="sticky top-0 list-none flex justify-between min-w-full h-[60px] backdrop-blur px-5">
      <div className="flex flex-row">
        {navItems.map((navItem, index) =>
          <NavigationItem
            key={index}
            navigationLink={navItem.navigationLink}
            navigationDescription={navItem.navigationDescription}
          />
        )}
      </div>
      <div className="flex flex-row">
        <ModeToggle />
        <div className="px-2"></div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn >
          <UserButton appearance={{
            baseTheme: currentTheme.theme === "dark" ? dark : neobrutalism,
          }} />
        </SignedIn>
      </div>
    </NavigationMenu>
  )
}