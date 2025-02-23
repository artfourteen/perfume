"use client";

import { brands } from "@/shared/constants/perfumes";
import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import { DropdonwProvider } from "@/shared/ui/dropdown/provider/DropdownProvider";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from "@/shared/ui/dropdown/ui/Dropdown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCheckmark, IoChevronDownOutline } from "react-icons/io5";

export const BrandFilter = () => {
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const currentBrands = searchParams.get("brands")?.split(",") || [];
    setActiveBrands(currentBrands);
  }, [searchParams]);

  const handleChange = (val: string) => {
    const params = new URLSearchParams(searchParams);
    let updatedBrands;

    if (activeBrands.includes(val)) {
      updatedBrands = activeBrands.filter((brand) => brand !== val);
    } else {
      updatedBrands = [...activeBrands, val];
    }

    setActiveBrands(updatedBrands);

    if (updatedBrands.length) {
      params.set("brands", updatedBrands.join(","));
    } else {
      params.delete("brands");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdonwProvider>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button className="normal-case bg-white text-black hover:bg-gray-100 active:bg-white font-light">
            <span>
              {/* {sort
                ? sortItems.find((sortItem) => sortItem.value === sort)?.label
                : "Сортировать по..."} */}
              Бренды
            </span>
            <IoChevronDownOutline />
          </Button>
        </DropdownTrigger>
        <DropdownList className="left-auto max-h-96 overflow-y-auto">
          {brands.map((brand) => (
            <DropdownItem key={brand} asChild>
              <Button
                onClick={() => handleChange(brand)}
                className={cn(
                  "normal-case bg-white text-sm font-light text-black",
                  "hover:bg-gray-100 active:bg-white justify-between"
                )}
              >
                <span>{brand}</span>
                <IoCheckmark
                  className={cn("opacity-0 transition-all", {
                    "opacity-100": activeBrands.includes(brand),
                  })}
                />
              </Button>
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
    </DropdonwProvider>
  );
};
