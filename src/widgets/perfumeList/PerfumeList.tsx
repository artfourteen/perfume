"use client";

import { ParfumeCard } from "@/entities/parfume/ui/ParfumeCard";
import { perfumes } from "@/shared/constants/perfumes";
import { cn } from "@/shared/core/cn/cn";
import { TbMoodEmpty } from "react-icons/tb";
import { useSearchParams } from "next/navigation";

export const PerfumeList = () => {
  const searchParams = useSearchParams();

  // Разбираем бренды (split по ",")
  const search = searchParams.get("search");
  const selectedBrands = searchParams.get("brands")?.split(",") || [];
  const sortParam = searchParams.get("sort");

  let filteredPerfumes = perfumes;
  // Фильтрация по поиску
  if (search) {
    filteredPerfumes = filteredPerfumes.filter(
      (perfume) =>
        perfume.title.toLowerCase().includes(search.toLowerCase()) ||
        perfume.brand.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Фильтрация по брендам
  if (selectedBrands.length > 0) {
    filteredPerfumes = filteredPerfumes.filter((perfume) =>
      selectedBrands.includes(perfume.brand)
    );
  }

  // Сортировка по параметру "sort"
  if (sortParam) {
    filteredPerfumes = [...filteredPerfumes].sort((a, b) => {
      const minPriceA = Math.min(...a.price);
      const minPriceB = Math.min(...b.price);

      switch (sortParam) {
        case "price-asc":
          return minPriceA - minPriceB;
        case "price-desc":
          return minPriceB - minPriceA;
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }

  if (!filteredPerfumes.length) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 gap-1 text-3xl font-light">
        <TbMoodEmpty className="stroke-1 text-9xl" />
        <h3 className="uppercase">Ничего не найдено</h3>
      </div>
    );
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
