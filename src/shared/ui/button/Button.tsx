import { cn } from "@/shared/core/cn/cn";
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";
import { ButtonSizeType, ButtonVariantsType } from "./button";
import {
  buttonDefaultStyles,
  buttonSizes,
  buttonVariants,
} from "./button.config";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantsType;
  size?: ButtonSizeType;
  asChild?: boolean;
}

export const Button = ({
  variant = "default",
  size = "default",
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        buttonDefaultStyles,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
