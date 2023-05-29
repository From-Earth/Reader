import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { StateStorage, persist } from "zustand/middleware";
import { BOOK_KEY, Book, BookData, defaultBookData } from "./default";
import { Storage } from "./default";

const zustandAsyncStorage: StateStorage = {
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, value);
  },
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ?? null;
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

export const useAsyncStore = create<Storage, [["zustand/persist", Storage]]>(
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
      setRecentBook(value) {
        const currentLastBooksRead = get().databook.lastBooksRead;
        if (currentLastBooksRead.some((book) => book.id === value.id)) {
          // If the book already exists in the lastBooksRead array, don't add it again
          return;
        }
        const updatedLastBooksRead = [value, ...currentLastBooksRead];
        if (updatedLastBooksRead.length >= 6) {
          updatedLastBooksRead.pop();
        }
        const updatedData = {
          ...get().databook,
          lastBooksRead: updatedLastBooksRead,
        };
        set({ databook: updatedData });
      },
      setBookProperty: (id, property, property2, value) => {
        const index = get().databook[property].findIndex(
          (book) => book.id === id
        );
        if (index === -1) return; // if the book with the given ID is not found, do nothing
        const newData = [...get().databook[property]];
        newData[index] = { ...newData[index], [property2]: value };
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
      getStorage: () => zustandAsyncStorage,
      serialize: (state) => JSON.stringify(state),
      deserialize: (state) => JSON.parse(state),
    }
  )
);
