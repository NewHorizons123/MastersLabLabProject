import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
      <View style={styles.backgroundPosition}>
        <View style={[styles.background, styles.backgroundPosition]} />
        <Text
          style={styles.aeneanSitAmet}
        >{`Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula. Nulla vehicula leo ut augue tincidunt, placerat tempus nulla rutrum. `}</Text>
        <View style={[styles.buttonflatprimary, styles.borderedprimaryLayout]}>
          <View style={[styles.borderedprimary, styles.borderedprimaryLayout]}>
            <View style={styles.rectangle} />
            <Text style={styles.seeDetail}>ACCEPT</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    width: 1280,
    left: 0,
    top: 0,
    position: "absolute",
    height: 79,
  },
  borderedprimaryLayout: {
    width: 205,
    height: 39,
    position: "absolute",
  },
  background: {
    backgroundColor: Color.darkslategray_100,
  },
  aeneanSitAmet: {
    top: 19,
    left: 33,
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
    width: 924,
    height: 39,
    color: Color.white,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_lgi_5,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  seeDetail: {
    marginTop: -10.5,
    width: "66.1%",
    top: "50%",
    left: "17.07%",
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  borderedprimary: {
    left: 0,
    top: 0,
    width: 205,
    overflow: "hidden",
  },
  buttonflatprimary: {
    top: 20,
    left: 1047,
  },
  notification: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 79,
    width: "100%",
  },
});

export default Notification1;
