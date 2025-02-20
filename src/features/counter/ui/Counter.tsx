"use client";

import { Button } from "@/shared/ui/button/Button";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex items-center gap-6 border py-2 px-3 w-fit">
      <Button
        className="p-0 h-auto w-auto bg-transparent text-black shadow-none hover:bg-transparent active:bg-transparent"
        disabled={count < 2}
        onClick={handleDecrement}
      >
        <FaMinus />
      </Button>
      <span className="text-lg font-light">{count}</span>
      <Button
        className="p-0 h-auto w-auto bg-transparent text-black shadow-none hover:bg-transparent active:bg-transparent"
        onClick={handleIncrement}
      >
        <FaPlus />
      </Button>
    </div>
  );
};
