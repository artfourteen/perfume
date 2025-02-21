import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { DropdownContext } from "./DropdownContext";

interface DropdownProviderProps extends PropsWithChildren {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdonwProvider = ({
  children,
  isOpen: externalIsOpen,
  setIsOpen: externalSetIsOpen,
}: DropdownProviderProps) => {
  const [internalIsOpen, internalSetIsOpen] = useState(false);

  const isOpen = externalIsOpen ?? internalIsOpen;

  const toggle = () => {
    if (externalSetIsOpen) {
      externalSetIsOpen(!isOpen);
    } else {
      internalSetIsOpen(!isOpen);
    }
  };

  const close = () => {
    if (externalSetIsOpen) {
      externalSetIsOpen(false);
    } else {
      internalSetIsOpen(false);
    }
  };

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </DropdownContext.Provider>
  );
};
