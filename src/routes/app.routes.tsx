import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Settings } from "@screens/Settings";
import { Account } from "@screens/Account";
import { SearchBarBehavior } from "@screens/SearchBar";
import { ChipsConfig } from "@screens/Chips";
import { Book } from "@screens/Book";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Account" component={Account} />
      <Screen name="Search" component={SearchBarBehavior} />
      <Screen name="Chips" component={ChipsConfig} />
      <Screen name="Books" component={Book} />
    </Navigator>
  );
}