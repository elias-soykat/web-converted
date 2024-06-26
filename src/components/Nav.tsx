"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Loader, MenuIcon, Video } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const navItems = [{ name: "Image Resizer", href: "/image-resizer" }];

export default function Component() {
  return (
    <nav className="py-4 shadow-md sm:py-5">
      <div className="container flex items-center justify-between">
        <Link className="flex items-center gap-x-2" href="/">
          <Video />
          <span className="font-semibold">Web Convert</span>
        </Link>
        <div className="hidden gap-x-8 md:flex">
          {navItems.map((item, i) => (
            <NavItem key={i} item={item} />
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className=" inline-grid space-y-6 p-2">
              {navItems.map((item, i) => (
                <NavItem key={i} item={item} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

const NavItem = ({ item }: any) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="text-lg font-medium underline-offset-4 transition-all duration-300 hover:opacity-50 lg:text-base">
          Image Resizer
        </button>
      </TooltipTrigger>
      <TooltipContent className="flex justify-center items-center gap-x-2">
        <Loader size={16} className="animate-spin" />
        <p>Coming soon.</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
