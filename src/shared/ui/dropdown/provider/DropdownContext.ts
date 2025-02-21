import { createContext } from "react";

export const DropdownContext = createContext({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});
