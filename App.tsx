import theme from "./src/theme";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";
import {
  useFonts,
  ReadexPro_400Regular,
  ReadexPro_700Bold,
} from "@expo-google-fonts/readex-pro";
import { Loading } from "@components/Loading";

import { Routes } from "./src/routes";

export default function App() {
  const [isLoaded] = useFonts({ ReadexPro_400Regular, ReadexPro_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.COLORS.NEUTRAL_900} barStyle={"light-content"} />
      {isLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
