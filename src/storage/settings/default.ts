export const defaultConfig: config = {
  searchIsActive: true,
  patternsIsActive: false,
  pattern: "",
  onlyFindLocalFiles: false,
  chipsIsActive: true,
  chipsColorIsActive: false,
  colorStateComplete: `#22C55E`,
  colorStateIncomplete: `#D9D9D9`,
  account: {
    id: 0,
    token: "",
    isAuthenticated: false,
    password: "",
    email: "",
    name: "",
  },
};

export interface config {
  searchIsActive: boolean;
  patternsIsActive: boolean;
  pattern: string;
  onlyFindLocalFiles: boolean;
  chipsIsActive: boolean;
  chipsColorIsActive: boolean;
  colorStateComplete: string;
  colorStateIncomplete: string;
  account: {
    token?: string;
    id?: number;
    isAuthenticated: boolean;
    password: string;
    email: string;
    name: string;
  };
}
