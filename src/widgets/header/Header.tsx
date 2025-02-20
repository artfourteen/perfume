"use client";

import { IoClose } from "react-icons/io5";
import { Container } from "@/shared/core/container/Container";
import { Logo } from "@/shared/ui/logo/Logo";
import Link from "next/link";
import { Socials } from "../../shared/ui/socials/Socials";
import { Nav } from "./ui/nav/Nav";
import { IoBagOutline } from "react-icons/io5";
import { useState } from "react";
import { cn } from "@/shared/core/cn/cn";
import { links } from "@/shared/constants/navLinks";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="py-6 border-b">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden md:block">
            <Nav />
          </div>
          <div className="flex items-center gap-5">
            <Socials />
            <button className="hover:text-black/70 transition-all text-2xl">
              <IoBagOutline />
            </button>
            <button className="md:hidden" onClick={handleToggle}>
              <div className="flex flex-col items-center justify-center gap-1 size-5">
                <div className="w-full h-[2px] bg-black rounded-full" />
                <div className="w-full h-[2px] bg-black rounded-full" />
                <div className="w-full h-[2px] bg-black rounded-full" />
              </div>
            </button>
          </div>
        </div>
      </Container>
      <div
        className={cn(
          "w-full h-dvh fixed top-0 right-full bg-white z-20 transition-all",
          {
            "right-0": isOpen,
          }
        )}
      >
        <Container className="h-full">
          <div className="flex flex-col py-12 items-center w-full h-full justify-between relative">
            <button
              onClick={handleToggle}
              className="absolute top-7 right-0 text-3xl"
            >
              <IoClose />
            </button>
            <div />
            <div className="flex flex-col gap-3 w-full justify-center items-center">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="bg-gray-200 w-[80%] text-center text-lg font-light active:bg-gray-300 py-3 uppercase"
                  onClick={handleToggle}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Socials />
          </div>
        </Container>
      </div>
    </header>
  );
};
