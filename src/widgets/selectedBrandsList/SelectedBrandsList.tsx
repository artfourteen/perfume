"use client";

import { cn } from "@/shared/core/cn/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

export const SelectedBrandsList = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const selectedBrands = searchParams.get("brands")?.split(",") || [];

  const handleDelete = (val: string) => {
    const params = new URLSearchParams(searchParams);
    const updatedBrands = selectedBrands.filter((brand) => brand !== val);

    if (updatedBrands.length > 0) {
      params.set("brands", updatedBrands.join(","));
    } else {
      params.delete("brands");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {selectedBrands.map((brand) => (
        <button
          key={brand}
          onClick={() => handleDelete(brand)}
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
