import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BannerCenterDark = () => {
  return (
    <View style={styles.bannerCenterDark}>
      <Image
        style={styles.bannerCenterDarkChild}
        resizeMode="cover"
        source={require("../assets/group-34.png")}
      />
      <View style={[styles.howToEdit, styles.howPosition]}>
        <View style={[styles.howToEditChild, styles.howPosition]} />
        <View style={styles.howToEditItem} />
        <Text
          style={[styles.httpsllinklyhqcoml1cefr, styles.forFullEditingTypo]}
        >
          https://l.linklyhq.com/l/1CefR
        </Text>
        <Text style={[styles.forFullEditing, styles.forFullEditingTypo]}>
          For full editing please check link bellow
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  howPosition: {
    width: 1456,
    left: 0,
    top: 0,
    position: "absolute",
    height: 748,
  },
  forFullEditingTypo: {
    height: 58,
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    lineHeight: 72,
    textDecoration: "underline",
    fontSize: FontSize.size_9xl,
    position: "absolute",
  },
  bannerCenterDarkChild: {
    top: 7,
    left: 80,
    width: 1280,
    height: 718,
    position: "absolute",
    overflow: "hidden",
  },
  howToEditChild: {
    backgroundColor: Color.gray_200,
  },
  howToEditItem: {
    top: 211,
    left: 365,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.azure,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 702,
    height: 297,
    position: "absolute",
  },
  httpsllinklyhqcoml1cefr: {
    top: 363,
    left: 509,
    color: Color.cornflowerblue,
    width: 415,
  },
  forFullEditing: {
    top: 297,
    left: 451,
    color: Color.black,
    width: 551,
  },
  howToEdit: {
    display: "none",
  },
  bannerCenterDark: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 748,
  },
});

export default BannerCenterDark;
