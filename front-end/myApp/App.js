import React, { useState } from "react";
import { useFonts } from "expo-font";
import { iew, Text, StyleSheet, TouchableOpacity, } from "react-native";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
// import Provider from "react-redux"
// import Store from "./Kazi/store.js"
// import { createStore } from "redux";
import { AppRegistry } from "react-native";
import { RecoilRoot } from 'recoil';
import Navig from "./Navigation/Navigations.js"
import Nav from "./components/NavBar.js";
import Tab from "./components/TabBar.js";
const Stack = createStackNavigator();
import { useRecoilValue } from 'recoil';
import { userState } from './Recoil/Rstore.js';

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
    // <Provider store={Store}>
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
    // </Provider>

  );
};

const MainScreen = ({ navigation }) => {
  const user = useRecoilValue(userState);

  return (
    <>
      {user && <Nav navigation={navigation} />}
      <Navig />
      {user && <Tab navigation={navigation} />}
    </>
  );
};

export default App;