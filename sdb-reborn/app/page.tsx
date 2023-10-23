"use client";

import { Button } from "@/components/ui/button";
import Image from "@/node_modules/next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "@/node_modules/next/link";
import React from "react";
import Icon from "@/components/icon";

const components: { title: string; sub_title: Array<any> }[] = [
  {
    title: "Who We Are",
    sub_title: [
      {
        title: "Hover Card1",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card2",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card3",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "What We Do",
    sub_title: [
      {
        title: "Hover Card4",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card5",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card6",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "About Us",
    sub_title: [
      {
        title: "Hover Card7",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card8",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card9",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Our Work",
    sub_title: [
      {
        title: "Hover Card10",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card11",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card12",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Report",
    sub_title: [
      {
        title: "Hover Card13",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card14",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card15",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Data",
    sub_title: [
      {
        title: "Hover Card16",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card17",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card18",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
  {
    title: "Contact Us",
    sub_title: [
      {
        title: "Hover Card19",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card20",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
      {
        title: "Hover Card21",
        sub_title: "About Us",
        href: "/docs/primitives/hover-card",
      },
    ],
  },
];

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <>
      <header className="bg-background py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-white text-3xl font-semibold">
              <Image
                src="/logo-sdb.png"
                alt="lama blog"
                width={50}
                height={50}
              />
            </a>
            <h1 className="text-bg text-xl font-semibold ml-4">
              Sedekah Bersama
            </h1>
          </div>

          <nav className="hidden md:flex space-x-2">
            <a href="#" className="hover:text-gray-300">
              INA
            </a>
            <a href="#" className="hover:text-gray-300">
              ENG
            </a>
          </nav>

          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <header className=" bg-muted-foreground py-4 px-6">
        <div className=" container mx-auto flex items-center">
          <a href="/" className="text-white text-3xl font-semibold">
            {/* <Image src="/logo-sdb.png" alt="lama blog" width={50} height={50} /> */}
            <Icon name="home" />
          </a>

          <nav className="hidden ml-10 md:flex space-x-6">
            {/* <a href="#" className=" hover:text-gray-300">
              Who We Are
            </a>
            <a href="#" className=" hover:text-gray-300">
              What We Do
            </a>
            <a href="#" className=" hover:text-gray-300">
              Our Work
            </a>
            <a href="#" className=" hover:text-gray-300">
              Report
            </a>
            <a href="#" className=" hover:text-gray-300">
              Data
            </a>
            <a href="#" className=" hover:text-gray-300">
              Contact Us
            </a> */}
            {components.map((component) => (
              <NavigationMenu key={component.title}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {component.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[400px] gap-3 p-4 md:w-[100px] lg:w-[200px] ">
                        {component.sub_title.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}
            {/* <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[400px] gap-3 p-4 md:w-[100px] lg:w-[200px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu> */}
          </nav>

          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[400px] gap-3 p-4 md:w-[100px] lg:w-[200px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="mt-4">
        <Button onClick={() => setTheme("light")}>light</Button>
        <Button onClick={() => setTheme("dark")}>dark</Button>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
