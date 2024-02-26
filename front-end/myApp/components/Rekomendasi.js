import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Rekomendasi = ({
  union,
  union1,
  rekomendasiPosition,
  rekomendasiWidth,
  rekomendasiTop,
  rekomendasiLeft,
}) => {
  const rekomendasiStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rekomendasiPosition),
      ...getStyleValue("width", rekomendasiWidth),
      ...getStyleValue("top", rekomendasiTop),
      ...getStyleValue("left", rekomendasiLeft),
    };
  }, [rekomendasiPosition, rekomendasiWidth, rekomendasiTop, rekomendasiLeft]);

  return (
    <View style={[styles.rekomendasi, rekomendasiStyle]}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <LinearGradient
        style={[styles.rekomendasiChild, styles.rekomendasiLayout]}
        locations={[0, 0.61]}
        colors={["rgba(0, 0, 0, 0.51)", "rgba(167, 167, 167, 0)"]}
      />
      <LinearGradient
        style={[styles.rekomendasiItem, styles.rekomendasiLayout]}
        locations={[0, 0.61]}
        colors={["rgba(0, 0, 0, 0.51)", "rgba(167, 167, 167, 0)"]}
      />
      <Text style={[styles.sapiLimousin, styles.sapiTypo]}>Sapi Limousin</Text>
      <Text style={[styles.sapiPerah, styles.sapiTypo]}>Sapi Perah</Text>
      <Text style={[styles.bulan, styles.bulanTypo]}>40 Bulan</Text>
      <Text style={[styles.bulan1, styles.bulanTypo]}>20 Bulan</Text>
      <Text style={[styles.kg, styles.bulanTypo]}>100 kg</Text>
      <Text style={[styles.kg1, styles.bulanTypo]}>80 kg</Text>
      <Image
        style={[styles.calendarIcon, styles.awardIconLayout]}
        contentFit="cover"
        source={require("../assets/calendar.png")}
      />
      <Image
        style={[styles.calendarIcon1, styles.awardIconLayout]}
        contentFit="cover"
        source={require("../assets/calendar.png")}
      />
      <Image
        style={[styles.awardIcon, styles.awardIconLayout]}
        contentFit="cover"
        source={require("../assets/award.png")}
      />
      <Image
        style={[styles.awardIcon1, styles.awardIconLayout]}
        contentFit="cover"
        source={require("../assets/award.png")}
      />
      <View style={styles.union}>
        <Image style={styles.unionIcon} contentFit="cover" source={union} />
        <Image style={styles.unionIcon} contentFit="cover" source={union1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupLayout: {
    width: 334,
    top: 0,
    position: "absolute",
    height: 116,
  },
  rekomendasiLayout: {
    backgroundColor: "transparent",
    borderRadius: Border.br_9xs,
    width: 334,
    top: 0,
    position: "absolute",
    height: 116,
  },
  sapiTypo: {
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    letterSpacing: 0.3,
    fontSize: FontSize.size_base,
    top: 62,
    position: "absolute",
  },
  bulanTypo: {
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0.2,
    fontSize: FontSize.size_xs,
    top: 90,
    textAlign: "left",
    color: Color.colorWhitesmoke_100,
    position: "absolute",
  },
  awardIconLayout: {
    overflow: "hidden",
    height: 14,
    width: 14,
    top: 89,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 361,
  },
  maskGroupIcon1: {
    left: 15,
  },
  rekomendasiChild: {
    left: 15,
  },
  rekomendasiItem: {
    left: 361,
  },
  sapiLimousin: {
    width: 203,
    left: 27,
  },
  sapiPerah: {
    width: 172,
    left: 373,
  },
  bulan: {
    left: 45,
  },
  bulan1: {
    left: 391,
  },
  kg: {
    left: 120,
  },
  kg1: {
    left: 466,
  },
  calendarIcon: {
    left: 27,
  },
  calendarIcon1: {
    left: 373,
  },
  awardIcon: {
    left: 102,
  },
  awardIcon1: {
    left: 448,
  },
  unionIcon: {
    width: 76,
    height: 54,
  },
  union: {
    height: "46.47%",
    top: "26.72%",
    bottom: "26.81%",
    left: 144,
    width: 422,
    display: "none",
    position: "absolute",
  },
  rekomendasi: {
    width: 706,
    height: 116,
  },
});

export default Rekomendasi;
