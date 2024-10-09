import { NavigationMenu } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import { NavigationItem, NavItem } from "./navigation-item";

const navItems: NavItem[] = [
  { navigationLink: "/", navigationDescription: "Project Heartcode" },
  { navigationLink: "/quiz", navigationDescription: "Quiz" },
  { navigationLink: "/about-me", navigationDescription: "About Me" },
]

export function NavigationBar() {
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
      <div>
        <ModeToggle />
      </div>
    </NavigationMenu>
  )
}