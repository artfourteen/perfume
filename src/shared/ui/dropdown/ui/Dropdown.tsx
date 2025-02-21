import { cn } from "@/shared/core/cn/cn";
import { Slot } from "@radix-ui/react-slot";
import {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { DropdonwProvider } from "../provider/DropdownProvider";
import { useDropdown } from "../provider/useDropdown";

interface DropdownProps extends PropsWithChildren {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ children, isOpen, setIsOpen }: DropdownProps) => {
  return (
    <DropdonwProvider isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="relative">{children}</div>
    </DropdonwProvider>
  );
};

interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const DropdownTrigger = ({
  asChild = false,
  children,
  className,
  ...props
}: DropdownProps) => {
  const { isOpen, toggle } = useDropdown();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      aria-haspopup="menu"
      aria-expanded={isOpen}
      onClick={toggle}
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  hideWhenClick?: boolean;
}

const DropdownItem = ({
  asChild,
  className,
  children,
  hideWhenClick = true,
  ...props
}: DropdownItemProps) => {
  const { close } = useDropdown();
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      role="menuitem"
      onClick={() => {
        if (hideWhenClick) close();
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Comp>
  );
};

const DropdownList = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const { isOpen, close } = useDropdown();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        ref.current &&
        !ref.current.contains(target) &&
        !target.closest("[aria-haspopup='menu']")
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      role="menu"
      className={cn(
        "bg-white absolute top-12 z-30 flex flex-col gap-1",
        "opacity-0 transition-all border rounded-md shadow-sm p-2 w-60",
        {
          "opacity-100": isOpen,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Dropdown, DropdownItem, DropdownList, DropdownTrigger };
