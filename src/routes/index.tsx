import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { ConfigProvider } from "@storage/settings/storage";

export function Routes() {
  const { COLORS } = useTheme();
  return (

    <View style={{
      flex: 1,
      backgroundColor: COLORS.NEUTRAL_900
    }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
