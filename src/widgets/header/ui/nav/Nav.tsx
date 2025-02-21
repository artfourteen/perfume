"use client";

import { links } from "@/shared/constants/navLinks";
import { cn } from "@/shared/core/cn/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li
            key={link.id}
            className={cn(
              "border-b-2 border-transparent transition-all uppercase text-sm",
              {
                "border-black": link.href === pathname,
              }
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
