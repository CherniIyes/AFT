import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Boarding1 from "./screens/Boarding1.js";
import Login from "./screens/Login";
import loginOrSign from "./screens/loginOrSign";
import CreatAcc from "./screens/CreatAcc";
import Boarding2 from "./screens/Boarding2";
import SalesList from "./screens/sales.js"; // Correct import for SalesList
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();

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
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="sales"
              component={SalesList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Boarding1"
              component={Boarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="logOrSign"
              component={loginOrSign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreatAcc"
              component={CreatAcc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Boarding2"
              component={Boarding2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

export default App;
