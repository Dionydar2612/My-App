import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SimpleLineIcons } from "@expo/vector-icons";
import "react-native-gesture-handler"; 
import HomeScreen from '../compo/home';
import ProfileScreen from '../compo/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#81D7D2",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}>
        <Drawer.Screen name="Menu" options={{
            drawerLabel: "Home",
            title: "Menu", 
          }} component={HomeScreen} />

        <Drawer.Screen name="Profile" component={ProfileScreen} />
        

      </Drawer.Navigator>
    </NavigationContainer>
  );
}






