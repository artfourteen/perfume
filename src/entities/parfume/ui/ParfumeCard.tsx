"use client";

import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import Link from "next/link";

export const ParfumeCard = () => {
  return (
    <Link
      href="/1"
      className="group relative border pb-5 md:border-none md:pb-0"
    >
      <div className="py-3 px-1 md:group-hover:blur-sm transition-all">
        <div>
          <Image
            src="/assets/img/perfume/perfume1.png"
            alt="parfume1"
            width={350}
            height={400}
          />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="text-xl font-light">Amouage Interlude For Men</div>
          <div className="font-medium">11 000₸</div>
        </div>
      </div>
      <div className="flex md:hidden items-center gap-3 justify-center">
        <Button variant="secondary" className="border border-black">
          Подробнее
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="border border-black"
        >
          Купить
        </Button>
      </div>
      <div
        className={cn(
          "absolute w-full h-full bg-gray-200/30 opacity-0 group-hover:opacity-100 top-0 left-0 transition-all z-10",
          "hidden md:flex items-center justify-center gap-3"
        )}
      >
        <Button variant="secondary" className="border border-black">
          Подробнее
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="border border-black"
        >
          Купить
        </Button>
      </div>
    </Link>
  );
};
