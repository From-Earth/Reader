import AsyncStorage from "@react-native-async-storage/async-storage";
import { BOOK_KEY, Book, BookData, defaultBookData } from "./default";
import { create } from "zustand";

interface BookDataStore {
  bookData: BookData;
  setBookData: (property: keyof BookData, value: any) => void;
  resetBookData: (property: keyof BookData) => void;
}

export const useBookDataStore = create<BookDataStore>((set, get) => {
  const bookData: BookData = {} as any;

  (async () => {
    const data = await AsyncStorage.getItem(BOOK_KEY);
    if (data) {
      set({ bookData: JSON.parse(data) });
    } else {
      await AsyncStorage.setItem(BOOK_KEY, JSON.stringify(defaultBookData));
      set({ bookData: defaultBookData });
    }
  })();

  async function setBookData(property: keyof BookData, value: any) {
    await AsyncStorage.setItem(
      BOOK_KEY,
      JSON.stringify({ ...get().bookData, [property]: value })
    );
    set({ bookData: { ...get().bookData, [property]: value } });
  }

  async function setBookProperty(
    value: any,
    index: number,
    property: Exclude<keyof BookData, "currentlyReading">,
    property2: keyof Book
  ) {
    bookData[property][index][property2] = value;
    await AsyncStorage.setItem(BOOK_KEY, JSON.stringify({ ...get().bookData }));
  }

  async function resetBookData(property: keyof BookData) {
    await AsyncStorage.setItem(
      BOOK_KEY,
      JSON.stringify({
        ...get().bookData,
        [property]: defaultBookData[property],
      })
    );
    set({
      bookData: { ...get().bookData, [property]: defaultBookData[property] },
    });
  }

  return {
    bookData,
    setBookData,
    resetBookData,
    setBookProperty
  };
});
