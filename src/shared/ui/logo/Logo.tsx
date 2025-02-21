import { cn } from "@/shared/core/cn/cn";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <span className={cn("text-3xl font-dynalight", className)}>AysParfume</span>
  );
};
