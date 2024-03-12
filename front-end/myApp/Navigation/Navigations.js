import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import React, { useState } from "react";
const Stack = createStackNavigator();
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";




import Boarding1 from "../screens/Boarding1.js";
import Login from "../screens/Login";
import loginOrSign from "../screens/loginOrSign";
import CreatAcc from "../screens/CreatAcc";
import Boarding2 from "../screens/Boarding2";
import Expenses from "../screens/Expenses.js";
import Milk from "../screens/Milk.js";
import Sales from "../screens/sales.js";
import HomePage from "../screens/HomePage.js";
import Article1 from "../screens/Article1.js";
import Article2 from "../screens/Article2.js";
import DairyValueChain from "../screens/DairyValueChain.js";
import Profile from "../screens/Profile.js";
import Wallet from "../screens/Wallet.js";
import Test from "../screens/Test.js";


export default function Navigation() {
      return (
                  <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Boarding1" component={Boarding1} />
                        {/* <Stack.Screen name="CreatAcc" component={CreatAcc} /> */}
                        {/* <Stack.Screen name="Wallet" component={Wallet} /> */}
                        <Stack.Screen name="HomePage" component={HomePage} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Wallet" component={Wallet} />
                        <Stack.Screen name="Expenses" component={Expenses} />
                        <Stack.Screen name="CreatAcc" component={CreatAcc} />
                        <Stack.Screen name="Boarding2" component={Boarding2} />
                        <Stack.Screen name="DairyValueChain" component={DairyValueChain} />
                        <Stack.Screen name="Article1" component={Article1} />
                        <Stack.Screen name="Article2" component={Article2} />
                        <Stack.Screen name="Milk" component={Milk} />
                        <Stack.Screen name="logOrSign" component={loginOrSign} />
                        <Stack.Screen name="Sales" component={Sales} />
                        <Stack.Screen name="profile" component={Profile} />
                        <Stack.Screen name="Test" component={Test} />
                  </Stack.Navigator>
      )
}