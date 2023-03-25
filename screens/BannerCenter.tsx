import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BannerCenter = () => {
  return (
    <View style={styles.bannerCenter}>
      <Image
        style={styles.bannerCenterChild}
        resizeMode="cover"
        source={require("../assets/group-31.png")}
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
    textAlign: "center",
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    lineHeight: 72,
    textDecoration: "underline",
    fontSize: FontSize.size_9xl,
    position: "absolute",
  },
  bannerCenterChild: {
    top: 7,
    left: 80,
    width: 1280,
    height: 721,
    position: "absolute",
    overflow: "hidden",
  },
  howToEditChild: {
    backgroundColor: Color.gray_200,
  },
  howToEditItem: {
    top: 187,
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
    height: 367,
    position: "absolute",
  },
  httpsllinklyhqcoml1cefr: {
    top: 374,
    left: 509,
    color: Color.cornflowerblue,
  },
  forFullEditing: {
    top: 293,
    left: 451,
    color: Color.black,
  },
  howToEdit: {
    display: "none",
  },
  bannerCenter: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 748,
  },
});

export default BannerCenter;
