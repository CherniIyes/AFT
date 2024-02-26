import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({
  kolonjono,
  rp10000,
  maskGroup,
  union,
  frameViewPosition,
  frameViewWidth,
  frameViewHeight,
  frameViewTop,
  frameViewLeft,
  unionIconWidth,
  unionIconHeight,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("width", frameViewWidth),
      ...getStyleValue("height", frameViewHeight),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [
    frameViewPosition,
    frameViewWidth,
    frameViewHeight,
    frameViewTop,
    frameViewLeft,
  ]);

  const unionIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", unionIconWidth),
      ...getStyleValue("height", unionIconHeight),
    };
  }, [unionIconWidth, unionIconHeight]);

  return (
    <View style={[styles.rectangleParent, frameView1Style]}>
      <View style={styles.componentChild} />
      <Text style={styles.kolonjono}>{kolonjono}</Text>
      <Text style={[styles.bentel, styles.bentelFlexBox]}>1 Bentel</Text>
      <Text style={[styles.rp10000, styles.bentelFlexBox]}>{rp10000}</Text>
      <Image
        style={styles.awardIcon}
        contentFit="cover"
        source={require("../assets/award1.png")}
      />
      <Image
        style={styles.maskGroupIconPosition}
        contentFit="cover"
        source={maskGroup}
      />
      <View style={[styles.componentItem, styles.maskGroupIconPosition]} />
      <Image
        style={[styles.unionIcon, unionIconStyle]}
        contentFit="cover"
        source={union}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bentelFlexBox: {
    letterSpacing: 0.2,
    textAlign: "left",
    position: "absolute",
  },
  maskGroupIconPosition: {
    height: 138,
    left: 0,
    top: 0,
    position: "absolute",
    width: 165,
  },
  componentChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 0.5,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
    position: "absolute",
    height: 218,
    width: 165,
  },
  kolonjono: {
    top: 148,
    fontSize: FontSize.destriptionItems14Medium_size,
    letterSpacing: 0.3,
    color: Color.colorBlack,
    width: 146,
    textAlign: "left",
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    left: 12,
    position: "absolute",
  },
  bentel: {
    top: 173,
    left: 26,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.robotoRegular,
    color: Color.color1,
    width: 65,
  },
  rp10000: {
    top: 192,
    fontSize: FontSize.size_xs,
    color: Color.green2,
    width: 125,
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    letterSpacing: 0.2,
    left: 12,
  },
  awardIcon: {
    top: 174,
    width: 10,
    height: 10,
    left: 12,
    position: "absolute",
    overflow: "hidden",
  },
  componentItem: {
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_9xs,
  },
  unionIcon: {
    width: 76,
    height: 54,
    display: "none",
  },
  rectangleParent: {
    overflow: "hidden",
    height: 218,
    width: 165,
  },
});

export default FrameComponent1;
