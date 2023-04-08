import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { config, defaultConfig } from "./default";

interface ConfigStore {
  config: config;
  setConfig: (property: keyof config, value: any) => void;
  getConfig: (property: keyof config) => any;
  resetConfig: (property: keyof config) => void;
}

const CONFIG_KEY = "READER:configs";

export const useConfigStore = create<ConfigStore>((set, get) => {
  const config: config = {} as any;

  (async () => {
    const data = await AsyncStorage.getItem(CONFIG_KEY);
    if (data) {
      set({ config: JSON.parse(data) });
    } else {
      await AsyncStorage.setItem(CONFIG_KEY, JSON.stringify(defaultConfig));
      set({ config: defaultConfig });
    }
  })();

  async function setConfig(property: keyof config, value: any) {
    await AsyncStorage.setItem(
      CONFIG_KEY,
      JSON.stringify({ ...get().config, [property]: value })
    );
    set({ config: { ...get().config, [property]: value } });
  }

  function getConfig(property: keyof config) {
    return get().config[property];
  }

  async function resetConfig(property: keyof config) {
    await AsyncStorage.setItem(
      CONFIG_KEY,
      JSON.stringify({ ...get().config, [property]: defaultConfig[property] })
    );
    set({
      config: { ...get().config, [property]: defaultConfig[property] },
    });
  }

  return {
    config,
    getConfig,
    setConfig,
    resetConfig,
  };
});
