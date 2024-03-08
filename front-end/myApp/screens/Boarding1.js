import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
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

        <Text style={[styles.welcomeToAft, styles.welcomeFlexBox]}>{`Welcome to 
AFT`}</Text>
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
        <Text
          style={[styles.welcomeToAft1, styles.welcomeFlexBox]}
        >{`Welcome To AFT Elevate Your Farming And Master Your Management`}</Text>
        <View style={[styles.frameView, styles.frameViewPosition]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Boarding2')}
            style={{
              borderWidth: 1,
              borderRadius: Border.br_5xl,
              position: 'absolute',
              backgroundColor: '#092f03',
              width: 129,
              height: 40,
            }}
          >

            <Text style={styles.get}>Get started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >

  );
};

const styles = StyleSheet.create({

  androidSmall7: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800, // Adjust the height
    overflow: "hidden",
    width: 1000, // Adjust the width
  },

  // rectangleLayout: {
  //   height: 6,
  //   width: 30,
  //   top: 0,
  //   position: "absolute",
  //   zIndex: 1,
  // },
  swipeRectangle1: {
    left: 47,
  },
  swipeRectangle2: {
    left: 80,
  },
  welcomeToAft: {
    top: -20,
    left: 20,
    fontSize: FontSize.titleText_size, // Increase the value here
    fontWeight: "700",
    fontSize: 45,
    fontFamily: FontFamily.titleText,
    color: Color.colorDarkslategray_100,
    width: 342,
    height: 95,
  },

  welcomeToAft1: {
    top: 130,
    left: 15,
    fontSize: FontSize.paragraphe_size,
    fontFamily: FontFamily.paragraphe,
    color: Color.colorBlack,
    fontSize: 20,
    width: 350,
    height: 50,
  },
  // mourabaa: {
  //   position:"relative",
  //   bottom:25,
  // },
  firstGreenSquare: {
    top: 15,
    left: -80,
    height: 101,
    width: 208,
    borderRadius: Border.br_5xl,
  },
  secondGreenSquare: {
    top: 108,
    left: -65,
    height: 101,
    width: 208,
    borderRadius: Border.br_5xl,
  },
  thirdGreenSquare: {
    top: 850,
    left: 250,
  },
  filsa: {
    borderWidth: 1,
    borderRadius: Border.br_5xl,
    color: '#f7b304',
  },
  get: {
    color: '#f7b304',
    position: "relative",
    left: 35,
    top: 10,

  }, katha: {
    position: "relative",
    left: 14,
    top: 201,

  },
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
    height: "3.59%",
    width: "7.22%",
    top: "6.88%",
    right: "7.78%",
    bottom: "89.53%",
    left: "85%",
    maxWidth: "100%",
    maxHeight: "100%",
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
    top: 465,
    left: 116,
    width: 129,
    height: 33,
  },

  frameView: {
    top: 348,
    left: 130,
    width: 130,
    height: 40,
  },

});

export default AndroidSmall;
