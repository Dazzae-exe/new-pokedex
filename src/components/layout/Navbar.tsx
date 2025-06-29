import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="w-full bg-red-500 text-neutral-50 p-4 fixed top-0 z-50">
      <NavigationMenu className="w-full mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                  <a href="/">Home</a>
              </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                  <a href="/pokedex">Pokedex</a>
              </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
