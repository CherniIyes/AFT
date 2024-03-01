import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Property1Default from "../components/Property1Default";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall4 = ({ navigation }) => {
  return (
    <View style={styles.androidSmall8}>
      <View style={[styles.androidSmall8Child, styles.androidLayout]} />
      <View style={[styles.androidSmall8Item, styles.androidLayout]} />
      <View style={[styles.androidSmall8Inner, styles.androidLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.aft, styles.aftFlexBox]}>AFT</Text>
      <View style={[styles.instanceParent, styles.vectorIconPosition]}>
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={styles.instancePosition} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={styles.instanceItem} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectangleLayout]}>
          <View style={[styles.instanceInner, styles.instancePosition]} />
        </View>
      </View>
      <Text style={[styles.letsDelveInto, styles.aftFlexBox]}>
        Let's delve into our application and elevate your agricultural journey,
        streamlining your life for greater ease and efficiency.
      </Text>
      <View style={styles.instanceGroup}>
      <TouchableOpacity
      onPress={() => navigation.navigate('Boarding1')}
      style={{
        position: 'absolute',
        top: 48,
        left: 46,
        width: 106,
        height: 31,
        borderWidth: 1,
        borderColor: '#107c2e',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#107c2e' }}>Back</Text>
    </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('logOrSign')}
          style={{
            position: 'absolute',
            backgroundColor: '#092f03',
            top: 48,
            left: 182,
            width: 111,
            height: 32,
            borderColor: 'unset', // You can include this line if borderColor is relevant
            borderWidth: 0,       // You can include this line if borderColor is relevant
          }}
        >
          <Text style={{ color: '#f7b304' }}>Next</Text>
        </TouchableOpacity>
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
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
    height: 101,
    position: "absolute",
  },
  vectorIconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  aftFlexBox: {
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
    backgroundColor: Color.gray4,
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  androidSmall8Child: {
    top: 108,
    left: -65,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  androidSmall8Item: {
    top: 11,
    left: -65,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  androidSmall8Inner: {
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
  aft: {
    top: 194,
    left: 3,
    fontSize: FontSize.titleText_size,
    fontWeight: "700",
    fontFamily: FontFamily.titleText,
    color: Color.colorDarkslategray_100,
    width: 353,
    height: 84,
  },
  rectangleWrapper: {
    left: 31,
  },
  instanceItem: {
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.colorDarkgreen,
    position: "absolute",
    width: "100%",
  },
  rectangleContainer: {
    left: 68,
  },
  instanceInner: {
    display: "none",
  },
  rectangleFrame: {
    left: 105,
  },
  instanceParent: {
    top: 465,
    left: 115,
    width: 129,
    height: 33,
  },
  letsDelveInto: {
    top: 321,
    left: 2,
    fontSize: FontSize.paragraphe_size,
    fontFamily: FontFamily.paragraphe,
    color: Color.colorBlack,
    width: 354,
    height: 62,
  },
  instanceGroup: {
    top: 506,
    left: 11,
    width: 339,
    height: 101,
    position: "absolute",
    overflow: "hidden",
  },
  androidSmall8: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidSmall4;
