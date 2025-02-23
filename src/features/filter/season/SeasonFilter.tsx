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

type SeasonType = "summer" | "fall" | "winter" | "spring";

const seasonFilterItems: { id: string; label: string; value: SeasonType }[] = [
  {
    id: "1",
    label: "Лето",
    value: "summer",
  },
  {
    id: "2",
    label: "Осень",
    value: "fall",
  },
  {
    id: "3",
    label: "Зима",
    value: "winter",
  },
  {
    id: "4",
    label: "Весна",
    value: "spring",
  },
];

export const SeasonFilter = () => {
  const [activeSeason, setActiveSeason] = useState<SeasonType | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const currentBrand = searchParams.get("season") as SeasonType;
    setActiveSeason(currentBrand);
  }, [searchParams]);

  const handleChange = (val: SeasonType | null) => {
    const params = new URLSearchParams(searchParams);

    if (val) {
      params.set("season", val);
    } else {
      params.delete("season");
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
              {activeSeason
                ? seasonFilterItems.find(
                    (season) => season.value === activeSeason
                  )?.label
                : "Сезон"}
            </span>
            <IoChevronDownOutline />
          </Button>
        </DropdownTrigger>
        <DropdownList className="right-0">
          {seasonFilterItems.map((season) => (
            <DropdownItem key={season.id} asChild>
              <Button
                onClick={() => handleChange(season.value)}
                className={cn(
                  "normal-case bg-white text-sm font-light text-black",
                  "hover:bg-gray-100 active:bg-white justify-between"
                )}
              >
                <span>{season.label}</span>
                <IoCheckmark
                  className={cn("opacity-0 transition-all", {
                    "opacity-100": season.value === activeSeason,
                  })}
                />
              </Button>
            </DropdownItem>
          ))}
          {activeSeason && (
            <DropdownItem asChild>
              <Button onClick={() => handleChange(null)}>Сбросить</Button>
            </DropdownItem>
          )}
        </DropdownList>
      </Dropdown>
    </DropdonwProvider>
  );
};
