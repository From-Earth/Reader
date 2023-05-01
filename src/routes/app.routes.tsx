import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { Settings } from "@screens/Settings";
import { Account } from "@screens/Account";
import { SearchBarBehavior } from "@screens/SearchBar";
import { ChipsConfig } from "@screens/Chips";
import { Books } from "@screens/Book";
import { Register } from "@screens/Register";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right", //<-- this is what will do the trick
        presentation: "transparentModal",
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Account" component={Account} />
      <Screen name="Search" component={SearchBarBehavior} />
      <Screen name="Chips" component={ChipsConfig} />
      <Screen name="Book" component={Books} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
