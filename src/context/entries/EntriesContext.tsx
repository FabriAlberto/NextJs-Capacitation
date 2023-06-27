import { Entry, EntryStatus } from "@/types/entry";
import { createContext, useContext } from "react";

type ContextProps = {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  changedEntryStatus: (idEntry: string, entryDestination: EntryStatus) => void;
};
export const useEntriesContext = () => {
  return useContext(EntriesContext);
};
export const EntriesContext = createContext({} as ContextProps);
