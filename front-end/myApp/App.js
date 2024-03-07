import React, { useState } from "react";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import Navigationsss from "./Navigation/Navigations.js"

const Stack = createStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigationsss />
    </NavigationContainer>
  );
};





const styles = StyleSheet.create({
  windowContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  ContainerInBetween: {
    top: hp('8%'),
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: wp('0%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
    height: hp('13%'),
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: wp('2%'),
    justifyContent: 'space-between',
    position: "relative",
    bottom: hp('2%'),
  },
  filsa: {
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    fontSize: wp('10%'),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabBarContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: wp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    height: hp('8%'),
  },
  tabBarbuttonContainer: {
    flexDirection: 'row',
    marginLeft: wp('2%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    position: "relative",
    top: hp('1%'),
  },
  tabBarbutton: {
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    fontSize: wp('10%'),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tabBarbuttonText: {
    right: wp('1%'),
  },
});
export default App;
