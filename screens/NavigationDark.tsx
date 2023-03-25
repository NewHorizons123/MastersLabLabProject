import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const NavigationDark = () => {
  return (
    <View style={[styles.navigationDark, styles.pagenav1Layout]}>
      <View style={styles.pagenav}>
        <View
          style={[
            styles.pagenav1,
            styles.pagenav1Position,
            styles.pagenav1Layout,
          ]}
        >
          <Image
            style={[styles.ovalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/oval1.png")}
          />
          <Image
            style={[styles.androidArrowUpIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/androidarrowup.png")}
          />
          <Image
            style={[
              styles.rectangleIcon,
              styles.rectangleIconLayout,
              styles.rectangleIconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle11.png")}
          />
          <Image
            style={[
              styles.rectangleIcon1,
              styles.rectangleIconLayout,
              styles.rectangleIconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle11.png")}
          />
          <Image
            style={styles.rectangleIcon2}
            resizeMode="cover"
            source={require("../assets/rectangle12.png")}
          />
          <View style={[styles.rectangle, styles.pagenav1Position]} />
          <Image
            style={[
              styles.rectangleIcon3,
              styles.rectangleIconLayout,
              styles.rectangleIconLayout1,
            ]}
            resizeMode="cover"
            source={require("../assets/rectangle11.png")}
          />
          <Image
            style={[styles.rectangleIcon4, styles.rectangleIconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle13.png")}
          />
          <Text style={styles.services}>Services</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagenav1Layout: {
    overflow: "hidden",
    width: "100%",
  },
  pagenav1Position: {
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconLayout: {
    opacity: 0.2,
    borderRadius: Border.br_5xs_5,
    left: "31.48%",
    width: "68.52%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconLayout1: {
    height: "37.54%",
    opacity: 0.2,
  },
  ovalIcon: {
    height: "31.23%",
    width: "69.63%",
    top: "68.77%",
    bottom: "0%",
    left: "30.37%",
    right: "0%",
  },
  androidArrowUpIcon: {
    height: "10.3%",
    width: "22.96%",
    top: "82.89%",
    right: "15.19%",
    bottom: "6.81%",
    left: "61.85%",
  },
  rectangleIcon: {
    top: "45.35%",
    bottom: "17.11%",
  },
  rectangleIcon1: {
    top: "30.4%",
    bottom: "32.06%",
  },
  rectangleIcon2: {
    top: "15.45%",
    bottom: "47.01%",
    borderRadius: Border.br_5xs_5,
    left: "31.48%",
    width: "68.52%",
    height: "37.54%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    height: "8.31%",
    width: "62.96%",
    top: "30.73%",
    right: "37.04%",
    bottom: "60.96%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.gray_300,
  },
  rectangleIcon3: {
    top: "0.5%",
    bottom: "61.96%",
  },
  rectangleIcon4: {
    height: "22.59%",
    top: "0%",
    bottom: "77.41%",
  },
  services: {
    marginTop: -57,
    width: "44.81%",
    top: "50%",
    left: "8.89%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.latoRegular,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  pagenav1: {
    height: "100.33%",
    top: "-0.17%",
    bottom: "-0.17%",
    right: "0%",
  },
  pagenav: {
    top: 39,
    left: 0,
    width: 135,
    height: 300,
    position: "absolute",
  },
  navigationDark: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 384,
  },
});

export default NavigationDark;
