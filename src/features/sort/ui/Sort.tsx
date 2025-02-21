"use client";

import { FaCheck } from "react-icons/fa6";
import { Button } from "@/shared/ui/button/Button";
import { DropdonwProvider } from "@/shared/ui/dropdown/provider/DropdownProvider";
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from "@/shared/ui/dropdown/ui/Dropdown";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/shared/core/cn/cn";

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
  const [open, setOpen] = useState<boolean>(false);
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
    <DropdonwProvider isOpen={open} setIsOpen={setOpen}>
      <Dropdown>
        <DropdownTrigger asChild>
          <Button className="normal-case bg-white text-black hover:bg-gray-100 active:bg-white">
            <span>
              {sort
                ? sortItems.find((sortItem) => sortItem.value === sort)?.label
                : "Сортировать по..."}
            </span>
            <FaAngleDown />
          </Button>
        </DropdownTrigger>
        <DropdownList className="right-0">
          {sortItems.map((sortItem) => (
            <DropdownItem asChild key={sortItem.id}>
              <Button
                onClick={() => handleChange(sortItem.value)}
                className="normal-case bg-white text-black hover:bg-gray-100 active:bg-white justify-between"
              >
                <span>{sortItem.label}</span>
                <FaCheck
                  className={cn("opacity-0 transition-all text-sm", {
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
