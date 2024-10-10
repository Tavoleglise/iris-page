import React, { useEffect, useState } from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";

interface NavbarProps {
  currentPath: string;
}

export default function Navbar({ currentPath }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Products", route: "/products" },
    { label: "About Us", route: "/about" },
    { label: "Contact", route: "/contact-us" },
  ];

  const handleClick = (section: string) => {
    console.log(section);
    setActiveSection(section);
  };

  return (
    <NextNavbar
      className="bg-gradient-to-r from-zinc-400 to-zinc-800 shadow-custom1"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <a href="/">
            <Image
              width={80}
              src="https://hackmd.io/_uploads/rJf-7dK32.png"
              alt="iris logo"
            />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            isActive={activeSection === item.label}
            key={`${item}-${index}`}
          >
            <Link
              color={currentPath === item.route ? "primary" : "foreground"}
              href={item.route}
              onPress={() => handleClick(item.label)}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextNavbar>
  );
}
