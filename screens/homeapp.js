import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const BackgroundComponent = () => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.navigate('choose'); // Replace 'NextScreen' with the name of your target screen
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchableArea} onPress={handlePress}>
          <ImageBackground
            source={require("../assets/homeapp.png")}
            style={styles.backgroundImage}>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchableArea: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    text: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default BackgroundComponent;
  