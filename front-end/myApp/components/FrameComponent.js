import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  dimensionsText,
  frameViewPosition,
  frameViewTop,
  frameViewLeft,
  rectangleLinearGradientTransform,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewPosition, frameViewTop, frameViewLeft]);

  const rectangleLinearGradientStyle = useMemo(() => {
    return {
      ...getStyleValue("transform", rectangleLinearGradientTransform),
    };
  }, [rectangleLinearGradientTransform]);

  return (
    <View style={[styles.rectangleParent, frameViewStyle]}>
      <View style={[styles.componentChild, styles.rectangleViewLayout]} />
      <View style={[styles.componentItem, styles.componentLayout]} />
      <View style={[styles.componentInner, styles.componentLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.pakan, styles.pakanTypo]}>Pakan</Text>
      <Text style={[styles.aksesoris, styles.obatTypo]}>Aksesoris</Text>
      <Text style={[styles.obat, styles.obatTypo]}>Obat</Text>
      <Text style={[styles.ternak, styles.pakanTypo]}>Ternak</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-1966.png")}
      />
      <Image
        style={[styles.componentChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={styles.rectangleContainer}>
          <LinearGradient
            style={[
              styles.groupItem,
              styles.groupItemBg,
              rectangleLinearGradientStyle,
            ]}
            locations={[0, 1]}
            colors={["#ff5a5a", "#ff7ca8"]}
          />
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            contentFit="cover"
            source={dimensionsText}
          />
          <LinearGradient
            style={[styles.rectangleLineargradient, styles.groupItemBg]}
            locations={[0, 1]}
            colors={["#ff626c", "#ff779c"]}
          />
        </View>
      </View>
      <Image
        style={[styles.componentChild2, styles.componentChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <Image
        style={[styles.componentChild3, styles.componentChildPosition]}
        contentFit="cover"
        source={require("../assets/group-1970.png")}
      />
      <Image
        style={[styles.componentChild4, styles.componentChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-40.png")}
      />
      <Image
        style={[styles.componentChild5, styles.componentChildPosition]}
        contentFit="cover"
        source={require("../assets/group-1974.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 48,
    width: 165,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 15,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  componentLayout: {
    left: 195,
    height: 48,
    width: 165,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  pakanTypo: {
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.destriptionItems14Medium_size,
    left: 70,
    position: "absolute",
  },
  obatTypo: {
    left: 250,
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.destriptionItems14Medium_size,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 34,
    width: 34,
    top: 71,
    position: "absolute",
  },
  groupLayout: {
    height: 30,
    width: 30,
  },
  groupPosition: {
    left: 0,
    position: "absolute",
  },
  groupItemBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  componentChildPosition1: {
    top: 7,
    height: 34,
    width: 34,
    position: "absolute",
  },
  componentChildPosition: {
    top: 9,
    height: 30,
    width: 30,
    position: "absolute",
  },
  componentChild: {
    top: 64,
  },
  componentItem: {
    top: 0,
  },
  componentInner: {
    top: 64,
  },
  rectangleView: {
    top: 0,
  },
  pakan: {
    top: 78,
  },
  aksesoris: {
    top: 14,
  },
  obat: {
    top: 78,
  },
  ternak: {
    top: 14,
  },
  ellipseIcon: {
    left: 24,
  },
  groupIcon: {
    left: 26,
    top: 73,
    width: 30,
    position: "absolute",
  },
  componentChild1: {
    left: 203,
  },
  groupChild: {
    height: 30,
    width: 30,
    top: 0,
  },
  groupItem: {
    left: 17,
    borderRadius: Border.br_sm_5,
    width: 10,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    height: 24,
    top: 0,
  },
  groupInner: {
    top: 8,
    width: 16,
    height: 16,
  },
  rectangleLineargradient: {
    top: 19,
    left: 13,
    width: 9,
    height: 3,
    borderRadius: Border.br_5xs,
    backgroundColor: "transparent",
  },
  rectangleContainer: {
    top: 3,
    left: 3,
    width: 24,
    height: 24,
    position: "absolute",
  },
  rectangleGroup: {
    left: 205,
    top: 73,
    width: 30,
    position: "absolute",
  },
  componentChild2: {
    left: 24,
  },
  componentChild3: {
    left: 26,
  },
  componentChild4: {
    left: 203,
  },
  componentChild5: {
    left: 205,
  },
  rectangleParent: {
    width: 375,
    height: 112,
    overflow: "hidden",
  },
});

export default FrameComponent;
