"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useDebouncedCallback } from "use-debounce";

export const Search = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term.trim().length) {
      params.set("search", term.trim());
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    handleSearch(value);
  };

  const handleClearInput = () => {
    setSearch("");
    const params = new URLSearchParams(searchParams);
    params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="border rounded-sm flex items-center gap-3 px-3 py-2 w-full">
      <CiSearch className="text-3xl text-gray-500" />
      <input
        type="text"
        placeholder="Поиск по товарам"
        value={search}
        onChange={handleInputChange}
        className="w-full text-lg font-light"
      />
      {search && (
        <button
          onClick={handleClearInput}
          className="text-xl text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoClose />
        </button>
      )}
    </div>
  );
};
