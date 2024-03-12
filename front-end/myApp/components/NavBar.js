import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

import React, { useState } from "react";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
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

const Stack = createStackNavigator();

export default function NavBar({ navigation }) {
      return (
            <View style={styles.headerContainer} >
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
            </View >
      )

}
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