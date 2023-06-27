import { Entry, EntryStatus } from "@/types/entry";
import { EntriesState } from "./EntriesProvider";

export enum EntriesActionsName {
  ADD_ENTRIE = "ADD_ENTRY",
  CLOSE_MENU = "ENTRIES_CLOSE_MENU",
  CHANGED_ENTRY_STATUS = "CHANGED_ENTRY_STATUS",
}

type EntriesActionType =
  | { type: EntriesActionsName.ADD_ENTRIE; payload: Entry }
  | { type: EntriesActionsName.CLOSE_MENU; payload: number }
  | {
      type: EntriesActionsName.CHANGED_ENTRY_STATUS;
      payload: { idEntry: string; entryDestination: EntryStatus };
    };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case EntriesActionsName.ADD_ENTRIE: {
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    }
    case EntriesActionsName.CHANGED_ENTRY_STATUS: {
      const newEntries = state.entries.map((entry) => {
        if (entry._id === action.payload.idEntry) {
          return { ...entry, status: action.payload.entryDestination };
        }
        return entry;
      });
      return {
        ...state,
        entries: [...newEntries],
      };
    }
    default:
      return state;
  }
};
