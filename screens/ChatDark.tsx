import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ChatDark = () => {
  return (
    <View style={styles.chatDark}>
      <View style={styles.chat}>
        <View style={[styles.popup, styles.popupPosition]}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle7.png")}
          />
          <View style={[styles.input, styles.inputLayout]}>
            <View style={[styles.formtextfield, styles.popupPosition]}>
              <Text style={styles.whatIsYour}>Ask something</Text>
              <Image
                style={[styles.lineIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
            </View>
            <Image
              style={[styles.sendIcon, styles.inputLayout]}
              resizeMode="cover"
              source={require("../assets/send.png")}
            />
          </View>
          <View style={[styles.answer, styles.answerLayout]}>
            <Image
              style={[styles.rectangleIcon1, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle8.png")}
            />
            <Text
              style={[styles.holaMaecenasNisl, styles.holaTypo]}
            >{`Hola!, Maecenas `}</Text>
            <Image
              style={[styles.avatarIcon, styles.popupPosition]}
              resizeMode="cover"
              source={require("../assets/avatar1.png")}
            />
          </View>
          <View style={[styles.answer1, styles.answerLayout]}>
            <Image
              style={[styles.rectangleIcon2, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle9.png")}
            />
            <Text
              style={[styles.holaMaecenasNisl, styles.holaTypo]}
            >{`Hola!, Maecenas `}</Text>
            <Image
              style={[styles.avatarIcon, styles.popupPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <View style={[styles.answer2, styles.answerLayout]}>
            <Image
              style={[styles.rectangleIcon3, styles.rectangleIconPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle10.png")}
            />
            <Text
              style={[styles.holaMaecenasNisl, styles.holaTypo]}
            >{`Hola!, Maecenas `}</Text>
            <Image
              style={[styles.avatarIcon, styles.popupPosition]}
              resizeMode="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <View style={[styles.question, styles.questionLayout]}>
            <View style={[styles.rectangle, styles.rectanglePosition]} />
            <Text
              style={[styles.holaMaecenasNisl3, styles.holaTypo]}
            >{`Hola!, Maecenas nisl `}</Text>
          </View>
          <View style={[styles.question1, styles.questionLayout]}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <Text
              style={[styles.holaMaecenasNisl3, styles.holaTypo]}
            >{`Hola!, Maecenas nisl `}</Text>
          </View>
          <View style={styles.rectangle2} />
          <Image
            style={[styles.iosCloseEmptyIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ioscloseempty1.png")}
          />
          <Text style={styles.liveChat}>Live Chat</Text>
          <Image
            style={[styles.ovalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/oval.png")}
          />
        </View>
        <Image
          style={styles.buttonIcon}
          resizeMode="cover"
          source={require("../assets/button.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  popupPosition: {
    left: 0,
    position: "absolute",
  },
  inputLayout: {
    height: 37,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  answerLayout: {
    height: 52,
    width: 279,
    left: 19,
    position: "absolute",
  },
  rectangleIconPosition: {
    width: 230,
    left: 52,
    height: 52,
    top: 0,
    position: "absolute",
  },
  holaTypo: {
    height: 28,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    position: "absolute",
  },
  questionLayout: {
    height: 57,
    width: 296,
    left: 80,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.seagreen,
    height: 57,
    width: 296,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: -46,
    left: -49,
    borderRadius: Border.br_base,
    width: 484,
    height: 769,
    position: "absolute",
  },
  whatIsYour: {
    marginTop: -11,
    left: "0%",
    fontSize: FontSize.size_base,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    top: "50%",
    position: "absolute",
  },
  lineIcon: {
    height: "5.56%",
    width: "100.4%",
    top: "95.83%",
    right: "-0.07%",
    bottom: "-1.39%",
    left: "-0.33%",
  },
  formtextfield: {
    top: 1,
    width: 302,
    height: 36,
  },
  sendIcon: {
    left: 316,
    width: 37,
    top: 0,
  },
  input: {
    top: 613,
    width: 353,
    left: 19,
    height: 37,
  },
  rectangleIcon1: {
    borderRadius: Border.br_3xs,
  },
  holaMaecenasNisl: {
    top: 10,
    left: 70,
    width: 197,
    color: Color.lightblue,
  },
  avatarIcon: {
    width: 38,
    height: 38,
    top: 0,
  },
  answer: {
    top: 89,
  },
  rectangleIcon2: {
    borderRadius: Border.br_5xs,
  },
  answer1: {
    top: 285,
  },
  rectangleIcon3: {
    borderRadius: Border.br_6xs,
  },
  answer2: {
    top: 490,
  },
  rectangle: {
    borderRadius: Border.br_5xs,
  },
  holaMaecenasNisl3: {
    top: 13,
    left: 12,
    color: Color.beige,
    width: 276,
  },
  question: {
    top: 180,
  },
  rectangle1: {
    borderRadius: Border.br_6xs,
  },
  question1: {
    top: 385,
  },
  rectangle2: {
    height: "11.48%",
    width: "103.5%",
    top: "-1.27%",
    right: "-1.56%",
    bottom: "89.79%",
    left: "-1.95%",
    backgroundColor: Color.steelblue_200,
    position: "absolute",
  },
  iosCloseEmptyIcon: {
    height: "2.61%",
    width: "4.54%",
    top: "3.95%",
    right: "5.84%",
    bottom: "93.44%",
    left: "89.62%",
  },
  liveChat: {
    marginTop: -316,
    width: "54.73%",
    left: "10.51%",
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.lightblue,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  ovalIcon: {
    height: "2.24%",
    width: "3.89%",
    top: "4.17%",
    right: "92.22%",
    bottom: "93.59%",
    left: "3.89%",
  },
  popup: {
    height: 671,
    top: 0,
    width: 386,
  },
  buttonIcon: {
    top: 640,
    left: 256,
    width: 187,
    height: 185,
    position: "absolute",
  },
  chat: {
    top: 55,
    left: 58,
    height: 767,
    width: 386,
    position: "absolute",
  },
  chatDark: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    width: "100%",
    height: 880,
    overflow: "hidden",
  },
});

export default ChatDark;
