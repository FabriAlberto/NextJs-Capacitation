import { ReactElement, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext } from "./EntriesContext";
import { EntriesActionsName, entriesReducer } from "./entriesReducer";
import { Entry, EntryStatus } from "@/types/entry";

export type EntriesState = {
  entries: Entry[];
};

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "description of entrie",
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "description of fabr",
      status: EntryStatus.IN_PROGRESS,
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "description of asfasf",
      status: EntryStatus.FINISHED,
      createdAt: Date.now() - 100000,
    },
  ],
};
type Props = {
  children: ReactElement;
};

const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: EntryStatus.PENDING,
    };
    dispatch({ type: EntriesActionsName.ADD_ENTRIE, payload: newEntry });
  };
  const changedEntryStatus = (idEntry: string, status: EntryStatus) => {
    dispatch({
      type: EntriesActionsName.CHANGED_ENTRY_STATUS,
      payload: { idEntry, entryDestination: status },
    });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //FUNCTIONS
        addNewEntry,
        changedEntryStatus
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};

export default EntriesProvider;
