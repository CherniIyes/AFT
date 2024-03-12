import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall2 = ({ navigation }) => {
  return (
    <View style={styles.androidSmall2}>
      <Image
        style={styles.cowicon}
        contentFit="cover"
        source={require("../assets/2f1e07294fe18a2961d5443aebf74531-1.png")}
      />
      <View style={[styles.androidSmall2Inner, styles.androidLayout]} />
      <Text style={styles.startYourJourney}>{`Start Your Journey With A Simple Click`}</Text>
      <View style={styles.instanceParent}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: responsiveHeight(5.3),
            left: responsiveWidth(20),
            borderColor: '#107c2e',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderRadius: Border.br_5xl,
            height: responsiveHeight(4.3),
            width: responsiveWidth(25),
          }}
          onPress={() => navigation.navigate('CreatAcc')}
        >
          <Text style={{ color: '#107c2e' }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: responsiveHeight(5.3),
            left: responsiveWidth(50),
            borderWidth: 1,
            borderRadius: Border.br_5xl,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#092f03',
            height: responsiveHeight(4.3),
            width: responsiveWidth(25),
          }}
          onPress={() => navigation.navigate('Login')}
        >
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
    top: responsiveHeight(75),
    left: responsiveWidth(2),
    width: responsiveWidth(92),
    height: responsiveHeight(20),
    position: "relative",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  androidLayout: {
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    height: responsiveHeight(40),
    width: responsiveWidth(80),
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  startYourJourney: {
    top: responsiveHeight(68),
    left: responsiveWidth(13),
    fontSize: responsiveWidth(4), // Adjust the value as needed
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: responsiveWidth(75),
    height: responsiveHeight(12),
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
    width: responsiveWidth(100),
    height: responsiveHeight(60),
    position: "absolute",
  },
  androidSmall2Inner: {
    top: responsiveHeight(100),
    left: responsiveWidth(100),
  },
  androidSmall2: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: responsiveHeight(400),
    overflow: "hidden",
  },
});

export default AndroidSmall2;
