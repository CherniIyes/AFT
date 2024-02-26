import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import Property1Default from "../components/Property1Default";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall2 = () => {
  return (
    <View style={styles.androidSmall2}>
      <Image
        style={styles.f1e07294fe18a2961d5443aebf7453Icon}
        contentFit="cover"
        source={require("../assets/2f1e07294fe18a2961d5443aebf74531-1.png")}
      />
      <View style={[styles.androidSmall2Child, styles.androidLayout]} />
      <View style={[styles.androidSmall2Item, styles.androidLayout]} />
      <View style={[styles.androidSmall2Inner, styles.androidLayout]} />
      <Text style={styles.startYourJourney}>{`Start Your Journey With A
            Simple Click `}</Text>
      <View style={styles.instanceParent}>
        <Property1Default
          buttonText="sign up"
          property1DefaultPosition="absolute"
          property1DefaultBorderColor="#107c2e"
          property1DefaultTop={48}
          property1DefaultLeft={46}
          property1DefaultWidth={106}
          property1DefaultHeight={31}
          property1DefaultBorderStyle="solid"
          property1DefaultBorderWidth={1}
          property1DefaultBackgroundColor="unset"
          skipColor="#107c2e"
        />
        <Property1Default
          buttonText="login"
          property1DefaultPosition="absolute"
          property1DefaultBorderColor="unset"
          property1DefaultTop={47}
          property1DefaultLeft={178}
          property1DefaultWidth={111}
          property1DefaultHeight={32}
          property1DefaultBorderStyle="unset"
          property1DefaultBackgroundColor="#092f03"
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
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  f1e07294fe18a2961d5443aebf7453Icon: {
    top: -18,
    left: -6,
    borderRadius: 11,
    width: 357,
    height: 447,
    position: "absolute",
  },
  androidSmall2Child: {
    top: 108,
    left: -65,
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  androidSmall2Item: {
    top: 11,
    left: -65,
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  androidSmall2Inner: {
    top: 598,
    left: 216,
  },
  startYourJourney: {
    top: 443,
    left: 27,
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
    position: "absolute",
    overflow: "hidden",
  },
  androidSmall2: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 648,
    overflow: "hidden",
  },
});

export default AndroidSmall2;
