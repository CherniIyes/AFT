import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { AppRegistry, View } from "react-native";
import Boarding1 from "./screens/Boarding1";
import Login from "./screens/Login";
import loginOrSign from "./screens/loginOrSign";
import CreatAcc from "./screens/CreatAcc";
import Boarding2 from "./screens/Boarding2";
import Expenses from "./screens/Expenses";
import Milk from "./screens/Milk";
import HHH from "./screens/AndroidSmall";
import HomePage from "./screens/HomePage";
import Article1 from "./screens/Article1";
import Article2 from "./screens/Article2";
import SalesList from "./screens/sales";
import DairyValueChain from "./screens/DairyValueChain";
import "./assets/fonts/Inter-Medium.ttf";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
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
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
             <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="SalesList" component={SalesList} />
        
          
         
         
          <Stack.Screen name="Milk" component={Milk} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Article1" component={Article1} />
          <Stack.Screen name="Article2" component={Article2} />
          <Stack.Screen name="Boarding1" component={Boarding1} />
          <Stack.Screen name="Boarding2" component={Boarding2} />
          <Stack.Screen name="logOrSign" component={loginOrSign} />
          <Stack.Screen name="CreatAcc" component={CreatAcc} />
        </Stack.Navigator>
      ) : (
        <View />
      )}
    </NavigationContainer>
  );
};

// Register the main component
AppRegistry.registerComponent('main', () => App);

export default App;
