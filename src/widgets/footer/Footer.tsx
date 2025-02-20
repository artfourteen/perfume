"use client";

import { links } from "@/shared/constants/navLinks";
import { Container } from "@/shared/core/container/Container";
import { Logo } from "@/shared/ui/logo/Logo";
import { Socials } from "@/shared/ui/socials/Socials";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-6">
      <Container>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap flex-col md:flex-row md:justify-between gap-5">
            <div className="flex flex-col items-center text-center mx-auto md:mx-0 md:text-start md:items-start gap-5 w-56">
              <Link href="/">
                <Logo />
              </Link>
              <p className="text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, cupiditate!
              </p>
              <Socials />
            </div>
            <div className="flex flex-col gap-5 text-center md:text-start">
              <div className="text-xl uppercase font-light">На нашем сайте</div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-400 hover:text-gray-800 transition-all"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 text-center md:text-start">
              <div className="text-xl uppercase font-light">Контакты</div>
              <ul className="flex flex-col gap-3">
                <li className="text-gray-400 hover:text-gray-800 transition-all">
                  <Link href="/">logo.com</Link>
                </li>
                <li className="text-gray-400 hover:text-gray-800 transition-all">
                  <Link href="tel:+77082239268">+7 (708) 223-92-68</Link>
                </li>
                <li className="text-gray-400 hover:text-gray-800 transition-all">
                  <Link href="">г. Алматы, ул. Назарбаева 69</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 text-center text-gray-400 border-t text-sm">
            &copy; <Logo /> {currentYear}. Все права защищены.
          </div>
        </div>
      </Container>
    </footer>
  );
};
