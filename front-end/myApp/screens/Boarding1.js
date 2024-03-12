import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Property1Variant from "../components/Property1Variant";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall = ({ navigation }) => {
  return (
    <View style={styles.androidSmall7}>
      <View style={[styles.secondGreenSquare, styles.androidLayout]} />
      <View style={[styles.firstGreenSquare, styles.androidLayout]} />
      <View style={[styles.thirdGreenSquare, styles.androidLayout]} />
      <Image
        style={[styles.vectorIcon, styles.frameViewPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.katha}>
        <Text style={[styles.welcomeToAft, styles.welcomeFlexBox]}>{`Welcome to AFT`}</Text>
        <View style={[styles.instanceParent, styles.frameViewPosition]}>
          <View style={styles.mourabaa}>
            <View style={[styles.swipeRectangle1, styles.rectangleLayout]}>
              <View style={[styles.instanceChild, styles.instancePosition]} />
            </View>
            <View style={[styles.swipeRectangle2, styles.rectangleLayout]}>
              <View style={[styles.instanceItem, styles.instancePosition]} />
            </View>
          </View>
        </View>
        <Text style={[styles.welcomeToAft1, styles.welcomeFlexBox]}>{`Welcome To AFT Elevate Your Farming And Master Your Management`}</Text>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Boarding2')}
            style={{
              borderWidth: 1,
              borderRadius: Border.br_5xl,
              position: 'absolute',
              backgroundColor: '#092f03',
              width: responsiveWidth(80), // Use responsive units
              height: responsiveHeight(7), // Use responsive units
            }}
          >
            <Text style={styles.get}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  androidSmall7: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: responsiveHeight(100),
    overflow: "hidden",
    width: responsiveWidth(100),
  },

  swipeRectangle1: {
    left: responsiveWidth(10),
  },
  swipeRectangle2: {
    left: responsiveWidth(18),
  },
  welcomeToAft: {
    top: responsiveHeight(-2),
    left: responsiveWidth(12),
    fontSize: 35, // Increase the value as needed
    fontWeight: "700",
    fontFamily: FontFamily.titleText,
    color: Color.colorDarkslategray_100,
    width: responsiveWidth(70),
  },


  welcomeToAft1: {
    top: responsiveHeight(16),
    left: responsiveWidth(8),
    fontSize: 20,
    fontFamily: FontFamily.paragraphe,
    color: Color.colorBlack,
    width: responsiveWidth(80),
  },

  firstGreenSquare: {
    top: responsiveHeight(1),
    left: responsiveWidth(-35),
    height: responsiveHeight(13),
    width: responsiveWidth(55),
    borderRadius: Border.br_5xl,
  },
  secondGreenSquare: {
    top: responsiveHeight(11),
    left: responsiveWidth(-35),
    height: responsiveHeight(13),
    width: responsiveWidth(55),
    borderRadius: Border.br_5xl,
  },
  thirdGreenSquare: {
    top: responsiveHeight(98),
    left: responsiveWidth(65),
  },
  get: {
    color: '#f7b304',
    position: "relative",
    left: responsiveWidth(9),
    top: responsiveHeight(1),
  },
  katha: {
    position: "relative",
    left: responsiveWidth(2),
    top: responsiveHeight(20),
  },
  androidLayout: {
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    height: responsiveHeight(13),
    width: responsiveWidth(55),
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
  vectorIcon: {
    height: responsiveHeight(3.59),
    width: responsiveWidth(12),
    top: responsiveHeight(58),
    left: responsiveWidth(20),
    // left: "50%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    transform: [
      {
        rotate: "270deg",
      },
    ],
  },

  instanceChild: {
    backgroundColor: Color.colorDarkgreen,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },

  instanceItem: {
    backgroundColor: Color.gray4,
  },

  instanceParent: {
    top: responsiveHeight(46),
    left: responsiveWidth(15),
    width: responsiveWidth(20),
    height: responsiveHeight(4),
  },

  frameView: {
    top: responsiveHeight(35),
    left: responsiveWidth(30),
    width: responsiveWidth(35),
    height: responsiveHeight(5),
    borderWidth: 1,
    borderRadius: Border.br_5xl, // Add this line for curved edges
    borderColor: '#092f03', // Add a border color if needed
    backgroundColor: '#092f03', // Background color
  },
});

export default AndroidSmall;
