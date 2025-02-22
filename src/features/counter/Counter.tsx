"use client";

import { cn } from "@/shared/core/cn/cn";
import { Button } from "@/shared/ui/button/Button";
import { FiPlus, FiMinus } from "react-icons/fi";

export interface CounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  size?: "default" | "sm";
}

export const Counter = ({
  count,
  handleDecrement,
  handleIncrement,
  size = "default",
}: CounterProps) => {
  return (
    <div
      className={cn("flex items-center gap-6 border py-2 px-3 w-fit", {
        "py-1 px-2 gap-3": size === "sm",
      })}
    >
      <Button
        className="p-0 h-auto w-auto bg-transparent text-black shadow-none hover:bg-transparent active:bg-transparent"
        disabled={count < 2}
        onClick={handleDecrement}
      >
        <FiMinus
          className={cn("text-inherit", {
            "text-sm": size === "sm",
          })}
        />
      </Button>
      <span
        className={cn("text-lg font-light", {
          "text-base": size === "sm",
        })}
      >
        {count}
      </span>
      <Button
        className="p-0 h-auto w-auto bg-transparent text-black shadow-none hover:bg-transparent active:bg-transparent"
        onClick={handleIncrement}
      >
        <FiPlus
          className={cn("text-inherit", {
            "text-sm": size === "sm",
          })}
        />
      </Button>
    </div>
  );
};
