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
      <View style={[styles.samllgreen, styles.androidLayout]} />
      <View style={[styles.smallgreen2, styles.androidLayout]} />
      <View style={[styles.androidSmall2Inner, styles.androidLayout]} />
      <Text style={styles.startYourJourney}>{`Start Your Journey With A Simple Click`}</Text>
      <View style={styles.instanceParent}>
        <TouchableOpacity onPress={() => navigation.navigate('CreatAcc')}>
          <View
            style={{
              ...styles.buttonsig,
              borderColor: "#107c2e",
              backgroundColor: "unset",
            }}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View
            style={{
              ...styles.buttonlog,
              borderColor: "unset",
              backgroundColor: "#092f03",
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsig: {
    width: 106,
    height: 31,
    position: "relative",
    left: 70,
    top: 201,
    borderWidth: 1,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    justifyContent: "center",
    
    margin: 5,
  },

  buttonlog: {
    width: 106,
    height: 31,
    position: "relative",
    left: 190,
    bottom: -160,
    borderWidth: 1,
    borderRadius: Border.br_5xl,
    alignItems: "center",
    justifyContent: "center",
    
    margin: 5,
  },
  buttonText: {
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  instanceParent: {
    
    // flexDirection: "row",
    // justifyContent: "space-between",  // Adjust this based on your design
    top: 450,
    left: 16,
    width: 200,
    height: 81,
    position: "relative",
    overflow: "hidden",
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  startYourJourney: {
    top: 620,
    left: 78,
    fontSize: FontSize.size_4xl,
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
  instanceParent: {
    top: 490,
    left: 16,
    width: 319,
    height: 81,
    position: "relative",
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
