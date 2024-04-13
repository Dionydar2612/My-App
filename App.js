import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
import { TouchableOpacity } from 'react-native';

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';
import 'react-native-gesture-handler';

import Login from './screens/Login';
import AccountCreate from './screens/AccountCreate'
import homeapp from './screens/homeapp';
import choose from './screens/choose';

import DrawerContent from './content';

import HomeScreen from "./insignscreena/HomeScreen";
import DetailsScreen from "./insignscreena/DetailsScreen";
import Stock from "./insignscreena/Stock";
import Add from "./insignscreena/add";
import promo from "./insignscreena/promo";
import cash from "./insignscreena/cashsum";



function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerStyle: { backgroundColor: '#81D7D2' }, headerTintColor: '#000000', }} />
      <Drawer.Screen
        name="Count"
        component={DetailsScreen}
        options={{ headerStyle: { backgroundColor: '#81D7D2' }, headerTintColor: '#000000', }} />
      <Drawer.Screen
        options={{ headerShown: false }}
        name="SignOut"
        component={homeapp} />
      <Drawer.Screen
        name="Stock Check"
        component={Stock}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#FFE589' },
          headerTintColor: '#000000',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={24} color="#000000" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="chevron-left" size={24} color="#000000" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })}
         />
        <Drawer.Screen
        name="Add Stock"
        component={Add}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#FFE589' },
          headerTintColor: '#000000',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={24} color="#000000" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="chevron-left" size={24} color="#000000" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })} />
        <Drawer.Screen
        name="Price Set & Promotions"
        component={promo}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#FFE589' },
          headerTintColor: '#000000',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={24} color="#000000" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="chevron-left" size={24} color="#000000" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })} />
        <Drawer.Screen
        name="Cash Summary"
        component={cash}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#FFE589' },
          headerTintColor: '#000000',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="menu" size={24} color="#000000" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Icon name="chevron-left" size={24} color="#000000" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
        })} />
    </Drawer.Navigator>
    
  );
}

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
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountCreate"
            component={AccountCreate}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;


