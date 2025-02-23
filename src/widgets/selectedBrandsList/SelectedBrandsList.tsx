"use client";

import { cn } from "@/shared/core/cn/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

type GenderType = "male" | "female" | "unisex";
type SeasonType = "summer" | "fall" | "winter" | "spring";

const getGenderLabel = (val: GenderType) => {
  switch (val) {
    case "male":
      return "Мужские";
    case "female":
      return "Женские";
    case "unisex":
      return "Унисекс";
  }
};

const getSeasonLabel = (val: SeasonType) => {
  switch (val) {
    case "summer":
      return "Лето";
    case "fall":
      return "Осень";
    case "winter":
      return "Зима";
    case "spring":
      return "Весна";
  }
};

export const SelectedBrandsList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const selectedBrands = searchParams.get("brands")?.split(",") || [];
  const selectedGender = searchParams.get("gender");
  const selectedSeason = searchParams.get("season");

  const handleDelete = (
    variant: "brands" | "gender" | "season",
    val: string
  ) => {
    const params = new URLSearchParams(searchParams);

    switch (variant) {
      case "brands":
        const updatedBrands = selectedBrands.filter((brand) => brand !== val);

        if (updatedBrands.length > 0) {
          params.set("brands", updatedBrands.join(","));
        } else {
          params.delete("brands");
        }
        break;
      case "gender":
        params.delete("gender");
        break;
      case "season":
        params.delete("season");
        break;
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {selectedGender && (
        <button
          onClick={() => handleDelete("gender", "")}
          className={cn(
            "border border-black/50 rounded-full py-1 px-3 text-sm transition-all",
            "font-light flex items-center gap-1 bg-white hover:bg-gray-100"
          )}
        >
          {getGenderLabel(selectedGender as GenderType)}
          <IoCloseOutline />
        </button>
      )}
      {selectedSeason && (
        <button
          onClick={() => handleDelete("season", "")}
          className={cn(
            "border border-black/50 rounded-full py-1 px-3 text-sm transition-all",
            "font-light flex items-center gap-1 bg-white hover:bg-gray-100"
          )}
        >
          {getSeasonLabel(selectedSeason as SeasonType)}
          <IoCloseOutline />
        </button>
      )}
      {selectedBrands.map((brand) => (
        <button
          key={brand}
          onClick={() => handleDelete("brands", brand)}
          className={cn(
            "border border-black/50 rounded-full py-1 px-3 text-sm transition-all",
            "font-light flex items-center gap-1 bg-white hover:bg-gray-100"
          )}
        >
          {brand}
          <IoCloseOutline />
        </button>
      ))}
    </div>
  );
};
