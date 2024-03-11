import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Property1Default from "../components/Property1Default";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall2 = ({ navigation }) => {
  return (
    <View style={styles.androidSmall2}>
      <Image
        style={styles.cowicon}
        contentFit="cover"
        source={require("../assets/2f1e07294fe18a2961d5443aebf74531-1.png")}
      />
      {/* <View style={[styles.samllgreen, styles.androidLayout]} /> */}
      {/* <View style={[styles.smallgreen2, styles.androidLayout]} /> */}
      <View style={[styles.androidSmall2Inner, styles.androidLayout]} />
      <Text style={styles.startYourJourney}>{`Start Your Journey With A Simple Click`}</Text>
      <View style={styles.instanceParent}>


        <TouchableOpacity style={{
          left: 58,
          top: 201,
          margin: 5,
          borderColor: '#107c2e',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderRadius: Border.br_5xl,
          width: 129,
          height: 40,
        }} onPress={() => navigation.navigate('CreatAcc')}>

          <Text style={{ color: '#107c2e', }}>Sign Up</Text>

        </TouchableOpacity>


        <TouchableOpacity style={{
          left: 200,
          bottom: -157,
          borderWidth: 1,
          borderRadius: Border.br_5xl,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#092f03',
          width: 129,
          height: 40,
        }} onPress={() => navigation.navigate('Login')}>

          <Text style={{ color: '#f7b304' }}>Login</Text>

        </TouchableOpacity>



      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  buttonText: {
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },

  instanceParent: {
    top: 500,
    left: 16,
    width: 319,
    height: 81,
    position: "relative",
  },


  androidLayout: {
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  startYourJourney: {
    top: 620,
    left: 80,
    fontSize: 19,
    // fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 291,
    height: 47,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    position: "absolute",
  },



  cowicon: {
    top: 0,
    left: 0,
    borderRadius: 11,
    width: 415,
    height: 600,
    position: "absolute",
  },
  samllgreen: {
    top: 90,
    left: -100,
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  smallgreen2: {
    top: 4,
    left: -65,
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  androidSmall2Inner: {
    top: 820,
    left: 300,
  },

  androidSmall2: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 400,
    overflow: "hidden",
  },
});

export default AndroidSmall2;
