import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Property1Variant from "../components/Property1Variant";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall = () => {
  return (
    <View style={styles.androidSmall7}>
      <View style={[styles.androidSmall7Child, styles.androidLayout]} />
      <View style={[styles.androidSmall7Item, styles.androidLayout]} />
      <View style={[styles.androidSmall7Inner, styles.androidLayout]} />
      <Image
        style={[styles.vectorIcon, styles.frameViewPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.welcomeToAft, styles.welcomeFlexBox]}>{`Welcome to 
AFT`}</Text>
      <View style={[styles.instanceParent, styles.frameViewPosition]}>
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.instanceChild, styles.instancePosition]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.instanceItem, styles.instancePosition]} />
        </View>
      </View>
      <Text
        style={[styles.welcomeToAft1, styles.welcomeFlexBox]}
      >{`Welcome To AFT
Elevate Your Farming And Master Your Management`}</Text>
      <View style={[styles.frameView, styles.frameViewPosition]}>
        <Property1Variant
          buttonText="Get started"
          property1Variant2Position="absolute"
          property1Variant2BackgroundColor="#092f03"
          property1Variant2Top={35}
          property1Variant2Left={167}
          property1Variant2Width={129}
          property1Variant2Height={40}
          skipColor="#f7b304"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidLayout: {
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    height: 101,
    width: 208,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorDarkgreen,
    position: "absolute",
  },
  frameViewPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  welcomeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  rectangleLayout: {
    height: 6,
    width: 30,
    top: 14,
    position: "absolute",
  },
  instancePosition: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  androidSmall7Child: {
    top: 108,
    left: -65,
    height: 101,
    width: 208,
    borderRadius: Border.br_5xl,
  },
  androidSmall7Item: {
    top: 11,
    left: -65,
    height: 101,
    width: 208,
    borderRadius: Border.br_5xl,
  },
  androidSmall7Inner: {
    top: 598,
    left: 216,
  },
  vectorIcon: {
    height: "3.59%",
    width: "7.22%",
    top: "6.88%",
    right: "7.78%",
    bottom: "89.53%",
    left: "85%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  welcomeToAft: {
    top: 166,
    left: 9,
    fontSize: FontSize.titleText_size,
    fontWeight: "700",
    fontFamily: FontFamily.titleText,
    color: Color.colorDarkslategray_100,
    width: 342,
    height: 95,
  },
  instanceChild: {
    backgroundColor: Color.colorDarkgreen,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  rectangleWrapper: {
    left: 31,
  },
  instanceItem: {
    backgroundColor: Color.gray4,
  },
  rectangleContainer: {
    left: 68,
  },
  instanceParent: {
    top: 465,
    left: 116,
    width: 129,
    height: 33,
  },
  welcomeToAft1: {
    top: 348,
    left: -2,
    fontSize: FontSize.paragraphe_size,
    fontFamily: FontFamily.paragraphe,
    color: Color.colorBlack,
    width: 360,
    height: 83,
  },
  frameView: {
    top: 506,
    left: -51,
    width: 463,
    height: 110,
  },
  androidSmall7: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidSmall;
