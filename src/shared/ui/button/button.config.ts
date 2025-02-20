import { ButtonSizeType, ButtonVariantsType } from "./button";

export const buttonVariants: Record<ButtonVariantsType, string> = {
  default: "bg-black text-white shadow hover:bg-black/80 active:bg-black/90",
  secondary:
    "bg-white text-black shadow-sm hover:bg-white/80 active:bg-white/90",
};

export const buttonSizes: Record<ButtonSizeType, string> = {
  default: "h-9 px-4 py-2",
  sm: "h-8 px-3 text-xs",
  lg: "h-10 px-8",
  icon: "h-9 w-9",
};

export const buttonDefaultStyles = `
  inline-flex items-center justify-center gap-2 capitalize
  transition-colors whitespace-nowrap 
  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:stroke-current
`;
