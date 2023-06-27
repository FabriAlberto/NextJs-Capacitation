import { createContext,useContext } from "react";

type ContextProps = {
  isOpenMenu: boolean;
  isAddingEntry:boolean;
  openMenu:()=>void;
  closeMenu:()=>void;
  setIsAddingEntry:(isAdding:boolean)=>void;
  handleDragging:(isDragging:boolean)=>void;
  isDragging:boolean;
};

export const useUiContext = () => {
  return useContext(UIContext);
};

export const UIContext = createContext({} as ContextProps);
