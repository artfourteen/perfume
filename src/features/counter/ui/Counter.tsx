"use client";

import { Button } from "@/shared/ui/button/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";

export interface CounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const Counter = ({
  count,
  handleDecrement,
  handleIncrement,
}: CounterProps) => {
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
