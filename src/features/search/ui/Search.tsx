"use client";

import { ChangeEvent, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="border rounded-sm flex items-center gap-3 px-3 py-2 w-full">
      <CiSearch className="text-3xl text-gray-500" />
      <input
        type="text"
        placeholder="Поиск по товарам"
        value={search}
        onChange={(e) => handleSearchChange(e)}
        className="w-full text-lg font-light"
      />
      {!!search.length && (
        <button
          onClick={() => setSearch("")}
          className="text-xl text-gray-500 hover:text-gray-700 transition-all"
        >
          <IoClose />
        </button>
      )}
    </div>
  );
};
