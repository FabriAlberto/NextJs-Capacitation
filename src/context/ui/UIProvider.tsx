import { ReactElement, useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIActionsName, uiReducer } from "./uiReducer";
export type UIState = {
  isOpenMenu: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
};

const UI_INITIAL_STATE: UIState = {
  isOpenMenu: false,
  isAddingEntry: false,
  isDragging: false,
};

type Props = {
  children: ReactElement;
};

const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openMenu = () => {
    dispatch({ type: UIActionsName.OPEN_MENU });
  };
  const closeMenu = () => {
    dispatch({ type: UIActionsName.CLOSE_MENU });
  };
  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: UIActionsName.SET_IS_ADDING_ENTRY, payload: isAdding });
  };
  const handleDragging = (isDragging: boolean) => {
    dispatch({ type: UIActionsName.START_END_DRAGGING, payload: isDragging });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //Functions
        openMenu,
        closeMenu,
        setIsAddingEntry,
        handleDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
