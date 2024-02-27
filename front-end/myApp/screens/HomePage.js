import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AndroidSmall = () => {
  return (
    <View style={styles.androidSmall4}>
      <View style={[styles.androidSmall4Child, styles.androidLayout]} />
      <View style={[styles.androidSmall4Item, styles.androidLayout]} />
      <View style={[styles.androidSmall4Inner, styles.rectangleParentFlexBox]}>
        <View style={[styles.rectangleParent, styles.rectangleParentFlexBox]}>
          <View style={styles.frameChild} />
          <Image
            style={styles.ioncartOutlineIcon}
            contentFit="cover"
            source={require("../assets/ioncartoutline.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleView} />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <Image
        style={[styles.searchIcon, styles.groupViewLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <View style={styles.rectangleGroup}>
        <View style={[styles.instanceChild, styles.instanceChildLayout1]} />
        <View style={[styles.instanceItem, styles.instanceLayout]} />
        <View style={[styles.instanceInner, styles.instanceLayout]} />
        <View style={[styles.instanceChild1, styles.instanceChildLayout1]} />
        <Text style={[styles.pakan, styles.pakanTypo]} />
        <Text style={[styles.aksesoris, styles.obatTypo]}>Sales</Text>
        <Text style={[styles.obat, styles.obatTypo]}>Expenses</Text>
        <Text style={[styles.ternak, styles.pakanTypo]}>
          <Text style={styles.dairyProduction}>Dairy production</Text>
          <Text style={styles.nak}>nak</Text>
        </Text>
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
          style={[styles.instanceChild2, styles.ellipseIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-40.png")}
        />
        <View style={[styles.rectangleContainer, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <LinearGradient
              style={styles.groupItem}
              locations={[0, 1]}
              colors={["#ff5a5a", "#ff7ca8"]}
            />
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require("../assets/rectangle-1950.png")}
            />
            <LinearGradient
              style={[styles.rectangleLineargradient, styles.rectanglePosition]}
              locations={[0, 1]}
              colors={["#ff626c", "#ff779c"]}
            />
          </View>
        </View>
        <Image
          style={[styles.instanceChild3, styles.instanceChildPosition1]}
          contentFit="cover"
          source={require("../assets/ellipse-40.png")}
        />
        <Image
          style={[styles.instanceChild4, styles.instanceChildPosition]}
          contentFit="cover"
          source={require("../assets/group-1970.png")}
        />
        <Image
          style={[styles.instanceChild5, styles.instanceChildPosition1]}
          contentFit="cover"
          source={require("../assets/ellipse-40.png")}
        />
        <Image
          style={[styles.instanceChild6, styles.instanceChildPosition]}
          contentFit="cover"
          source={require("../assets/group-1974.png")}
        />
      </View>
      <Text style={[styles.dairyValueChain, styles.searchTypo]}>
        Dairy value chain
      </Text>
      <View style={styles.rekomendasi}>
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
          style={[styles.rekomendasiChild, styles.maskGroupLayout]}
          locations={[0, 0.61]}
          colors={["rgba(0, 0, 0, 0.51)", "rgba(167, 167, 167, 0)"]}
        />
        <LinearGradient
          style={[styles.rekomendasiItem, styles.maskGroupLayout]}
          locations={[0, 0.61]}
          colors={["rgba(0, 0, 0, 0.51)", "rgba(167, 167, 167, 0)"]}
        />
        <Text style={[styles.sapiLimousin, styles.sapiTypo]}>
          Sapi Limousin
        </Text>
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
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union.png")}
          />
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={[styles.instanceChild7, styles.instanceChildLayout]} />
        <Text style={[styles.damen, styles.damenTypo]}>Teat disinfection</Text>
        <Text style={[styles.bentel, styles.bulanTypo]} />
        <Text style={[styles.rp10000, styles.damenTypo]}>Rp. 10.000,-</Text>
        <Image
          style={[styles.awardIcon2, styles.awardIconPosition]}
          contentFit="cover"
          source={require("../assets/award1.png")}
        />
        <Image
          style={styles.maskGroupIcon2Position}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <View style={[styles.instanceChild8, styles.maskGroupIcon2Position]} />
        <Image
          style={[styles.unionIcon2, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../assets/union1.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
        <View style={[styles.instanceChild9, styles.instanceChildLayout]} />
        <Text style={[styles.damen, styles.damenTypo]}>
          Importance of dairy hygiene
        </Text>
        <Text style={[styles.bentel, styles.bulanTypo]} />
        <Text style={[styles.rp10000, styles.damenTypo]}>Rp. 5.000,-</Text>
        <Image
          style={styles.awardIconPosition}
          contentFit="cover"
          source={require("../assets/award2.png")}
        />
        <Image
          style={styles.maskGroupIcon2Position}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <View style={[styles.instanceChild8, styles.maskGroupIcon2Position]} />
        <Image
          style={[styles.unionIcon3, styles.unionIconLayout]}
          contentFit="cover"
          source={require("../assets/union2.png")}
        />
      </View>
      <View style={[styles.androidSmall4Inner1, styles.frameItemLayout]}>
        <View style={[styles.frameItem, styles.frameItemLayout]} />
      </View>
      <Image
        style={[styles.dairyCows1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/dairycows-1.png")}
      />
      <Image
        style={[styles.x384Teatcare1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/684x384teatcare-1.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.calendar}>
        <View style={[styles.calendarChild, styles.calendarLayout]} />
        <View style={[styles.calendarItem, styles.calendarChildPosition1]} />
        <View style={[styles.calendarInner, styles.calendarChildLayout2]} />
        <View style={[styles.calendarChild1, styles.calendarChildLayout1]} />
        <View style={[styles.calendarChild2, styles.calendarChildLayout2]} />
        <View style={[styles.calendarChild3, styles.calendarChildPosition]} />
        <View style={[styles.calendarChild4, styles.calendarChildLayout1]} />
        <View style={[styles.calendarChild5, styles.calendarChildPosition]} />
        <View style={[styles.calendarChild6, styles.calendarChildLayout]} />
        <View style={[styles.calendarChild7, styles.calendarChildLayout]} />
        <Image
          style={styles.calendarChild8}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
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
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  rectangleParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  searchTypo: {
    textAlign: "left",
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.destriptionItems14Medium_size,
    position: "absolute",
  },
  groupViewLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  instanceChildLayout1: {
    width: 165,
    left: 15,
    height: 48,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  instanceLayout: {
    left: 195,
    width: 165,
    height: 48,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pakanTypo: {
    left: 70,
    textAlign: "left",
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.1,
    fontSize: FontSize.destriptionItems14Medium_size,
    position: "absolute",
  },
  obatTypo: {
    left: 250,
    color: Color.colorBlack,
    textAlign: "left",
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
    position: "absolute",
  },
  rectanglePosition: {
    left: 13,
    position: "absolute",
  },
  instanceChildPosition1: {
    top: 7,
    height: 34,
    width: 34,
    position: "absolute",
  },
  instanceChildPosition: {
    top: 9,
    display: "none",
    height: 30,
    width: 30,
    position: "absolute",
  },
  maskGroupLayout: {
    width: 334,
    height: 116,
    top: 0,
    position: "absolute",
  },
  sapiTypo: {
    color: Color.colorWhitesmoke_100,
    fontSize: FontSize.size_base,
    top: 62,
    letterSpacing: 0.3,
    textAlign: "left",
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    position: "absolute",
  },
  bulanTypo: {
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0.2,
    textAlign: "left",
    position: "absolute",
  },
  awardIconLayout: {
    height: 14,
    width: 14,
    top: 89,
    position: "absolute",
    overflow: "hidden",
  },
  instanceChildLayout: {
    height: 218,
    width: 165,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  damenTypo: {
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.destriptionItems14Medium,
    fontWeight: "500",
    position: "absolute",
  },
  awardIconPosition: {
    height: 10,
    top: 174,
    left: 12,
    width: 10,
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupIcon2Position: {
    height: 138,
    display: "none",
    width: 165,
    left: 0,
    top: 0,
    position: "absolute",
  },
  unionIconLayout: {
    height: 46,
    display: "none",
  },
  frameItemLayout: {
    height: 100,
    width: 100,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 108,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calendarLayout: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    left: "0%",
    right: "78.95%",
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  calendarChildPosition1: {
    bottom: "27.78%",
    top: "50%",
  },
  calendarChildLayout2: {
    left: "26.32%",
    right: "52.63%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  calendarChildLayout1: {
    left: "52.63%",
    right: "26.32%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  calendarChildPosition: {
    bottom: "55.56%",
    top: "22.22%",
  },
  calendarChildLayout: {
    left: "78.95%",
    right: "0%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  androidSmall4Child: {
    top: 11,
    left: -65,
  },
  androidSmall4Item: {
    top: 598,
    left: 216,
  },
  frameChild: {
    height: 32,
    width: 100,
  },
  ioncartOutlineIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  rectangleParent: {
    left: 16,
    width: 328,
    justifyContent: "space-between",
    zIndex: 0,
    top: 16,
  },
  androidSmall4Inner: {
    backgroundColor: "#092f03",
    justifyContent: "flex-end",
    left: 0,
    top: 0,
  },
  rectangleView: {
    left: 7,
    backgroundColor: Color.field,
    width: 345,
    height: 48,
    borderWidth: 0.5,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    top: 71,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  search: {
    top: 84,
    left: 34,
    color: "#969ba8",
  },
  searchIcon: {
    top: 81,
    left: 10,
    overflow: "hidden",
  },
  instanceChild: {
    top: 64,
  },
  instanceItem: {
    top: 0,
  },
  instanceInner: {
    top: 64,
  },
  instanceChild1: {
    top: 0,
  },
  pakan: {
    color: Color.color,
    top: 78,
  },
  aksesoris: {
    color: Color.colorBlack,
    top: 14,
  },
  obat: {
    color: Color.colorBlack,
    top: 78,
  },
  dairyProduction: {
    color: Color.colorBlack,
  },
  nak: {
    color: Color.colorWhite,
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
  },
  instanceChild2: {
    left: 203,
  },
  groupChild: {
    left: 0,
    top: 0,
  },
  groupItem: {
    borderRadius: Border.br_sm_5,
    backgroundColor: "transparent",
    width: 10,
    left: 17,
    height: 24,
    top: 0,
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    position: "absolute",
  },
  groupInner: {
    top: 8,
    left: 8,
    width: 16,
    height: 16,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 19,
    width: 9,
    height: 3,
    backgroundColor: "transparent",
    borderRadius: Border.br_5xs,
    left: 13,
  },
  groupView: {
    top: 3,
    left: 3,
    display: "none",
  },
  rectangleContainer: {
    left: 205,
    top: 73,
    width: 30,
  },
  instanceChild3: {
    left: 24,
  },
  instanceChild4: {
    left: 26,
  },
  instanceChild5: {
    left: 203,
  },
  instanceChild6: {
    left: 205,
  },
  rectangleGroup: {
    top: 121,
    left: -15,
    height: 112,
    width: 375,
    position: "absolute",
    overflow: "hidden",
  },
  dairyValueChain: {
    top: 199,
    left: 52,
    color: Color.colorBlack,
  },
  maskGroupIcon: {
    left: 361,
    width: 334,
  },
  maskGroupIcon1: {
    width: 334,
    left: 15,
  },
  rekomendasiChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: "transparent",
    width: 334,
    left: 15,
  },
  rekomendasiItem: {
    borderRadius: Border.br_9xs,
    left: 361,
    width: 334,
    backgroundColor: "transparent",
  },
  sapiLimousin: {
    width: 203,
    left: 27,
    display: "none",
  },
  sapiPerah: {
    width: 172,
    left: 373,
  },
  bulan: {
    left: 45,
    fontSize: FontSize.size_xs,
    top: 90,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhitesmoke_100,
    display: "none",
  },
  bulan1: {
    left: 391,
    fontSize: FontSize.size_xs,
    top: 90,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhitesmoke_100,
  },
  kg: {
    left: 120,
    fontSize: FontSize.size_xs,
    top: 90,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhitesmoke_100,
    display: "none",
  },
  kg1: {
    left: 466,
    fontSize: FontSize.size_xs,
    top: 90,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhitesmoke_100,
  },
  calendarIcon: {
    left: 27,
    display: "none",
  },
  calendarIcon1: {
    left: 373,
  },
  awardIcon: {
    left: 102,
    display: "none",
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
    top: 250,
    left: -13,
    height: 116,
    width: 375,
    position: "absolute",
  },
  instanceChild7: {
    borderRadius: Border.br_9xs,
  },
  damen: {
    top: 148,
    width: 146,
    left: 12,
    letterSpacing: 0.3,
    color: Color.colorBlack,
    fontSize: FontSize.destriptionItems14Medium_size,
  },
  bentel: {
    top: 173,
    fontSize: FontSize.size_3xs,
    color: Color.color1,
    width: 65,
    left: 26,
  },
  rp10000: {
    top: 192,
    color: Color.green2,
    width: 125,
    letterSpacing: 0.2,
    left: 12,
    fontSize: FontSize.size_xs,
  },
  awardIcon2: {
    display: "none",
  },
  instanceChild8: {
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_9xs,
  },
  unionIcon2: {
    width: 67,
  },
  frameView: {
    left: 200,
    height: 184,
    width: 146,
    top: 389,
    position: "absolute",
    overflow: "hidden",
  },
  instanceChild9: {
    borderRadius: 34,
  },
  unionIcon3: {
    width: 70,
  },
  rectangleParent1: {
    top: 381,
    width: 151,
    height: 186,
    overflow: "hidden",
  },
  frameItem: {
    left: 20,
    top: 16,
  },
  androidSmall4Inner1: {
    top: 162,
    left: 32,
  },
  dairyCows1Icon: {
    top: 390,
    left: 21,
    width: 133,
  },
  x384Teatcare1Icon: {
    width: 132,
    top: 389,
    left: 205,
  },
  vectorIcon: {
    height: "1.84%",
    width: "5.36%",
    top: "31.88%",
    right: "39.92%",
    bottom: "66.28%",
    left: "54.72%",
  },
  vectorIcon1: {
    height: "1.8%",
    width: "5.44%",
    top: "21.72%",
    right: "40.11%",
    bottom: "76.48%",
    left: "54.44%",
  },
  vectorIcon2: {
    height: "3.05%",
    width: "4.58%",
    top: "21.09%",
    right: "90.42%",
    bottom: "75.86%",
    left: "5%",
  },
  calendarChild: {
    bottom: "0%",
    top: "77.78%",
  },
  calendarItem: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    left: "0%",
    right: "78.95%",
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  calendarInner: {
    bottom: "0%",
    top: "77.78%",
  },
  calendarChild1: {
    bottom: "0%",
    top: "77.78%",
  },
  calendarChild2: {
    bottom: "27.78%",
    top: "50%",
  },
  calendarChild3: {
    left: "26.32%",
    right: "52.63%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  calendarChild4: {
    bottom: "27.78%",
    top: "50%",
  },
  calendarChild5: {
    left: "52.63%",
    right: "26.32%",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_12xs_5,
    width: "21.05%",
    height: "22.22%",
    borderStyle: "solid",
    position: "absolute",
  },
  calendarChild6: {
    bottom: "27.78%",
    top: "50%",
  },
  calendarChild7: {
    bottom: "55.56%",
    top: "22.22%",
  },
  calendarChild8: {
    height: "16.67%",
    width: "100%",
    top: "0%",
    bottom: "83.33%",
    right: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  calendar: {
    top: 200,
    width: 19,
    height: 18,
    left: 17,
    position: "absolute",
  },
  androidSmall4: {
    borderRadius: 20,
    width: 360,
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidSmall;
