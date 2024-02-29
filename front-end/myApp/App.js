import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useFonts } from "expo-font";
import Property1Default from "./components/Property1Default";
import Property1Variant from "./components/Property1Variant";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Boarding1 from "./screens/Boarding1.js";
import Login from "./screens/Login";
import loginOrSign from "./screens/loginOrSign";
import CreatAcc from "./screens/CreatAcc";
import Boarding2 from "./screens/Boarding2";
import Expenses from "./screens/Expenses.js";
import Milk from "./screens/Milk.js";
import HHH from "./screens/AndroidSmall.js";
import HomePage from "./screens/HomePage.js";
import Article1 from "./screens/Article1.js";
import Article2 from "./screens/Article2.js";
import { View } from "react-native";
import './assets/fonts/Inter-Medium.ttf';
import DairyValueChain from "./screens/DairyValueChain.js";





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
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name="DairyValueChain" component={DairyValueChain} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Article1" component={Article1} />
          <Stack.Screen name="Article2" component={Article2} />
          <Stack.Screen name="Boarding1" component={Boarding1} />
          <Stack.Screen name="Boarding2" component={Boarding2} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="logOrSign" component={loginOrSign} />
          <Stack.Screen name="CreatAcc" component={CreatAcc} />
        </Stack.Navigator>
      ) : (
        <View />
      )}
    </NavigationContainer>
  );
};

export default App;
