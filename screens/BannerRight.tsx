import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const BannerRight = () => {
  return (
    <View style={[styles.bannerRight, styles.bannerLayout]}>
      <Image
        style={[
          styles.bannerRightChild,
          styles.childPosition,
          styles.bannerLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
      <View style={[styles.howToEdit, styles.howLayout]}>
        <View
          style={[
            styles.howToEditChild,
            styles.howLayout,
            styles.childPosition,
          ]}
        />
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
  bannerLayout: {
    overflow: "hidden",
    height: 959,
  },
  childPosition: {
    left: 0,
    top: 0,
  },
  howLayout: {
    height: 924,
    width: 1456,
    position: "absolute",
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
  bannerRightChild: {
    width: 1360,
    position: "absolute",
  },
  howToEditChild: {
    backgroundColor: Color.gray_200,
  },
  howToEditItem: {
    top: 261,
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
    top: 448,
    left: 509,
    color: Color.cornflowerblue,
  },
  forFullEditing: {
    top: 367,
    left: 451,
    color: Color.black,
  },
  howToEdit: {
    top: 35,
    left: 4,
    display: "none",
  },
  bannerRight: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
  },
});

export default BannerRight;
