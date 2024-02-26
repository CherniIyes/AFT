import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  buttonText,
  property1DefaultPosition,
  property1DefaultBorderColor,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultBorderStyle,
  property1DefaultBorderWidth,
  property1DefaultBackgroundColor,
  skipColor,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("borderColor", property1DefaultBorderColor),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
      ...getStyleValue("borderStyle", property1DefaultBorderStyle),
      ...getStyleValue("borderWidth", property1DefaultBorderWidth),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
    };
  }, [
    property1DefaultPosition,
    property1DefaultBorderColor,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultBorderStyle,
    property1DefaultBorderWidth,
    property1DefaultBackgroundColor,
  ]);

  const skipStyle = useMemo(() => {
    return {
      ...getStyleValue("color", skipColor),
    };
  }, [skipColor]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <Text style={[styles.skip, skipStyle]}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skip: {
    fontSize: FontSize.paragraphe_size,
    fontFamily: FontFamily.paragraphe,
    color: Color.colorPrimary,
    textAlign: "left",
  },
  property1default: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorPrimary,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_10xs,
  },
});

export default Property1Default;
