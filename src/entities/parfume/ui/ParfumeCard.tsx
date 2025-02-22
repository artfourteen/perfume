"use client";

import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import { ParfumeEntity } from "../model/parfume";

export const ParfumeCard = ({
  slug,
  title,
  brand,
  price,
  img,
}: ParfumeEntity) => {
  return (
    <Link
      href={`/${slug}`}
      className="group relative border pb-5 lg:border-none lg:pb-0"
    >
      <div className="py-3 px-1 lg:group-hover:blur-sm transition-all">
        <div>
          <Image src={img} alt={slug} width={350} height={400} />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-xl font-light">{title}</div>
          <div className="font-light text-gray-400">{brand}</div>
          <div className="font-medium">{price[0].toLocaleString()}₸</div>
        </div>
      </div>
      <div className="flex lg:hidden items-center gap-3 justify-center">
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
          "hidden lg:flex items-center justify-center gap-3"
        )}
      >
        {/* <Button variant="secondary" className="border border-black">
          Подробнее
        </Button> */}
        <Button className="border border-black w-2/3 text-lg uppercase py-6">
          Купить
        </Button>
      </div>
    </Link>
  );
};
