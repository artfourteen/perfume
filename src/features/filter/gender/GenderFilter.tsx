"use client";

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

type GenderType = "male" | "female" | "unisex";

const genderFilterItems: { id: string; label: string; value: GenderType }[] = [
  {
    id: "1",
    label: "Мужские",
    value: "male",
  },
  {
    id: "2",
    label: "Женские",
    value: "female",
  },
  {
    id: "3",
    label: "Унисекс",
    value: "unisex",
  },
];

export const GenderFilter = () => {
  const [activeGender, setActiveGender] = useState<GenderType | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const currentBrand = searchParams.get("gender") as GenderType;
    setActiveGender(currentBrand);
  }, [searchParams]);

  const handleChange = (val: GenderType | null) => {
    const params = new URLSearchParams(searchParams);

    if (val) {
      params.set("gender", val);
    } else {
      params.delete("gender");
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
              {activeGender
                ? genderFilterItems.find(
                    (gender) => gender.value === activeGender
                  )?.label
                : "Фильтр по полу"}
            </span>
            <IoChevronDownOutline />
          </Button>
        </DropdownTrigger>
        <DropdownList className="left-0">
          {genderFilterItems.map((gender) => (
            <DropdownItem key={gender.id} asChild>
              <Button
                onClick={() => handleChange(gender.value)}
                className={cn(
                  "normal-case bg-white text-sm font-light text-black",
                  "hover:bg-gray-100 active:bg-white justify-between"
                )}
              >
                <span>{gender.label}</span>
                <IoCheckmark
                  className={cn("opacity-0 transition-all", {
                    "opacity-100": gender.value === activeGender,
                  })}
                />
              </Button>
            </DropdownItem>
          ))}
          {activeGender && (
            <DropdownItem asChild>
              <Button onClick={() => handleChange(null)}>Сбросить</Button>
            </DropdownItem>
          )}
        </DropdownList>
      </Dropdown>
    </DropdonwProvider>
  );
};
