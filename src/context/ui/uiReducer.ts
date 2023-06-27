import { UIState } from "./UIProvider";

export enum UIActionsName {
  OPEN_MENU = "UI_OPEN_MENU",
  CLOSE_MENU = "UI_CLOSE_MENU",
  SET_IS_ADDING_ENTRY = "SET_IS_ADDING_ENTRY",
  START_END_DRAGGING = "START_END_DRAGGING",
}
type UIActionType =
  | { type: UIActionsName.OPEN_MENU }
  | { type: UIActionsName.CLOSE_MENU }
  | { type: UIActionsName.SET_IS_ADDING_ENTRY; payload: boolean }
  | { type: UIActionsName.START_END_DRAGGING; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case UIActionsName.OPEN_MENU: {
      return {
        ...state,
        isOpenMenu: true,
      };
    }
    case UIActionsName.CLOSE_MENU: {
      return {
        ...state,
        isOpenMenu: false,
      };
    }
    case UIActionsName.SET_IS_ADDING_ENTRY: {
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    }
    case UIActionsName.START_END_DRAGGING: {
      return {
        ...state,
        isDragging: action.payload,
      };
    }
    default:
      return state;
  }
};
