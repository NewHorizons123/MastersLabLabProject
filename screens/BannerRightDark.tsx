import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BannerRightDark = () => {
  return (
    <View style={styles.bannerRightDark}>
      <Image
        style={styles.bannerRightDarkChild}
        resizeMode="cover"
        source={require("../assets/group-33.png")}
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
    width: 1442,
    left: 0,
    top: 0,
    position: "absolute",
    height: 959,
  },
  forFullEditingTypo: {
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    lineHeight: 72,
    textDecoration: "underline",
    fontSize: FontSize.size_9xl,
    position: "absolute",
  },
  bannerRightDarkChild: {
    width: 1360,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 959,
  },
  howToEditChild: {
    backgroundColor: Color.gray_200,
  },
  howToEditItem: {
    top: 261,
    left: 369,
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
    height: 367,
    position: "absolute",
  },
  httpsllinklyhqcoml1cefr: {
    top: 448,
    left: 513,
    color: Color.cornflowerblue,
  },
  forFullEditing: {
    top: 367,
    left: 455,
    color: Color.black,
  },
  howToEdit: {
    display: "none",
  },
  bannerRightDark: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 959,
  },
});

export default BannerRightDark;
