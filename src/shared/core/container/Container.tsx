import { PropsWithChildren } from "react";
import { cn } from "../cn/cn";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-4 md:px-0", className)}>{children}</div>
  );
};
