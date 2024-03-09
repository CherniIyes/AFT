import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const AndroidSmall4 = ({ navigation }) => {
  return (
    <View style={styles.androidSmall8}>
      <View style={[styles.androidSmall8Child, styles.androidLayout]} />
      <View style={[styles.androidSmall8Item, styles.androidLayout]} />
      <View style={[styles.androidSmall8Inner, styles.androidLayout]} />
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
      <View style={styles.ButtonsGroup}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Boarding1')}
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
        >
          <Text style={{ color: '#107c2e' }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('logOrSign')}
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
    width: responsiveWidth(55),
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
    height: responsiveHeight(13),
    position: "absolute",
  },
  ButtonsGroup: {
    top: responsiveHeight(49.7),
    left: responsiveWidth(2),
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    position: "absolute",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
  },
  rectangleWrapper: {
    left: responsiveWidth(10),
  },
  rectangleContainer: {
    left: responsiveWidth(15),
  },
  aft: {
    top: responsiveHeight(15),
    left: responsiveWidth(15),
    fontSize: responsiveWidth(15), // Adjust the value as needed
    fontWeight: "700",
    fontFamily: FontFamily.titleText,
    color: Color.colorDarkslategray_100,
    width: responsiveWidth(70),
  },
  letsDelveInto: {
    top: responsiveHeight(36),
    left: responsiveWidth(9),
    fontSize: responsiveWidth(4), // Adjust the value as needed
    fontFamily: FontFamily.paragraphe,
    color: Color.colorBlack,
    width: responsiveWidth(80),
  },
  vectorIconPosition: {
    position: "relative",
    overflow: "hidden",
  },
  aftFlexBox: {
    textAlign: "center",
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
    top: responsiveHeight(12),
    left: responsiveWidth(-31),
    height: responsiveHeight(13),
    width: responsiveWidth(55),
    borderRadius: Border.br_5xl,
  },
  androidSmall8Item: {
    top: responsiveHeight(0),
    left: responsiveWidth(-30),
    height: responsiveHeight(13),
    width: responsiveWidth(55),
    borderRadius: Border.br_5xl,
  },
  androidSmall8Inner: {
    top: responsiveHeight(99),
    left: responsiveWidth(66),
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
  instanceInner: {
    display: "none",
  },
  rectangleFrame: {
    left: responsiveWidth(20),
  },
  instanceParent: {
    top: responsiveHeight(45),
    left: responsiveWidth(15),
    width: responsiveWidth(70),
    height: responsiveHeight(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  androidSmall8: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: responsiveHeight(640),
    overflow: "hidden",
  },
});

export default AndroidSmall4;