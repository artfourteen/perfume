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

const sortItems = [
  {
    id: "1",
    label: "Цена: по убыванию",
    value: "price-desc",
  },
  {
    id: "2",
    label: "Цена: по возрастанию",
    value: "price-asc",
  },
  {
    id: "3",
    label: "Название: A-Z",
    value: "title-asc",
  },
  {
    id: "4",
    label: "Название: Z-A",
    value: "title-desc",
  },
];

export const Sort = () => {
  const [sort, setSort] = useState<string>("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (val: string) => {
    const params = new URLSearchParams(searchParams);

    if (val) {
      params.set("sort", val);
    } else {
      params.delete("sort");
    }

    setSort(val);
    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const currentSort = searchParams.get("sort") || "";
    setSort(currentSort);
  }, [searchParams]);

  return (
    <DropdonwProvider>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button className="normal-case bg-white text-black hover:bg-gray-100 active:bg-white font-light">
            <span>
              {sort
                ? sortItems.find((sortItem) => sortItem.value === sort)?.label
                : "Сортировать по..."}
            </span>
            <IoChevronDownOutline />
          </Button>
        </DropdownTrigger>
        <DropdownList className="right-0">
          {sortItems.map((sortItem) => (
            <DropdownItem asChild key={sortItem.id}>
              <Button
                onClick={() => handleChange(sortItem.value)}
                className={cn(
                  "normal-case bg-white text-black hover:bg-gray-100",
                  "font-light active:bg-white justify-between text-sm"
                )}
              >
                <span>{sortItem.label}</span>
                <IoCheckmark
                  className={cn("opacity-0 transition-all", {
                    "opacity-100": sortItem.value === sort,
                  })}
                />
              </Button>
            </DropdownItem>
          ))}
          {!!sort.length && (
            <DropdownItem asChild>
              <Button onClick={() => handleChange("")}>Сбросить</Button>
            </DropdownItem>
          )}
        </DropdownList>
      </Dropdown>
    </DropdonwProvider>
  );
};
