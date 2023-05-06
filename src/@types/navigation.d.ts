import { Book } from "@storage/readingData/default";
import { Register } from "../screens/Register/index";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Settings: undefined;
      Login: undefined;
      Cards: undefined;
      Header: undefined;
      Search: undefined;
      Background: undefined;
      LocalDocuments: undefined;
      Chips: undefined;
      Book: Book;
      Register: undefined;
    }
  }
}
