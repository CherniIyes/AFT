import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function NavBar({ navigation }) {
      return (
            <View style={styles.headerContainer} >
                  <View style={styles.ContainerInBetween}>
                        <View style={styles.buttonContainer}>
                              <TouchableOpacity onPress={() => { navigation.navigate('Milk'); }} style={styles.filsa}>
                                    <FontAwesome6 name="cow" size={wp('6%')} color="white" />
                                    <Text style={styles.filsaText}>Dairy Production</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => { navigation.navigate('Sales'); }} style={styles.filsa}>
                                    <MaterialIcons name="point-of-sale" size={wp('6%')} color="white" />
                                    <Text style={styles.filsaText}>Sales</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => { navigation.navigate('DairyValueChain'); }} style={styles.filsa}>
                                    <MaterialCommunityIcons name="cow" size={wp('6%')} color="white" />
                                    <Text style={styles.filsaText}>Dairy Value Chain</Text>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => { navigation.navigate('Expenses'); }} style={styles.filsa}>
                                    <MaterialCommunityIcons name="point-of-sale" size={wp('6%')} color="white" />
                                    <Text style={styles.filsaText}>Expenses</Text>
                              </TouchableOpacity>
                        </View>
                  </View>
            </View >
      )

}
const styles = StyleSheet.create({

      ContainerInBetween: {
            top: hp('8%'),

      },
      filsaText: {
            color:"white",

      },
      headerContainer: {
            backgroundColor: '#107c2e',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: wp('0%'),
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            elevation: 2,
            height: hp('9%'),
            position: 'absolute',
            top: 37,
            right: 0,
            left: 0,
            zIndex: 2,
      },
      buttonContainer: {
            
            flexDirection: 'row',
            marginLeft: wp('2%'),
            justifyContent: 'space-between',
            position: "relative",
            bottom: hp('5%'),

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