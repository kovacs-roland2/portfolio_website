'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

const Header = () => {
  return (
    <NavigationMenu className="absolute top-8 left-1/2 transform -translate-x-1/2 z-[100] bg-transparent">
      <NavigationMenuList className="flex gap-4 p-2">
        {navItems.map(item => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              href={item.href}
              className="inline-flex h-10 w-max items-center justify-center rounded-md px-6 py-2 text-xl font-normal text-[#f0f8ff] bg-transparent hover:bg-[#415a77]/20 hover:text-[#f0f8ff] focus:bg-[#415a77]/20 focus:text-[#f0f8ff] focus:outline-none transition-all duration-300 ease-in-out"
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
