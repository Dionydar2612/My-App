import { StatusBar } from "expo-status-bar";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function App() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                padding: 10,
                flexDirection: "row",
                width: "95%",
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                alignItems: "center",
                left: 20,
                top: 0,
                position: "absolute",
                zIndex:1000,
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
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 40, marginTop: 100, position: 'absolute' }} source={require("../assets/Food.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 40, marginTop: 200, position: 'absolute' }} source={require("../assets/Meates.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 40, marginTop: 300, position: 'absolute' }} source={require("../assets/Fruits.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{ marginLeft: 40, marginTop: 400, position: 'absolute' }} source={require("../assets/Vegetables.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={{ marginLeft: 40, marginTop: 500, position: 'absolute' }} source={require("../assets/Snacks.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={{ marginLeft: 40, marginTop: 600, position: 'absolute' }} source={require("../assets/Drinks.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={{ marginLeft: 40, marginTop: 700, position: 'absolute' }} source={require("../assets/ETC.png")} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

});