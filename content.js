import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerList = [
  { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
  { icon: 'account-cash-outline', label: 'Cash Summary', navigateTo: 'Cash Summary' },
  { icon: 'alarm-panel', label: 'Count', navigateTo: 'Count' },
  { icon: 'bell', label: 'Notification', navigateTo: '' },
];

const DrawerLayout = ({ icon, label, navigateTo }) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = props => {
  return DrawerList.map((el, i) => {
    return (
      <DrawerLayout
        key={i}
        icon={el.icon}
        label={el.label}
        navigateTo={el.navigateTo}
      />
    );
  });
};

function DrawerContent(props) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <Text style={styles.settingText} >Setting</Text>
            </View>
            <View style={styles.searchContainer}>
              {/* Search Icon */}
              <Icon name="magnify" size={20} color="#999" style={styles.searchIcon} />
              {/* Search Input */}
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor="#999"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    backgroundColor: "#CDDB86",
    marginTop:-60,
    height:90
  },
  settingText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: "center",
    marginTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 35,
    height: 30,left: 13, zIndex: -99, position: 'absolute', width:250
  },
  drawerSection: {
    marginTop: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
  bottomDrawerSection: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#dedede',
  },
});
