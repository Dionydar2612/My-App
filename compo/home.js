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
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import Login from '../screens/Login';

export default function Home() {
    const navigation = useNavigation();

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
                <TouchableOpacity>
                    <Image style={{ marginLeft: 40, marginTop: 100, position: 'absolute' }} source={require("../assets/boxstock.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={{ marginLeft: 210, marginTop: 100, position: 'absolute' }} source={require("../assets/boxpromo.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={{ marginLeft: 40, marginTop: 240, position: 'absolute' }} source={require("../assets/boxcheck.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={{ marginLeft: 210, marginTop: 240, position: 'absolute' }} source={require("../assets/boxcash.png")} />
                </TouchableOpacity>
                <TouchableOpacity>
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
