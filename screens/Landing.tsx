import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Landing = () => {
  return (
    <View style={styles.landing}>
      <View style={[styles.footer, styles.footerLayout]}>
        <Image
          style={[styles.decoIcon, styles.footerLayout]}
          resizeMode="cover"
          source={require("../assets/deco.png")}
        />
        <View style={styles.footermenu}>
          <View style={[styles.footermenu1, styles.footer1Position]}>
            <View style={[styles.footer1, styles.footer1Position]}>
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
                  style={[
                    styles.company,
                    styles.companyTypo,
                    styles.companyPosition,
                  ]}
                >
                  COMPANY
                </Text>
                <Text style={styles.donecDignissimCura}>{`Donec dignissim

Curabitur egestas

Nam posuere

Aenean facilisis`}</Text>
              </View>
              <View style={[styles.sitemap1, styles.sitemapPosition]}>
                <Text
                  style={[
                    styles.company,
                    styles.companyTypo,
                    styles.companyPosition,
                  ]}
                >
                  Services
                </Text>
                <Text style={styles.donecDignissimCura}>{`Cras convallis

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
                      styles.medicalTypo,
                      styles.medicalPosition,
                    ]}
                  >
                    Medical
                  </Text>
                </View>
              </View>
              <View style={[styles.sitemapCopy, styles.sitemapPosition]}>
                <Text
                  style={[
                    styles.company,
                    styles.companyTypo,
                    styles.companyPosition,
                  ]}
                >
                  resources
                </Text>
                <Text style={styles.donecDignissimCura}>{`Suspendisse porttitor

Nam posuere

Curabitur egestas `}</Text>
              </View>
              <Image
                style={[styles.socmedIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/socmed.png")}
              />
            </View>
            <View style={styles.langSelect}>
              <View style={[styles.rectangle, styles.rectanglePosition2]} />
              <Image
                style={[styles.chevronDownIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/chevrondown.png")}
              />
              <Image
                style={[styles.androidGlobeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/androidglobe.png")}
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
          colors={["#03acf2", "#c8e6c9"]}
          useAngle={true}
          angle={118.17}
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
                styles.text1Typo,
              ]}
            >
              Create Appointment Now!
            </Text>
          </View>
        </View>
        <View style={styles.text}>
          <Text
            style={[
              styles.readyToGet,
              styles.seeDetailPosition,
              styles.companyTypo,
            ]}
          >
            Ready to get started ?
          </Text>
          <Text
            style={[
              styles.pellentesqueAcBibe,
              styles.seeDetailPosition,
              styles.text1Typo,
            ]}
          >
            Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
          </Text>
        </View>
      </View>
      <View style={[styles.askDoctor, styles.askDoctorPosition]}>
        <View
          style={[styles.titledefaultprimary, styles.titledefaultprimaryLayout]}
        >
          <Text style={[styles.ourSerivces, styles.companyTypo]}>
            AskDoctor
          </Text>
        </View>
        <Image
          style={styles.backgroundIcon}
          resizeMode="cover"
          source={require("../assets/background.png")}
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
          source={require("../assets/doctors.png")}
        />
        <View
          style={[styles.howToEdit, styles.howToEditPosition, styles.howLayout]}
        >
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
          source={require("../assets/illustration--title.png")}
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
            <View style={[styles.rectangle4, styles.rectanglePosition1]} />
            <Text style={[styles.dentist, styles.dentistTypo]}>Dentist</Text>
          </View>
          <View style={styles.tag1}>
            <View style={[styles.rectangleLayout, styles.rectanglePosition1]} />
            <Text style={[styles.padriatic, styles.padriaticPosition]}>
              Padriatic
            </Text>
          </View>
          <View style={[styles.tagLayout, styles.tagPosition2]}>
            <View style={[styles.rectangle4, styles.rectanglePosition1]} />
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
      <View style={styles.defaultheadermenu}>
        <View style={styles.header}>
          <Text
            style={[
              styles.menu1Menu2Menu3Container,
              styles.text1Typo,
              styles.companyPosition,
            ]}
          >
            <Text style={styles.all}>Medical information</Text>
            <Text style={styles.orthopedicNutritionistPedi}>
              {" "}
              Assistance Prescriptions Contact
            </Text>
          </Text>
          <View style={[styles.rectangle13, styles.rectanglePosition]} />
          <View style={styles.option}>
            <Text style={[styles.login, styles.medicalTypo]}>Login</Text>
            <View style={[styles.buttonregular, styles.footer1Position]}>
              <View style={[styles.flatsecondary, styles.footer1Position]}>
                <View style={[styles.rectangle14, styles.footer1Position]} />
                <Text
                  style={[
                    styles.seeDetail,
                    styles.seeDetailPosition,
                    styles.seeDetailText,
                    styles.text1Typo,
                  ]}
                >
                  register
                </Text>
              </View>
            </View>
            <Image
              style={[styles.lineIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/line.png")}
            />
            <Image
              style={[styles.androidSettingsIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/androidsettings.png")}
            />
          </View>
        </View>
        <View style={[styles.logolandsacpe1, styles.howToEditPosition]}>
          <View style={styles.group}>
            <Image
              style={[styles.luxiHostingLogoIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/luxihostinglogo1.png")}
            />
            <Text
              style={[
                styles.medical1,
                styles.medicalTypo,
                styles.medicalPosition,
              ]}
            >
              Intelligent Healthcare Assistant
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={[
          styles.intelligentHealthcareAssistaContainer,
          styles.askDoctorPosition,
          styles.seeDetailText,
        ]}
      >
        <Text style={styles.intelligentHealthcareAssista}>
          Intelligent Healthcare Assistant
        </Text>
        <Text style={[styles.text1, styles.text1Typo]}>{` `}</Text>
      </Text>
      <Image
        style={styles.nmIcon}
        resizeMode="cover"
        source={require("../assets/nm.png")}
      />
      <Text style={[styles.n, styles.nPosition]}>N</Text>
      <Text style={[styles.m, styles.nPosition]}>M</Text>
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
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  skyrevTheme2021Typo: {
    color: Color.gray_300,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: "0%",
    position: "absolute",
  },
  companyTypo: {
    fontFamily: FontFamily.latoBlack,
    fontWeight: "900",
    textAlign: "left",
    left: "0%",
  },
  companyPosition: {
    fontSize: FontSize.size_lg,
    top: "50%",
    position: "absolute",
  },
  sitemapPosition: {
    bottom: "1.07%",
    width: "10.77%",
    height: "98.93%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  medicalTypo: {
    color: Color.darkslategray_200,
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  medicalPosition: {
    left: "32.46%",
    color: Color.darkslategray_200,
    fontSize: FontSize.size_17xl,
  },
  rectanglePosition2: {
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
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
  text1Typo: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  seeDetailPosition: {
    color: Color.white,
    top: "50%",
    position: "absolute",
  },
  askDoctorPosition: {
    left: 98,
    position: "absolute",
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
  howToEditPosition: {
    display: "none",
    position: "absolute",
  },
  howLayout: {
    height: 708,
    width: 1440,
  },
  forFullEditingTypo: {
    fontFamily: FontFamily.openSansBold,
    textDecoration: "underline",
    fontSize: FontSize.size_9xl,
    lineHeight: 72,
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
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
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
    color: Color.gray_300,
    position: "absolute",
  },
  padriaticPosition: {
    marginTop: -8.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    top: "50%",
    color: Color.gray_300,
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
    top: "0%",
    height: "100%",
  },
  othopaediPosition: {
    marginTop: -9.5,
    fontSize: FontSize.size_sm,
    color: Color.white,
    textAlign: "center",
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
  nPosition: {
    lineHeight: 72,
    top: 37,
    textAlign: "center",
    position: "absolute",
  },
  decoIcon: {
    left: 173,
    height: 838,
    top: 0,
  },
  namPosuereAccumsan: {
    width: "24.36%",
    top: "41.71%",
    textAlign: "left",
    height: "28.88%",
  },
  skyrevTheme2021: {
    height: "12.83%",
    width: "25.98%",
    top: "87.17%",
    textAlign: "left",
  },
  company: {
    marginTop: -93.5,
    color: Color.deepskyblue,
    textTransform: "uppercase",
  },
  donecDignissimCura: {
    marginTop: -48.5,
    lineHeight: 20,
    fontFamily: FontFamily.latoRegular,
    top: "50%",
    textAlign: "left",
    color: Color.gray_300,
    fontSize: FontSize.size_base,
    left: "0%",
    position: "absolute",
  },
  sitemap: {
    top: "1.07%",
    right: "62.82%",
    left: "26.41%",
    width: "10.77%",
    height: "98.93%",
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
    fontSize: FontSize.size_17xl,
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
    bottom: "71.12%",
    height: "28.88%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sitemapCopy: {
    right: "27.44%",
    left: "61.79%",
  },
  socmedIcon: {
    height: "20.05%",
    width: "17.44%",
    top: "16.04%",
    bottom: "63.9%",
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
    color: Color.black,
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
    height: "20.59%",
    width: "17.99%",
    top: "56.68%",
    bottom: "22.73%",
    left: "82.01%",
    right: "0%",
    position: "absolute",
  },
  footermenu1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  footermenu: {
    top: 363,
    left: 289,
    width: 1173,
    height: 187,
    position: "absolute",
  },
  footer: {
    top: 1717,
    left: -172,
    height: 837,
  },
  rectangle1: {
    borderRadius: Border.br_5xl,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  rectangle2: {
    borderRadius: Border.br_15xl_5,
    borderColor: "#fff",
  },
  createAppointmentN: {
    color: Color.deepskyblue,
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
    fontSize: FontSize.size_17xl,
  },
  pellentesqueAcBibe: {
    marginTop: 13,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    left: "0%",
  },
  text: {
    top: 42,
    left: 83,
    width: 622,
    height: 84,
    position: "absolute",
    overflow: "hidden",
  },
  contactCta: {
    top: 1679,
    left: 107,
  },
  ourSerivces: {
    marginTop: -39,
    fontSize: FontSize.size_33xl,
    lineHeight: 78,
    color: Color.gray_400,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  titledefaultprimary: {
    left: 9,
    top: 37,
    height: 78,
    width: 402,
  },
  backgroundIcon: {
    top: 239,
    left: 896,
    width: 428,
    height: 410,
    position: "absolute",
    overflow: "hidden",
  },
  rectangle3: {
    height: "11.26%",
    width: "69.64%",
    top: "0.41%",
    right: "30.36%",
    bottom: "88.33%",
    borderRadius: Border.br_17xl_6,
    backgroundColor: Color.lightblue,
    left: "0%",
    position: "absolute",
  },
  all: {
    color: Color.steelblue_100,
  },
  blankLine: {
    color: Color.darkslateblue,
  },
  orthopedicNutritionistPedi: {
    color: Color.gray_400,
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
    width: 829,
    height: 642,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  howToEditChild: {
    backgroundColor: Color.gray_200,
    left: 0,
    top: 0,
    position: "absolute",
  },
  howToEditItem: {
    top: 170,
    left: 363,
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
    top: 357,
    left: 507,
    color: Color.cornflowerblue,
  },
  forFullEditing: {
    top: 276,
    left: 449,
    color: Color.black,
  },
  howToEdit: {
    top: -28,
    left: -112,
  },
  askDoctor: {
    top: 916,
    width: 1324,
    height: 649,
  },
  illustrationTitle: {
    left: 629,
    width: 579,
    top: 0,
    overflow: "hidden",
  },
  titledefaultprimary1: {
    top: 116,
    left: 0,
  },
  rectangle4: {
    borderRadius: Border.br_mini,
    top: "0%",
    height: "100%",
    borderColor: "rgba(0, 0, 0, 0.12)",
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
    color: Color.gray_400,
    left: 0,
  },
  ourExpertise: {
    top: 202,
    left: 116,
    width: 1208,
  },
  menu1Menu2Menu3Container: {
    marginTop: -13.66,
    width: "50.05%",
    opacity: 0.75,
    textAlign: "left",
    left: "0%",
  },
  rectangle13: {
    height: "13.64%",
    width: "3.35%",
    top: "86.36%",
    right: "96.65%",
    borderRadius: Border.br_10xs,
    left: "0%",
  },
  login: {
    marginTop: -10.6,
    width: "15.65%",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
    left: "0%",
  },
  rectangle14: {
    borderRadius: Border.br_lgi_5,
    backgroundColor: Color.forestgreen,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  seeDetail: {
    marginTop: -8.6,
    width: "84.69%",
    left: "8.12%",
    fontSize: FontSize.size_base,
  },
  flatsecondary: {
    left: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
  },
  buttonregular: {
    width: "46.38%",
    right: "27.25%",
    left: "26.38%",
  },
  lineIcon: {
    height: "63.73%",
    width: "0.58%",
    top: "16.26%",
    right: "17.38%",
    bottom: "20.01%",
    left: "82.04%",
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
  medical1: {
    marginTop: -22.84,
    fontSize: FontSize.size_17xl,
  },
  logolandsacpe1: {
    height: "54%",
    width: "14.92%",
    top: "23%",
    right: "82.58%",
    bottom: "23%",
    left: "2.5%",
  },
  defaultheadermenu: {
    left: 38,
    width: 1402,
    height: 103,
    top: 0,
    position: "absolute",
  },
  intelligentHealthcareAssista: {
    fontSize: 20,
    fontFamily: FontFamily.latoExtrabold,
    fontWeight: "800",
  },
  text1: {
    fontSize: FontSize.size_base,
  },
  intelligentHealthcareAssistaContainer: {
    top: 23,
    width: 205,
    color: Color.black,
  },
  nmIcon: {
    top: 8,
    left: 24,
    width: 108,
    height: 89,
    position: "absolute",
  },
  n: {
    left: 81,
    fontSize: 22,
    fontWeight: "300",
    fontFamily: FontFamily.roundedMplus1cLight,
    color: Color.azure,
    width: 30,
    height: 15,
  },
  m: {
    left: 70,
    fontFamily: FontFamily.roundedMplus1cExtrabold,
    color: "#263238",
    width: 28,
    height: 12,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  landing: {
    flex: 1,
    height: 5653,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Landing;
