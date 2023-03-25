import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const LandingDark = () => {
  return (
    <View style={styles.landingDark}>
      <View style={[styles.footer, styles.footerLayout]}>
        <Image
          style={[styles.decoIcon, styles.footerLayout]}
          resizeMode="cover"
          source={require("../assets/deco1.png")}
        />
        <View style={styles.footermenu}>
          <View style={styles.footermenu1}>
            <View
              style={[
                styles.footer1,
                styles.footer1Position,
                styles.rectangleLayout1,
              ]}
            >
              <Text
                style={[styles.namPosuereAccumsan, styles.skyrevTheme2021Typo]}
              >
                Nam posuere accumsan porta. Integer id tincidunt sit amet sed
                libero.
              </Text>
              <Text
                style={[styles.skyrevTheme2021, styles.skyrevTheme2021Typo]}
              >
                © Skyrev Theme 2021
              </Text>
              <View style={styles.sitemap}>
                <Text
                  style={[styles.company, styles.companyTypo, styles.loginText]}
                >
                  COMPANY
                </Text>
                <Text
                  style={[
                    styles.donecDignissimCura,
                    styles.namSollicitudNuncTypo,
                    styles.loginTypo1,
                  ]}
                >{`Donec dignissim

Curabitur egestas

Nam posuere

Aenean facilisis`}</Text>
              </View>
              <View style={[styles.sitemap1, styles.sitemapPosition]}>
                <Text
                  style={[styles.company, styles.companyTypo, styles.loginText]}
                >
                  Services
                </Text>
                <Text
                  style={[
                    styles.donecDignissimCura,
                    styles.namSollicitudNuncTypo,
                    styles.loginTypo1,
                  ]}
                >{`Cras convallis

Vestibulum faucibus

Quisque lacinia purus

Aliquam nec ex`}</Text>
              </View>
              <View style={styles.logolandsacpe}>
                <View style={styles.group}>
                  <Image
                    style={[styles.luxiHostingLogoIcon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/luxihostinglogo.png")}
                  />
                  <Text
                    style={[
                      styles.medical,
                      styles.loginTypo,
                      styles.medicalTypo,
                    ]}
                  >
                    Medical
                  </Text>
                </View>
              </View>
              <View style={[styles.sitemapCopy, styles.sitemapPosition]}>
                <Text
                  style={[styles.company, styles.companyTypo, styles.loginText]}
                >
                  resources
                </Text>
                <Text
                  style={[
                    styles.donecDignissimCura,
                    styles.namSollicitudNuncTypo,
                    styles.loginTypo1,
                  ]}
                >{`Suspendisse porttitor

Nam posuere

Curabitur egestas `}</Text>
              </View>
              <Image
                style={[styles.socmedIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/socmed1.png")}
              />
            </View>
            <View style={styles.langSelect}>
              <View style={[styles.rectangle, styles.rectanglePosition2]} />
              <Image
                style={[styles.chevronDownIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/chevrondown1.png")}
              />
              <Image
                style={[styles.androidGlobeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/androidglobe1.png")}
              />
              <View style={styles.group1}>
                <Text style={[styles.englishEn, styles.englishEnPosition]}>
                  English - En
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.contactCta, styles.contactCtaLayout]}>
        <LinearGradient
          style={[styles.rectangle1, styles.contactCtaLayout]}
          locations={[0, 1]}
          colors={["#357a38", "#00579b"]}
          useAngle={true}
          angle={142.77}
        />
        <View
          style={[styles.buttonoutlinedprimaryLarge, styles.flatprimaryLayout]}
        >
          <View style={[styles.flatprimary, styles.flatprimaryLayout]}>
            <View style={[styles.rectangle2, styles.rectanglePosition2]} />
            <Text
              style={[
                styles.createAppointmentN,
                styles.seeDetailText,
                styles.englishEnPosition,
                styles.loginTypo,
              ]}
            >
              Create Appointment Now!
            </Text>
          </View>
        </View>
        <View style={styles.text}>
          <Text
            style={[styles.readyToGet, styles.medicalTypo, styles.companyTypo]}
          >
            Ready to get started ?
          </Text>
          <Text
            style={[styles.pellentesqueAcBibe, styles.namSollicitudNuncTypo]}
          >
            Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
          </Text>
        </View>
      </View>
      <View style={styles.askDoctor}>
        <View
          style={[styles.titledefaultprimary, styles.titledefaultprimaryLayout]}
        >
          <Text style={[styles.ourSerivces, styles.companyTypo]}>
            AskDoctos
          </Text>
        </View>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background1.png")}
        />
        <View style={styles.categories}>
          <View style={styles.rectangle3} />
          <Text
            style={[
              styles.allOrthopedicNutriContainer,
              styles.curabiturEgestasCoTypo,
            ]}
          >
            <Text style={styles.all}>{`All
`}</Text>
            <Text style={styles.blankLine}> </Text>
            <Text style={styles.orthopedicNutritionistPedi}>{`Orthopedic

Nutritionist

Pediatric

Anaesthestic`}</Text>
          </Text>
        </View>
        <Image
          style={styles.doctorsIcon}
          resizeMode="cover"
          source={require("../assets/doctors1.png")}
        />
        <View style={[styles.howToEdit, styles.howLayout]}>
          <View style={[styles.howToEditChild, styles.howLayout]} />
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
      <View style={[styles.ourExpertise, styles.ourExpertiseLayout]}>
        <Image
          style={[styles.illustrationTitle, styles.ourExpertiseLayout]}
          resizeMode="cover"
          source={require("../assets/illustration--title1.png")}
        />
        <View
          style={[
            styles.titledefaultprimary1,
            styles.titledefaultprimaryLayout,
          ]}
        >
          <Text style={[styles.ourSerivces, styles.companyTypo]}>
            Our Speciality
          </Text>
        </View>
        <View style={styles.tags}>
          <View style={[styles.tag, styles.tagPosition2]}>
            <View
              style={[
                styles.rectangle4,
                styles.rectanglePosition1,
                styles.rectangleLayout1,
              ]}
            />
            <Text style={[styles.dentist, styles.dentistTypo]}>Dentist</Text>
          </View>
          <View style={styles.tag1}>
            <View style={[styles.rectangleLayout, styles.rectanglePosition1]} />
            <Text style={[styles.padriatic, styles.padriaticPosition]}>
              Padriatic
            </Text>
          </View>
          <View style={[styles.tagLayout, styles.tagPosition2]}>
            <View
              style={[
                styles.rectangle4,
                styles.rectanglePosition1,
                styles.rectangleLayout1,
              ]}
            />
            <Text style={[styles.cardiology, styles.dentistTypo]}>
              Cardiology
            </Text>
          </View>
          <View style={[styles.tag3, styles.tagPosition1]}>
            <View
              style={[
                styles.rectangle7,
                styles.rectanglePosition,
                styles.rectangleLayout,
              ]}
            />
            <Text style={[styles.traumatologi, styles.othopaediPosition]}>
              Traumatologi
            </Text>
          </View>
          <View style={[styles.tag4, styles.tagPosition1]}>
            <View
              style={[
                styles.rectangle8,
                styles.rectanglePosition,
                styles.rectangleLayout,
              ]}
            />
            <Text style={[styles.othopaedi, styles.othopaediPosition]}>
              Othopaedi
            </Text>
          </View>
          <View style={[styles.tag5, styles.tagPosition1]}>
            <View
              style={[
                styles.rectangle8,
                styles.rectanglePosition,
                styles.rectangleLayout,
              ]}
            />
            <Text style={[styles.anestesiologi, styles.othopaediPosition]}>
              Anestesiologi
            </Text>
          </View>
          <View style={[styles.tag6, styles.tagPosition]}>
            <View style={styles.rectanglePosition1} />
            <Text style={[styles.reumatologi, styles.padriaticPosition]}>
              Reumatologi
            </Text>
          </View>
          <View style={[styles.tag7, styles.tagPosition]}>
            <View style={styles.rectanglePosition1} />
            <Text style={[styles.andrologi, styles.padriaticPosition]}>
              Andrologi
            </Text>
          </View>
          <View style={[styles.tagPosition, styles.tagLayout]}>
            <View style={styles.rectanglePosition1} />
            <Text style={[styles.ortodonsia, styles.padriaticPosition]}>
              Ortodonsia
            </Text>
          </View>
        </View>
        <Text
          style={[styles.curabiturEgestasCo, styles.curabiturEgestasCoTypo]}
        >
          Curabitur egestas consequat lorem, vel fermentum augue porta id.
          Aliquam lobortis magna neque, gravida consequat velit venenatis at.
        </Text>
      </View>
      <View style={[styles.banner, styles.bannerLayout]}>
        <Image
          style={[styles.illustrationIcon, styles.bannerLayout]}
          resizeMode="cover"
          source={require("../assets/illustration.png")}
        />
        <View style={styles.text1}>
          <Text style={[styles.moreInfo, styles.loginText]}>More Info</Text>
          <View style={[styles.buttonflatprimary, styles.footer1Position]}>
            <View
              style={[
                styles.flatprimary1,
                styles.footer1Position,
                styles.rectangleLayout1,
              ]}
            >
              <View
                style={[
                  styles.rectangle13,
                  styles.rectanglePosition,
                  styles.rectangleLayout1,
                ]}
              />
              <Text
                style={[
                  styles.seeDetail,
                  styles.seeDetailPosition,
                  styles.seeDetailText,
                ]}
              >
                register now
              </Text>
            </View>
          </View>
          <Text style={[styles.loremIpsumDolor, styles.loginTypo]}>
            Lorem ipsum dolor amet
          </Text>
          <Text
            style={[styles.namSollicitudNunc, styles.namSollicitudNuncTypo]}
          >
            Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum lobortis.
          </Text>
        </View>
      </View>
      <View style={styles.defaultheadermenu}>
        <View style={styles.header}>
          <Text
            style={[styles.menu1Menu2Menu3Container, styles.seeDetailPosition]}
          >
            <Text style={styles.all}>Menu1</Text>
            <Text style={styles.text2}>{`           `}</Text>
            <Text style={styles.orthopedicNutritionistPedi}>
              Menu2 Menu3 Menu4 Menu5
            </Text>
          </Text>
          <View style={[styles.rectangle14, styles.rectanglePosition]} />
          <View style={styles.option}>
            <Text
              style={[
                styles.login,
                styles.loginTypo,
                styles.loginText,
                styles.loginTypo1,
              ]}
            >
              Login
            </Text>
            <View
              style={[
                styles.buttonregular,
                styles.footer1Position,
                styles.rectangleLayout1,
              ]}
            >
              <View
                style={[
                  styles.flatprimary1,
                  styles.footer1Position,
                  styles.rectangleLayout1,
                ]}
              >
                <View
                  style={[
                    styles.rectangle15,
                    styles.footer1Position,
                    styles.rectangleLayout1,
                  ]}
                />
                <Text style={styles.seeDetail1}>SEE DETAIL</Text>
              </View>
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/line2.png")}
            />
            <Image
              style={[styles.androidSettingsIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/androidsettings1.png")}
            />
          </View>
        </View>
        <View style={styles.logolandsacpe1}>
          <View style={styles.group}>
            <Image
              style={[styles.luxiHostingLogoIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/luxihostinglogo.png")}
            />
            <Text
              style={[styles.medical, styles.loginTypo, styles.medicalTypo]}
            >
              Medical
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLayout: {
    width: 1613,
    position: "absolute",
  },
  footer1Position: {
    bottom: "0%",
    position: "absolute",
  },
  rectangleLayout1: {
    height: "100%",
    top: "0%",
  },
  skyrevTheme2021Typo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 24,
    textAlign: "left",
    color: Color.gray_100,
    fontSize: FontSize.size_base,
    left: "0%",
    position: "absolute",
  },
  companyTypo: {
    fontFamily: FontFamily.latoBlack,
    fontWeight: "900",
    left: "0%",
  },
  loginText: {
    textTransform: "uppercase",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  namSollicitudNuncTypo: {
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  loginTypo1: {
    fontSize: FontSize.size_base,
    color: Color.white,
  },
  sitemapPosition: {
    bottom: "1.06%",
    width: "10.77%",
    height: "98.94%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  medicalTypo: {
    fontSize: FontSize.size_17xl,
    color: Color.white,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition2: {
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  englishEnPosition: {
    marginTop: -10.5,
    fontSize: FontSize.size_lg,
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  contactCtaLayout: {
    height: 168,
    width: 1215,
    position: "absolute",
  },
  flatprimaryLayout: {
    height: 69,
    width: 313,
    position: "absolute",
  },
  seeDetailText: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  titledefaultprimaryLayout: {
    height: 78,
    width: 402,
    position: "absolute",
  },
  curabiturEgestasCoTypo: {
    lineHeight: 36,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.latoRegular,
    textAlign: "left",
    position: "absolute",
  },
  howLayout: {
    height: 745,
    width: 1456,
    position: "absolute",
  },
  forFullEditingTypo: {
    fontFamily: FontFamily.openSansBold,
    lineHeight: 72,
    textDecoration: "underline",
    fontSize: FontSize.size_9xl,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  ourExpertiseLayout: {
    height: 607,
    position: "absolute",
  },
  tagPosition2: {
    height: 30,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition1: {
    borderColor: "rgba(255, 255, 255, 0.12)",
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  dentistTypo: {
    fontSize: FontSize.size_sm,
    marginTop: -9,
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    top: "50%",
    color: Color.gray_100,
    position: "absolute",
  },
  padriaticPosition: {
    marginTop: -8.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    top: "50%",
    color: Color.gray_100,
    position: "absolute",
  },
  tagPosition1: {
    top: 46,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    backgroundColor: Color.deepskyblue,
    bottom: "0%",
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_base_5,
    height: "100%",
    top: "0%",
  },
  othopaediPosition: {
    marginTop: -9.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.latoRegular,
    top: "50%",
    position: "absolute",
  },
  tagPosition: {
    top: 93,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  tagLayout: {
    width: 183,
    left: 310,
  },
  bannerLayout: {
    height: 1918,
    position: "absolute",
  },
  seeDetailPosition: {
    marginTop: -14,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  decoIcon: {
    left: 140,
    height: 838,
    top: 0,
  },
  namPosuereAccumsan: {
    width: "24.36%",
    top: "41.27%",
    textAlign: "left",
    color: Color.gray_100,
    height: "28.57%",
  },
  skyrevTheme2021: {
    height: "12.7%",
    width: "25.98%",
    top: "86.24%",
    textAlign: "left",
    color: Color.gray_100,
  },
  company: {
    marginTop: -94.5,
    color: Color.lightblue,
    fontSize: FontSize.size_lg,
  },
  donecDignissimCura: {
    marginTop: -47.5,
    lineHeight: 20,
    color: Color.white,
    top: "50%",
  },
  sitemap: {
    top: "1.06%",
    right: "62.82%",
    left: "26.41%",
    width: "10.77%",
    height: "98.94%",
    bottom: "0%",
    position: "absolute",
  },
  sitemap1: {
    right: "45.13%",
    left: "44.1%",
  },
  luxiHostingLogoIcon: {
    height: "99.01%",
    width: "28.27%",
    right: "71.73%",
    bottom: "0.99%",
    left: "0%",
    top: "0%",
  },
  medical: {
    marginTop: -23,
    left: "32.46%",
  },
  group: {
    height: "103.7%",
    bottom: "-3.7%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  logolandsacpe: {
    width: "16.32%",
    right: "83.68%",
    bottom: "71.43%",
    height: "28.57%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sitemapCopy: {
    right: "27.44%",
    left: "61.79%",
  },
  socmedIcon: {
    height: "19.84%",
    width: "17.44%",
    top: "15.87%",
    bottom: "64.29%",
    left: "82.56%",
    right: "0%",
  },
  footer1: {
    width: "99.74%",
    right: "0.26%",
    left: "0%",
  },
  rectangle: {
    borderRadius: Border.br_8xs,
    backgroundColor: "#424242",
    borderColor: "#03acf2",
  },
  chevronDownIcon: {
    height: "22.02%",
    width: "7.11%",
    top: "38.96%",
    right: "7.11%",
    bottom: "39.02%",
    left: "85.78%",
  },
  androidGlobeIcon: {
    height: "50.65%",
    width: "9.24%",
    top: "24.68%",
    right: "83.65%",
    bottom: "24.68%",
    left: "7.11%",
  },
  englishEn: {
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.white,
    textAlign: "left",
  },
  group1: {
    height: "54.55%",
    width: "64.45%",
    top: "23.38%",
    right: "14.22%",
    bottom: "22.08%",
    left: "21.33%",
    position: "absolute",
    overflow: "hidden",
  },
  langSelect: {
    height: "20.37%",
    width: "17.99%",
    top: "56.08%",
    bottom: "23.54%",
    left: "82.01%",
    right: "0%",
    position: "absolute",
  },
  footermenu1: {
    height: "101.07%",
    bottom: "-1.07%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  footermenu: {
    top: 358,
    left: 289,
    width: 1173,
    height: 187,
    position: "absolute",
  },
  footer: {
    top: 1892,
    left: -139,
    height: 837,
  },
  rectangle1: {
    backgroundColor: "transparent",
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  rectangle2: {
    borderRadius: Border.br_15xl_5,
    backgroundColor: Color.white,
    borderColor: "#fff",
  },
  createAppointmentN: {
    color: Color.steelblue_200,
  },
  flatprimary: {
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  buttonoutlinedprimaryLarge: {
    top: 50,
    left: 832,
  },
  readyToGet: {
    marginTop: -42,
  },
  pellentesqueAcBibe: {
    marginTop: 13,
    fontSize: FontSize.size_5xl,
    color: Color.white,
    top: "50%",
  },
  text: {
    top: 42,
    left: 83,
    width: 608,
    height: 84,
    position: "absolute",
    overflow: "hidden",
  },
  contactCta: {
    top: 1158,
    left: 100,
  },
  ourSerivces: {
    marginTop: -39,
    fontSize: FontSize.size_33xl,
    lineHeight: 78,
    color: Color.white,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    width: "100%",
  },
  titledefaultprimary: {
    top: 37,
    left: 9,
  },
  backgroundIcon: {
    top: 239,
    left: 896,
    width: 469,
    height: 410,
    position: "absolute",
  },
  rectangle3: {
    height: "11.26%",
    width: "69.64%",
    top: "0.41%",
    right: "30.36%",
    bottom: "88.33%",
    borderRadius: Border.br_17xl_6,
    backgroundColor: Color.steelblue_200,
    left: "0%",
    position: "absolute",
  },
  all: {
    color: Color.lightblue,
  },
  blankLine: {
    color: Color.darkslateblue,
  },
  orthopedicNutritionistPedi: {
    color: Color.white,
  },
  allOrthopedicNutriContainer: {
    marginTop: -162.13,
    width: "93.57%",
    left: "6.43%",
    top: "50%",
  },
  categories: {
    top: 227,
    width: 280,
    height: 325,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  doctorsIcon: {
    left: 309,
    width: 906,
    height: 642,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  howToEditChild: {
    backgroundColor: Color.gray_200,
    left: 0,
    top: 0,
  },
  howToEditItem: {
    top: 210,
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
    top: 397,
    left: 509,
    color: Color.cornflowerblue,
  },
  forFullEditing: {
    top: 316,
    left: 451,
    color: Color.black,
  },
  howToEdit: {
    top: -49,
    left: -112,
    display: "none",
  },
  askDoctor: {
    top: 1375,
    left: 108,
    width: 1365,
    height: 649,
    position: "absolute",
  },
  illustrationTitle: {
    width: 579,
    left: 629,
    top: 0,
    overflow: "hidden",
  },
  titledefaultprimary1: {
    top: 116,
    left: 0,
  },
  rectangle4: {
    borderRadius: Border.br_mini,
  },
  dentist: {
    width: "76.74%",
    left: "11.63%",
  },
  tag: {
    width: 129,
    left: 0,
  },
  padriatic: {
    width: "65.1%",
    left: "18.12%",
  },
  tag1: {
    left: 145,
    width: 149,
    height: 31,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cardiology: {
    width: "61.75%",
    left: "19.67%",
  },
  rectangle7: {
    width: "98.78%",
    right: "0.61%",
    left: "0.61%",
  },
  traumatologi: {
    left: "0%",
    width: "100%",
  },
  tag3: {
    width: 164,
    left: 0,
  },
  rectangle8: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  othopaedi: {
    width: "86.29%",
    left: "8.06%",
  },
  tag4: {
    left: 183,
    width: 124,
  },
  anestesiologi: {
    width: "60.59%",
    left: "20%",
  },
  tag5: {
    left: 322,
    width: 170,
  },
  reumatologi: {
    width: "70.83%",
    left: "14.58%",
  },
  tag6: {
    width: 144,
    left: 0,
  },
  andrologi: {
    left: "0%",
    width: "100%",
  },
  tag7: {
    left: 160,
    width: 134,
  },
  ortodonsia: {
    width: "72.68%",
    left: "14.21%",
  },
  tags: {
    top: 365,
    width: 493,
    height: 124,
    left: 0,
    position: "absolute",
  },
  curabiturEgestasCo: {
    top: 218,
    width: 595,
    height: 115,
    left: 0,
    color: Color.white,
  },
  ourExpertise: {
    top: 502,
    left: 149,
    width: 1208,
  },
  illustrationIcon: {
    top: 959,
    width: 1400,
    left: 629,
  },
  moreInfo: {
    marginTop: 93.5,
    fontWeight: "300",
    fontFamily: FontFamily.latoLight,
    color: Color.beige,
    fontSize: FontSize.size_5xl,
    left: "0%",
  },
  rectangle13: {
    borderRadius: Border.br_5xl,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  seeDetail: {
    width: "71.5%",
    left: "14.5%",
    fontSize: FontSize.size_5xl,
    color: Color.white,
  },
  flatprimary1: {
    left: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  buttonflatprimary: {
    height: "20.36%",
    width: "41.61%",
    top: "79.64%",
    right: "32.9%",
    left: "25.48%",
  },
  loremIpsumDolor: {
    height: "23.64%",
    fontSize: 48,
    color: Color.white,
    textAlign: "left",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  namSollicitudNunc: {
    height: "35.45%",
    width: "96.29%",
    top: "32.36%",
    fontSize: 32,
    lineHeight: 48,
    color: Color.gray_100,
  },
  text1: {
    top: 1139,
    width: 620,
    height: 275,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  banner: {
    top: -959,
    left: 111,
    width: 2029,
  },
  text2: {
    color: Color.gray_400,
  },
  menu1Menu2Menu3Container: {
    width: "50.05%",
    opacity: 0.75,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "0%",
  },
  rectangle14: {
    height: "13.64%",
    width: "3.35%",
    top: "86.36%",
    right: "96.65%",
    borderRadius: Border.br_10xs,
    left: "0%",
  },
  login: {
    marginTop: -11,
    width: "15.65%",
    color: Color.white,
    left: "0%",
  },
  rectangle15: {
    borderRadius: Border.br_lgi_5,
    backgroundColor: Color.forestgreen,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  seeDetail1: {
    width: "84.69%",
    left: "8.13%",
    marginTop: -9,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    color: Color.white,
    textTransform: "uppercase",
    top: "50%",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  buttonregular: {
    width: "46.38%",
    right: "27.25%",
    left: "26.38%",
  },
  lineIcon: {
    height: "63.8%",
    width: "0.58%",
    top: "16.22%",
    right: "17.39%",
    bottom: "19.97%",
    left: "82.03%",
  },
  androidSettingsIcon: {
    height: "72.5%",
    width: "8.41%",
    top: "12.5%",
    bottom: "15%",
    left: "91.59%",
    right: "0%",
  },
  option: {
    height: "90.91%",
    width: "35.03%",
    bottom: "9.09%",
    left: "64.97%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  header: {
    height: "44%",
    width: "76.95%",
    top: "31%",
    right: "2.5%",
    bottom: "25%",
    left: "20.55%",
    position: "absolute",
    overflow: "hidden",
  },
  logolandsacpe1: {
    height: "54%",
    width: "14.92%",
    top: "23%",
    right: "82.58%",
    bottom: "23%",
    left: "2.5%",
    position: "absolute",
  },
  defaultheadermenu: {
    left: 80,
    width: 1280,
    height: 100,
    top: 0,
    position: "absolute",
  },
  landingDark: {
    backgroundColor: Color.darkslategray_100,
    flex: 1,
    height: 5653,
    overflow: "hidden",
    width: "100%",
  },
});

export default LandingDark;
