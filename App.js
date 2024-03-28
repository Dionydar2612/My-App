const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/Login';
import AccountCreate from './screens/AccountCreate'
import homeapp from './screens/homeapp';
import choose from './screens/choose';
import homepage from './screens/homepage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="homeapp"
              component={homeapp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="choose"
              component={choose}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="homepage"
              component={homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountCreate"
              component={AccountCreate}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
  );
};

export default App;
