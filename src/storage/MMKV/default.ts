export const BOOK_KEY = "READER:books";


export interface Storage {
  databook: BookData;
  setBookData: (property: Exclude<keyof BookData, "currentlyReading" | "permissionToReadExternal">, value: Book[]) => void,
  setBookProperty: (id: string, property: Exclude<keyof BookData, "currentlyReading" | "permissionToReadExternal">, property2: keyof Book, value: string | boolean | number) => void,
  setCurrentlyReading: (value: Book) => void,
  setPermissionToReadExternal: (value: boolean) => void,
  getBookData: (property: keyof BookData) => BookData[keyof BookData],
  getProp: (id: string, property: Exclude<keyof BookData, "currentlyReading" | "permissionToReadExternal">) => Book,
}

export type Book = {
  id: string;
  uri: string;
  title: string;
  size?: number;
  extension?: string;
  inPage?: number;
  totalPages?: number;
  totalRead?: number;
};

export interface BookData {
  lastBooksRead: Book[];
  currentlyReading: Book | null;
  allBooks: Book[];
  permissionToReadExternal: boolean;
}

export const defaultBookData: BookData = {
  lastBooksRead: [],
  currentlyReading: null,
  allBooks: [],
  permissionToReadExternal: false,
};
