import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer,getFocusedRouteNameFromRoute  } from "@react-navigation/native";
import * as React from "react";
import { useFonts } from "expo-font";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import './assets/fonts/Inter-Medium.ttf';

import Boarding1 from "./screens/Boarding1.js";
import Login from "./screens/Login";
import loginOrSign from "./screens/loginOrSign";
import CreatAcc from "./screens/CreatAcc";
import Boarding2 from "./screens/Boarding2";
import Expenses from "./screens/Expenses.js";
import Milk from "./screens/Milk.js";
import Sales from "./screens/sales.js";
import HomePage from "./screens/HomePage.js";
import Article1 from "./screens/Article1.js";
import Article2 from "./screens/Article2.js";
import DairyValueChain from "./screens/DairyValueChain.js";
import profile from "./screens/Profile.js"


const Stack = createStackNavigator();
const App = () => {
  const [oneUser ,setOneUser] = React.useState({})
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

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} hideSplashScreen={hideSplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainScreen = ({ navigation, route }) => {
  const { hideSplashScreen } = route.params || { hideSplashScreen: true }; // Add a default value

  React.useLayoutEffect(() => {
    const currentRouteName = getFocusedRouteNameFromRoute(route);

    const screensWithoutHeaderAndTabBar = ['Boarding1', 'Login', 'logOrSign', 'CreatAcc', 'Boarding2'];

    if (screensWithoutHeaderAndTabBar.includes(currentRouteName)) {
      navigation.setOptions({
        headerShown: false,
        tabBarVisible: false,
      });
    } else {
      navigation.setOptions({
        headerShown: false,
        tabBarVisible: true,
      });
    }
  }, [navigation, route]);

  return (
    <View style={styles.windowContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.ContainerInBetween}>
          {/* <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search..." />
          </View> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Milk')} style={styles.filsa}>
              <FontAwesome6 name="cow" size={24} color="black" />
              <Text>Dairy Production</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sales')} style={styles.filsa}>
              <MaterialIcons name="point-of-sale" size={24} color="black" />
              <Text>Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DairyValueChain')} style={styles.filsa}>
              <MaterialCommunityIcons name="cow" size={24} color="black" />
              <Text>Dairy Value Chain</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Expenses')} style={styles.filsa}>
              <MaterialCommunityIcons name="point-of-sale" size={24} color="black" />
              <Text>Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Boarding1" component={Boarding1} />
          <Stack.Screen name="CreatAcc" component={CreatAcc} />
          <Stack.Screen name="Milk" component={Milk} />
          <Stack.Screen name="Expenses" component={Expenses} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="DairyValueChain" component={DairyValueChain} />
          <Stack.Screen name="Article1" component={Article1} />
          <Stack.Screen name="Article2" component={Article2} />
          <Stack.Screen name="Boarding2" component={Boarding2} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="logOrSign" component={loginOrSign} />
          <Stack.Screen name="Sales" component={Sales} />
          <Stack.Screen name="profile" component={profile} />
        </Stack.Navigator>
      ) : (
        <View />
      )}
      <View style={styles.tabBarContainer}>
        <View style={styles.tabBarbuttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.tabBarbutton}>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.tabBarbuttonText}> Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Expenses')} style={styles.tabBarbutton}>
            <AntDesign name="wallet" size={24} color="black" />
            <Text style={styles.tabBarbuttonText}> Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.tabBarbutton}>
            <AntDesign name="profile" size={24} color="black" />
            <Text style={styles.tabBarbuttonText}> Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  windowContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  ContainerInBetween: {
    top: 60,
  },
  headerContainer: {
    flexDirection: 'column', // Change from 'row' to 'column'
    justifyContent: 'flex-start', // Adjusted to 'flex-start'
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
    height: 120,
    position: 'absolute', // Changed to 'absolute'
    top: 0, // Adjusted to 0
    right: 0,
    left: 0, // Added left
    zIndex: 2, // Added zIndex to layer on top
  },
  // searchContainer: {
  //   marginBottom: 10,
  // },
  // searchInput: {
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   paddingLeft: 10,
  //   width: '100%', // Changed to '100%'
  // },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  filsa: {
    marginLeft: 10,
    fontSize: 50,
  },
  tabBarContainer: {
    flexDirection: 'column', // Change from 'row' to 'column'
    justifyContent: 'flex-end', // Adjusted to 'flex-end'
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2,
    position: 'absolute', // Changed to 'absolute'
    bottom: 0, // Adjusted to 0
    right: 0,
    left: 0, // Added left
    zIndex: 2, // Added zIndex to layer on top
  },
  tabBarbuttonContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  tabBarbutton: {
    marginLeft: 10,
    fontSize: 50,
  },
  tabBarbuttonText: {
    right: 5,
  },
});

export default App;






























// in my react native project i have a number of screens
// Boarding1
// Login
// loginOrSign
// CreatAcc
// Boarding2
// Expenses
// Milk
// Sales
// HomePage
// DairyValueChain

// and in the app.js where everything in redered i also have
// headerContainer
// tabBarContainer

// the headerContainer is my navbar and the tabBarContainer is my tabbar
// when i am in the Boarding1 or Login or loginOrSign or CreatAcc or Boarding2 i dont want the headerContainer  and the tabBarContainer to render but when i am in the Expenses or Milk or Sales or HomePage or DairyValueChain i want the headerContainer  and the tabBarContainer to render