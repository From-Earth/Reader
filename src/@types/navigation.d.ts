import { Book } from '@storage/readingData/default';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Settings: undefined;
      Account: undefined;
      Cards: undefined;
      Header: undefined;
      Search: undefined;
      Background: undefined;
      LocalDocuments: undefined;
      Chips: undefined
      Book: Book;
    }
  }
}
