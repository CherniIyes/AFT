import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Variant = ({
  buttonText,
  property1Variant2Position,
  property1Variant2BackgroundColor,
  property1Variant2Top,
  property1Variant2Left,
  property1Variant2Width,
  property1Variant2Height,
  skipColor,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1Variant2Position),
      ...getStyleValue("backgroundColor", property1Variant2BackgroundColor),
      ...getStyleValue("top", property1Variant2Top),
      ...getStyleValue("left", property1Variant2Left),
      ...getStyleValue("width", property1Variant2Width),
      ...getStyleValue("height", property1Variant2Height),
    };
  }, [
    property1Variant2Position,
    property1Variant2BackgroundColor,
    property1Variant2Top,
    property1Variant2Left,
    property1Variant2Width,
    property1Variant2Height,
  ]);

  const skip1Style = useMemo(() => {
    return {
      ...getStyleValue("color", skipColor),
    };
  }, [skipColor]);

  return (
    <View style={[styles.property1variant2, property1Variant2Style]}>
      <Text style={[styles.skip, skip1Style]}>{buttonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skip: {
    fontSize: FontSize.paragraphe_size,
    fontFamily: FontFamily.paragraphe,
    color: Color.colorWhite,
    textAlign: "left",
  },
  property1variant2: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorPrimary,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_10xs,
  },
});

export default Property1Variant;
