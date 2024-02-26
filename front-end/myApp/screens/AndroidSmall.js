import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import FrameComponent from "../components/FrameComponent";
import Rekomendasi from "../components/Rekomendasi";
import FrameComponent1 from "../components/FrameComponent1";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AndroidSmall = () => {
  return (
    <View style={styles.androidSmall4}>
      <View style={[styles.androidSmall4Child, styles.androidLayout]} />
      <View style={[styles.androidSmall4Item, styles.androidLayout]} />
      <Image
        style={styles.androidSmall4Inner}
        contentFit="cover"
        source={require("../assets/frame-34282.png")}
      />
      <View style={[styles.rectangleParent, styles.parentFlexBox]}>
        <View style={styles.frameChild} />
        <View style={[styles.groupParent, styles.parentFlexBox]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.aft, styles.aftFlexBox]}>AFT</Text>
          </View>
          <View style={styles.ioncartOutlineParent}>
            <Image
              style={[styles.ioncartOutlineIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/ioncartoutline.png")}
            />
            <Image
              style={[styles.avatarIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.rectangleView} />
      <Text style={[styles.search, styles.aftFlexBox]}>Search</Text>
      <Image
        style={[styles.searchIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <FrameComponent
        dimensionsText={require("../assets/rectangle-1950.png")}
        frameViewPosition="absolute"
        frameViewTop={127}
        frameViewLeft={-7}
        rectangleLinearGradientTransform="[object Object]"
      />
      <Image
        style={[styles.moreHorizontalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/morehorizontal.png")}
      />
      <Rekomendasi
        union={require("../assets/union.png")}
        union1={require("../assets/union.png")}
        rekomendasiPosition="absolute"
        rekomendasiWidth={375}
        rekomendasiTop={250}
        rekomendasiLeft={-13}
      />
      <FrameComponent1
        kolonjono="Damen"
        rp10000="Rp. 10.000,-"
        maskGroup={require("../assets/mask-group2.png")}
        union={require("../assets/union1.png")}
        frameViewPosition="absolute"
        frameViewWidth={146}
        frameViewHeight={184}
        frameViewTop={383}
        frameViewLeft={198}
        unionIconWidth={67}
        unionIconHeight={46}
      />
      <FrameComponent1
        kolonjono="Kangkung"
        rp10000="Rp. 5.000,-"
        maskGroup={require("../assets/mask-group3.png")}
        union={require("../assets/union2.png")}
        frameViewPosition="absolute"
        frameViewWidth={151}
        frameViewHeight={186}
        frameViewTop={383}
        frameViewLeft={14}
        unionIconWidth={70}
        unionIconHeight={46}
      />
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
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout: {
    width: 100,
    height: 32,
  },
  aftFlexBox: {
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  iconLayout1: {
    width: 32,
    height: 32,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  androidSmall4Child: {
    top: 11,
    left: -65,
  },
  androidSmall4Item: {
    top: 598,
    left: 216,
  },
  androidSmall4Inner: {
    top: 584,
    left: 3,
    height: 56,
    position: "absolute",
    width: 360,
  },
  frameChild: {
    height: 64,
    zIndex: 0,
    width: 360,
  },
  groupChild: {
    height: 32,
    left: 0,
    top: 0,
    position: "absolute",
  },
  aft: {
    top: 6,
    left: 9,
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: "#f6b304",
  },
  rectangleGroup: {
    height: 32,
  },
  ioncartOutlineIcon: {
    left: 0,
    overflow: "hidden",
  },
  avatarIcon: {
    left: 56,
    borderRadius: Border.br_9980xl,
  },
  ioncartOutlineParent: {
    width: 88,
    height: 32,
  },
  groupParent: {
    top: 16,
    left: 16,
    width: 328,
    justifyContent: "space-between",
    zIndex: 1,
  },
  rectangleParent: {
    backgroundColor: "#092f03",
    justifyContent: "flex-end",
    left: 0,
    top: 0,
  },
  rectangleView: {
    top: 71,
    left: 7,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.field,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 0.5,
    width: 345,
    height: 48,
    position: "absolute",
  },
  search: {
    top: 84,
    left: 34,
    fontSize: FontSize.destriptionItems14Medium_size,
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: FontFamily.destriptionItems14Medium,
    color: "#969ba8",
  },
  searchIcon: {
    top: 81,
    left: 10,
  },
  moreHorizontalIcon: {
    top: 112,
    left: 338,
  },
  androidSmall4: {
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    height: 640,
    overflow: "hidden",
    width: 360,
  },
});

export default AndroidSmall;
