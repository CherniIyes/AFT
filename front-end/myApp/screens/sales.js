import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AndroidSmall = () => {
  return (
    <View style={styles.androidSmall9}>
      <View style={[styles.androidSmall9Child, styles.androidLayout]} />
      <View style={[styles.androidSmall9Item, styles.androidLayout]} />
      <Text style={styles.findYourSuitable}>{`Find your suitable
Cow now.`}</Text>
      <View style={[styles.galaxyWatch, styles.watchLayout]}>
        <View style={[styles.unsplashj4dnkxz3sa, styles.aeIconLayout]} />
        <View style={styles.frameParent}>
          <View style={styles.gucciBlackParent}>
            <Text style={styles.gucciBlack}>Gucci Black</Text>
            <Text style={[styles.series4, styles.series4Typo]}>Series 4</Text>
          </View>
          <Text style={styles.text}>$599</Text>
        </View>
      </View>
      <Image
        style={[styles.menuIcon, styles.menuIconLayout]}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      <View style={[styles.productCard, styles.watchLayout]}>
        <View style={styles.amazfitBipU}>
          <View style={styles.frameParent}>
            <View style={styles.gucciBlackParent}>
              <Text style={styles.gucciBlack}>Kate Spade</Text>
              <Text style={[styles.series4, styles.series4Typo]}>
                Pro Series
              </Text>
            </View>
            <Text style={styles.text}>$199</Text>
          </View>
        </View>
        <View style={[styles.miWatch, styles.parentPosition1]}>
          <View style={styles.frameParent}>
            <View style={styles.gucciBlackParent}>
              <Text style={styles.gucciBlack}>Van Heusen</Text>
              <Text style={[styles.series4, styles.series4Typo]}>
                All Series
              </Text>
            </View>
            <Text style={styles.text}>$299</Text>
          </View>
          <Image
            style={[styles.aeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/ae.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.handBagsParent, styles.parentLayout]}>
          <Text style={styles.handBags}>Hand Bags</Text>
          <Text style={[styles.watch, styles.watchTypo]}>Watch</Text>
          <Text style={[styles.books, styles.watchTypo]}>Books</Text>
          <Text style={[styles.glasses, styles.watchTypo]}>Glasses</Text>
        </View>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
      </View>
      <View style={[styles.androidSmall9Inner, styles.groupChildBorder]}>
        <View style={styles.iconlybrokensearchParent}>
          <Image
            style={[styles.iconlybrokensearch, styles.parentPosition1]}
            contentFit="cover"
            source={require("../assets/iconlybrokensearch.png")}
          />
          <Text style={[styles.searchProduct, styles.series4Typo]}>
            Search Product
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.frameParentShadowBox]}>
        <View>
          <View style={styles.frameChild} />
          <View style={styles.frameWrapper}>
            <View style={[styles.homeParent, styles.parentPosition1]}>
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/home.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.categoriesParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/categories.png")}
            />
            <Text
              style={[styles.categories, styles.homeTypo]}
            >{`Categories `}</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.cartParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/cart.png")}
            />
            <Text style={[styles.categories, styles.homeTypo]}>My Cart</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.quillhamburgerParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/quillhamburger.png")}
            />
            <Text style={[styles.categories, styles.homeTypo]}>more</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameParentShadowBox]}>
        <View>
          <View style={styles.frameChild} />
          <View style={styles.frameWrapper}>
            <View style={[styles.homeParent, styles.parentPosition1]}>
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/home.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.categoriesParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/categories.png")}
            />
            <Text
              style={[styles.categories, styles.homeTypo]}
            >{`Categories `}</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.cartParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/cart.png")}
            />
            <Text style={[styles.categories, styles.homeTypo]}>My Cart</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.quillhamburgerParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/quillhamburger.png")}
            />
            <Text style={[styles.categories, styles.homeTypo]}>more</Text>
          </View>
        </View>
      </View>
      <View style={[styles.frameParent2, styles.frameParentShadowBox]}>
        <View>
          <View style={styles.frameChild} />
          <View style={styles.frameWrapper}>
            <View style={[styles.homeParent, styles.parentPosition1]}>
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/home1.png")}
              />
              <Text style={[styles.home2, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.categoriesParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/categories.png")}
            />
            <Text
              style={[styles.categories, styles.homeTypo]}
            >{`Categories `}</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.cartParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/cart.png")}
            />
            <Text style={[styles.categories, styles.homeTypo]}>My Cart</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild} />
          <View style={[styles.quillhamburgerParent, styles.parentPosition]}>
            <Image
              style={styles.homeIcon}
              contentFit="cover"
              source={require("../assets/quillhamburger.png")}
            />
            <Text style={[styles.categories, styles.homeTypo]}>more</Text>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentShadowBox]}>
          <View>
            <View style={styles.frameChild} />
            <View style={styles.frameWrapper}>
              <View style={[styles.homeParent, styles.parentPosition1]}>
                <Image
                  style={styles.homeIcon}
                  contentFit="cover"
                  source={require("../assets/home.png")}
                />
                <Text style={[styles.home, styles.homeTypo]}>Home</Text>
              </View>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.categoriesParent, styles.parentPosition]}>
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/categories.png")}
              />
              <Text
                style={[styles.categories, styles.homeTypo]}
              >{`Categories `}</Text>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.cartParent, styles.parentPosition]}>
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/cart.png")}
              />
              <Text style={[styles.categories, styles.homeTypo]}>My Cart</Text>
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.frameChild} />
            <View style={[styles.quillhamburgerParent, styles.parentPosition]}>
              <Image
                style={styles.homeIcon}
                contentFit="cover"
                source={require("../assets/quillhamburger.png")}
              />
              <Text style={[styles.categories, styles.homeTypo]}>more</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.aqIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/aq.png")}
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
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  watchLayout: {
    height: 166,
    position: "absolute",
  },
  aeIconLayout: {
    height: 79,
    left: 6,
  },
  series4Typo: {
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 0,
  },
  menuIconLayout: {
    width: 19,
    height: 19,
    position: "absolute",
  },
  parentPosition1: {
    left: 0,
    top: 0,
  },
  iconLayout: {
    width: 113,
    borderRadius: 11,
    position: "absolute",
  },
  parentLayout: {
    width: 246,
    position: "absolute",
  },
  watchTypo: {
    color: Color.colorLightslategray_200,
    lineHeight: 19,
    top: 0,
    fontFamily: FontFamily.ralewayMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi_5,
    textAlign: "left",
    position: "absolute",
  },
  groupChildBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  frameParentShadowBox: {
    flexDirection: "row",
    width: 360,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 15.593220710754395,
    },
    backgroundColor: Color.colorWhite,
  },
  homeTypo: {
    marginTop: 4,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
  },
  parentPosition: {
    left: "50%",
    zIndex: 1,
    top: 11,
    position: "absolute",
  },
  androidSmall9Child: {
    left: -65,
    top: 11,
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkgreen,
    borderRadius: Border.br_5xl,
  },
  androidSmall9Item: {
    top: 598,
    left: 216,
  },
  findYourSuitable: {
    top: 109,
    left: 50,
    fontSize: 28,
    lineHeight: 37,
    fontWeight: "700",
    fontFamily: FontFamily.ralewayBold,
    color: Color.colorDarkslategray,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  unsplashj4dnkxz3sa: {
    top: -2,
    width: 110,
    borderRadius: 11,
    height: 79,
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    position: "absolute",
  },
  gucciBlack: {
    color: Color.secondary,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi_5,
    textAlign: "left",
    letterSpacing: 0,
  },
  series4: {
    fontSize: FontSize.size_3xs_4,
    lineHeight: 11,
    color: Color.colorLightslategray_100,
    marginTop: 6.24,
  },
  gucciBlackParent: {
    justifyContent: "center",
  },
  text: {
    lineHeight: 15,
    fontFamily: FontFamily.poppinsMedium,
    marginTop: 15.59,
    color: Color.colorTan,
    fontWeight: "500",
    fontSize: FontSize.size_smi_5,
    textAlign: "left",
    letterSpacing: 0,
  },
  frameParent: {
    top: 98,
    justifyContent: "center",
    left: 6,
    position: "absolute",
  },
  galaxyWatch: {
    top: 236,
    left: 198,
    width: 122,
    shadowOpacity: 1,
    elevation: 27.29,
    shadowRadius: 27.29,
    shadowOffset: {
      width: 0,
      height: 15.593220710754395,
    },
    shadowColor: "rgba(23, 20, 57, 0.04)",
    backgroundColor: Color.colorLightgray,
    height: 166,
    borderRadius: 11,
    overflow: "hidden",
  },
  menuIcon: {
    top: 13,
    left: 16,
    height: 19,
    overflow: "hidden",
  },
  amazfitBipU: {
    left: 139,
    top: 0,
    height: 166,
    width: 122,
    shadowOpacity: 1,
    elevation: 27.29,
    shadowRadius: 27.29,
    shadowOffset: {
      width: 0,
      height: 15.593220710754395,
    },
    shadowColor: "rgba(23, 20, 57, 0.04)",
    backgroundColor: Color.colorLightgray,
    borderRadius: 11,
    position: "absolute",
    overflow: "hidden",
  },
  aeIcon: {
    top: 12,
    height: 79,
    left: 6,
  },
  miWatch: {
    height: 166,
    position: "absolute",
    width: 122,
    shadowOpacity: 1,
    elevation: 27.29,
    shadowRadius: 27.29,
    shadowOffset: {
      width: 0,
      height: 15.593220710754395,
    },
    shadowColor: "rgba(23, 20, 57, 0.04)",
    backgroundColor: Color.colorLightgray,
    borderRadius: 11,
    overflow: "hidden",
  },
  productCard: {
    top: 407,
    left: 59,
    width: 261,
  },
  handBags: {
    lineHeight: 19,
    left: 0,
    top: 0,
    color: Color.colorTan,
    fontFamily: FontFamily.ralewaySemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi_5,
    textAlign: "left",
    position: "absolute",
  },
  watch: {
    left: 85,
  },
  books: {
    left: 144,
  },
  glasses: {
    left: 200,
  },
  handBagsParent: {
    left: 0,
    top: 0,
    height: 19,
  },
  groupChild: {
    top: 24,
    left: -1,
    borderColor: Color.colorDarkslategray,
    borderTopWidth: 1.6,
    width: 37,
    height: 2,
  },
  groupParent: {
    top: 200,
    left: 54,
    height: 25,
  },
  iconlybrokensearch: {
    height: 19,
    width: 19,
    position: "absolute",
  },
  searchProduct: {
    top: 3,
    left: 31,
    fontSize: 11,
    color: "rgba(27, 21, 61, 0.55)",
    position: "absolute",
  },
  iconlybrokensearchParent: {
    width: 108,
    height: 19,
  },
  androidSmall9Inner: {
    top: 48,
    left: 81,
    borderRadius: 31,
    borderColor: "rgba(144, 149, 166, 0.5)",
    borderWidth: 0.8,
    width: 209,
    paddingLeft: 12,
    paddingTop: 9,
    paddingRight: 72,
    paddingBottom: 9,
    justifyContent: "center",
  },
  frameChild: {
    width: 86,
    height: 55,
    zIndex: 0,
    backgroundColor: Color.colorWhite,
  },
  homeIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  home: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    color: Color.colorTan,
  },
  homeParent: {
    position: "absolute",
  },
  frameWrapper: {
    left: 30,
    width: 25,
    height: 35,
    zIndex: 1,
    top: 11,
    position: "absolute",
  },
  categories: {
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDimgray,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
  },
  categoriesParent: {
    marginLeft: -25,
    alignItems: "center",
  },
  rectangleGroup: {
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cartParent: {
    marginLeft: -18.5,
    alignItems: "center",
  },
  quillhamburgerParent: {
    marginLeft: -12,
  },
  frameView: {
    left: 3,
    top: 583,
    flexDirection: "row",
    width: 360,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  frameParent1: {
    left: 3,
    top: 583,
    flexDirection: "row",
    width: 360,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  home2: {
    color: "#f6b304",
    fontFamily: FontFamily.robotoBold,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
  },
  frameParent3: {
    marginLeft: 5,
  },
  frameParent2: {
    left: 3,
    top: 583,
    flexDirection: "row",
    width: 360,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  aqIcon: {
    top: 240,
    left: 201,
    height: 86,
  },
  androidSmall9: {
    borderRadius: 20,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AndroidSmall;
