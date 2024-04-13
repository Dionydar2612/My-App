import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";



function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
              <StatusBar style="auto" />
              <View style={{
                  padding: 10,
                  flexDirection: "row",
                  width: "95%",
                  backgroundColor: "#FFFFFF",
                  borderRadius: 10,
                  alignItems: "center",
                  left: 20,
                  top: 10,
                  position: "absolute"
              }}>
                  <Feather
                      name="search"
                      size={22}
                      color="black"
                      style={{ marginLeft: -4, marginRight: 4 }}
                  />
                  <TextInput style={{
                      marginTop: 10,
                      paddingBottom: 10,
                      borderBottomColor: "#eee",
                      fontSize: 22,
                  }} placeholder="Search" />
                  <Text style={{
                      borderWidth: 1,
                      borderColor: 'gray',
                      borderRadius: 8,
                      padding: 10,
                      width: 390,
                      left: -10, zIndex: -99, position: 'absolute',
                  }}> </Text>
              </View>
              <View>
                  <TouchableOpacity onPress={() => navigation.navigate("Stock Check")}>
                      <Image style={{ marginLeft: 40, marginTop: 100, position: 'absolute' }} source={require("../assets/boxstock.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Price Set & Promotions")}>
                  <Image style={{ marginLeft: 210, marginTop: 100, position: 'absolute' }} source={require("../assets/boxpromo.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Add Stock")}>
                  <Image style={{ marginLeft: 40, marginTop: 240, position: 'absolute' }} source={require("../assets/boxcheck.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Cash Summary")}>
                  <Image style={{ marginLeft: 210, marginTop: 240, position: 'absolute' }} source={require("../assets/boxcash.png")} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Count")}>
                  <Image style={{ marginLeft: 70, marginTop: 390, position: 'absolute' }} source={require("../assets/boxcount.png")} />
                  </TouchableOpacity>
                  
              </View>
          </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
  });

  export default HomeScreen;