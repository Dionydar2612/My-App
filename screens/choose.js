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
            <StatusBar style="auto" />
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View style={styles.content}>
                    <Image
                        style={styles.frame2608156}
                        contentFit="cover"
                        source={require("../assets/header.png")}
                    />
                    <Image
                        style={styles.stock}
                        contentFit="cover"
                        source={require("../assets/stock.png")}
                    />
                    <View style={styles.content}>
                        <Text style={styles.title}>Welcome to </Text>
                        <Text style={styles.title1}>My Shop Manager</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AccountCreate")}>
                    <Text style={styles.btc}>Create account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.btc} >Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        paddingHorizontal: 30,
    },
    title: {
        top: -100,
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 1,
        textAlign: "center",
        zIndex: 999,
    },
    title1: {
        top: -100,
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 1,
        textAlign: "center",
        zIndex: 999,
    },
    frame2608156: {
        left: -150,
        width: 369,
        height: 435,
        top: -394,
        position: "absolute",
    },
    stock: {
        left: 40,
        width: 369,
        height: 435,
        top: 80,
        position: "absolute",
        zIndex: 999,
    },
    button: {
        alignItems: 'center',
        padding: 5,
        top: -30,
        backgroundColor: "#C6EBB6",
        padding: 14,
        borderRadius: 10,
        marginTop: 20,
        width: 180
    },
    button1: {
        alignItems: 'center',
        padding: 5,
        top: -30,
        backgroundColor: "#C6EBB6",
        padding: 14,
        borderRadius: 10,
        marginTop: 20,
        width: 180
    },
    btc: {
        fontSize: 22, left: 0, top: 0, color: "#000000"
    },
});