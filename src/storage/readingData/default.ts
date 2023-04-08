export const BOOK_KEY = "READER:books";

export type Book = {
    id: string;
    uri: string;
    text: string;
    ReadStats: string;
    title: string;
  }
  
  export interface BookData {
    lastBooksRead: Book[];
    currentlyReading: Book | null;
    allBooks: Book[];
  }
  
  export const defaultBookData: BookData = {
    lastBooksRead: [],
    currentlyReading: null,
    allBooks: [],
  };
