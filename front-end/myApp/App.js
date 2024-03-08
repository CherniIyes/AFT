import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
// import { createStore } from 'redux'
// import { Provider } from 'react-redux';
// import store from './redux/store.js';

import Boarding1 from "./screens/Boarding1.js";
import Login from "./screens/Login";
import loginOrSign from "./screens/loginOrSign";
import CreatAcc from "./screens/CreatAcc";
import Boarding2 from "./screens/Boarding2";
import Expenses from "./screens/Expenses.js";
import Milk from "./screens/Milk.js"
import Sales from "./screens/sales.js";
import HomePage from "./screens/HomePage.js";
import Article1 from "./screens/Article1.js";
import Article2 from "./screens/Article2.js";
import DairyValueChain from "./screens/DairyValueChain.js";
import Profile from "./screens/Profile.js";
import Test from "./screens/Test.js";


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
    // <Provider store={store}>
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} hideSplashScreen={hideSplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

const MainScreen = ({ navigation, route }) => {
  const [view, setView] = useState("");
  const { hideSplashScreen } = route.params || { hideSplashScreen: true };
  const currentRouteName = getFocusedRouteNameFromRoute(route);

  return (
    // <Provider store={store}>

    <View style={styles.windowContainer}>
      {/* {['Milk', 'Sales', 'DairyValueChain', 'Expenses', 'HomePage'].includes(view) && ( */}
      {/* <View style={styles.headerContainer}>
        <View style={styles.ContainerInBetween}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => { navigation.navigate('Milk'); setView('Milk'); }} style={styles.filsa}>
              <FontAwesome6 name="cow" size={wp('6%')} color="black" />
              <Text>Dairy Production</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Sales'); setView('Sales'); }} style={styles.filsa}>
              <MaterialIcons name="point-of-sale" size={wp('6%')} color="black" />
              <Text>Sales</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('DairyValueChain'); setView('DairyValueChain') }} style={styles.filsa}>
              <MaterialCommunityIcons name="cow" size={wp('6%')} color="black" />
              <Text>Dairy Value Chain</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Expenses'); setView('Expenses') }} style={styles.filsa}>
              <MaterialCommunityIcons name="point-of-sale" size={wp('6%')} color="black" />
              <Text>Expenses</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
      {/* // )} */}

      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="Milk" component={Milk} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="Boarding1" component={Boarding1} />

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="DairyValueChain" component={DairyValueChain} />
          <Stack.Screen name="Article1" component={Article1} />
                
        
          <Stack.Screen name="Expenses" component={Expenses} />
          <Stack.Screen name="Boarding2" component={Boarding2} />
          <Stack.Screen name="Article2" component={Article2} />
          <Stack.Screen name="logOrSign" component={loginOrSign} />
          <Stack.Screen name="Sales" component={Sales} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      ) : (
        <View />
      )}
      {/* {['Milk', 'Sales', 'DairyValueChain', 'Expenses', 'HomePage'].includes(view) && ( */}
      {/* <View style={styles.tabBarContainer}>
        <View style={styles.tabBarbuttonContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('HomePage'); setView('HomePage') }} style={styles.tabBarbutton}>
            <AntDesign name="home" size={wp('6%')} color="black" />
            <Text style={styles.tabBarbuttonText}> Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Expenses')} style={styles.tabBarbutton}>
            <AntDesign name="wallet" size={wp('6%')} color="black" />
            <Text style={styles.tabBarbuttonText}> Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.tabBarbutton}>
            <AntDesign name="profile" size={wp('6%')} color="black" />
            <Text style={styles.tabBarbuttonText}> Profile</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      {/* )} */}
    </View>

    // {/* </Provider>  */}

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
