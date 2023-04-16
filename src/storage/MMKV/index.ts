import { MMKV } from "react-native-mmkv";
import { create } from "zustand";
import { persist, StateStorage } from "zustand/middleware";
import { BookData, Book } from "./default";
import { defaultBookData, BOOK_KEY } from "./default";
import { Storage } from "./default";

export const persistStorage = new MMKV({ id: `${BOOK_KEY}` });

const zustandMMKVStorage: StateStorage = {
  setItem: (name, value) => {
    return persistStorage.set(name, value);
  },
  getItem: (name) => {
    const value = persistStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return persistStorage.delete(name);
  },
};

export const useMMKVStore = create<Storage, [["zustand/persist", Storage]]>(
  persist(
    (set, get) => ({
      databook: { ...defaultBookData },
      setBookData: (
        property: Exclude<
          keyof BookData,
          "currentlyReading" | "permissionToReadExternal"
        >,
        value: Book[]
      ) => {
        set({
          databook: { ...get().databook, [property]: value },
        });
      },
      setBookProperty: (id, property, property2, value) => {
        const index = get().databook[property].findIndex((book) => book.id === id);
        if (index === -1) return; // if the book with the given ID is not found, do nothing
        const newData = [...get().databook[property]];
        newData[index] = { ...newData[index], [`${property2}`]: value };
        const updatedData = { ...get().databook, [property]: newData };
        set({ databook: updatedData });
      },
      setCurrentlyReading: (value: Book) => {
        const updatedData = { ...get().databook, currentlyReading: value };
        set({ databook: updatedData });
      },
      setPermissionToReadExternal: (value: boolean) => {
        const updatedData = {
          ...get().databook,
          permissionToReadExternal: value,
        };
        set({ databook: updatedData });
      },
      getBookData: (property: keyof BookData) => get().databook[property],
      getProp: (
        id: string,
        property: Exclude<
          keyof BookData,
          "currentlyReading" | "permissionToReadExternal"
        >
      ) => {
        const index = get().databook[property].findIndex(
          (book) => book.id === id
        );
        return get().databook[property][index];
      },
    }),
    {
      name: `${BOOK_KEY}`,
      getStorage: () => zustandMMKVStorage,
      serialize: (state) => JSON.stringify(state),
      deserialize: (state) => JSON.parse(state),
    }
  )
);
