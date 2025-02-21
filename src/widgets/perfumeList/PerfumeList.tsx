"use client";

import { ParfumeCard } from "@/entities/parfume/ui/ParfumeCard";
import { perfumes } from "@/shared/constants/perfumes";
import { cn } from "@/shared/core/cn/cn";
import { useSearchParams } from "next/navigation";

export const PerfumeList = () => {
  const searchParams = useSearchParams();

  // Разбираем бренды (split по ",")
  const selectedBrands = searchParams.get("brands")?.split(",") || [];
  const sortParam = searchParams.get("sort");

  // Фильтрация по брендам
  let filteredPerfumes = perfumes;
  if (selectedBrands.length > 0) {
    filteredPerfumes = filteredPerfumes.filter((perfume) =>
      selectedBrands.includes(perfume.brand)
    );
  }

  // Сортировка по параметру "sort"
  if (sortParam) {
    filteredPerfumes = [...filteredPerfumes].sort((a, b) => {
      switch (sortParam) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        "xl:grid-cols-4 gap-x-3 gap-y-6 place-items-center"
      )}
    >
      {filteredPerfumes.map((perfume) => (
        <ParfumeCard key={perfume.id} {...perfume} />
      ))}
    </div>
  );
};
