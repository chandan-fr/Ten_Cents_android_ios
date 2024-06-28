import { Alert, Dimensions, Image, ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { b1, blueShade1, blueShade2, bs1, white } from '../config/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({ navigation }) => {
  const [curInd, setcurInd] = useState(0);
  const data = [1, 2, 3, 4];
  const ref = useRef(null);

  const handleNext = () => {
    if (curInd < 3) {
      setcurInd(curInd + 1);
      ref.current?.scrollTo({ animated: true, x: width * (Number(curInd) + 1) });
    } else {
      setWelcomeScreenVisibleValue();
      navigation.replace("tab");
    }
  };

  const setWelcomeScreenVisibleValue = () => AsyncStorage.setItem("@wlcmscrn", "true");

  const getWelcomeScreenVisibleValue = async () => {
    const isShow = await AsyncStorage.getItem("@wlcmscrn");
    if (isShow === "true") navigation.replace("tab");
  };

  useEffect(() => {
    const callAsync = async () => await getWelcomeScreenVisibleValue();

    // callAsync();
  }, []);

  return (
    <View style={styles.parent}>
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"dark-content"} />
      <View style={styles.body}>
        <ImageBackground
          source={
            Number(curInd) === 0 ?
              require("../assets/images/6.jpg")
              :
              Number(curInd) === 1 ?
                require("../assets/images/7.jpg")
                :
                Number(curInd) === 2 ?
                  require("../assets/images/8.jpg")
                  :
                  require("../assets/images/9.jpg")
          }
          resizeMode='cover'
          style={styles.imgBkgrnd}
        >
          <TouchableOpacity style={styles.skipWrap} onPress={() => { setWelcomeScreenVisibleValue(); navigation.replace("tab") }}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <ScrollView
              ref={ref}
              horizontal={true}
              pagingEnabled={true}
              scrollEventThrottle={1}
              snapToStart={true}
              showsHorizontalScrollIndicator={false}
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setcurInd((x / width).toFixed(0));
              }}
              style={{ flex: 1, }}
            >
              {/* first slide */}
              <View style={styles.logoName}>
                <Text numberOfLines={2} style={styles.logoText}>{`10${"\n"}cents air`}</Text>

                <TouchableOpacity
                  style={styles.btnWrap}
                  onPress={() => handleNext()}
                >
                  <Text style={styles.btnText}>GET STARTED</Text>
                </TouchableOpacity>
              </View>

              {/* second slide */}
              <View style={[styles.slideWrap, { alignItems: "center" }]}>
                <View style={styles.s3Wrap}>
                  <Text style={[styles.s2HeadingText, { textAlign: 'center' }]}>Book with Confidence!</Text>

                  <View style={{ marginTop: 60, }}>
                    <View style={styles.s3ContWrap}>
                      <Image style={styles.s3Img} source={require("../assets/icons/plane.png")} />

                      <View style={{ width: 154, marginLeft: 10 }}>
                        <Text style={styles.s3ContHText}>Flights</Text>
                        <Text style={styles.s3ContSubHText}>You now have access to amazing deals and cheap flights!</Text>
                      </View>
                    </View>

                    <View style={styles.s3ContWrap}>
                      <Image style={styles.s3Img} source={require("../assets/icons/hotel-sign.png")} />

                      <View style={{ width: 154, marginLeft: 10 }}>
                        <Text style={styles.s3ContHText}>Hotels</Text>
                        <Text style={styles.s3ContSubHText}>Find hotel deals along with hundred of reviews.</Text>
                      </View>
                    </View>

                    <View style={styles.s3ContWrap}>
                      <Image style={styles.s3Img} source={require("../assets/icons/car.png")} />

                      <View style={{ width: 154 }}>
                        <Text style={styles.s3ContHText}>Cars</Text>
                        <Text style={styles.s3ContSubHText}>Rent cars of your choice anywhere in the world for less.</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* third slide */}
              <View style={styles.slideWrap}>
                <View style={styles.s4Wrap}>
                  <Text style={[styles.s2HeadingText, { textAlign: "center", color: white }]}>Enable Location</Text>
                  <Text style={[styles.s2SubHeadingText, { textAlign: "center", marginTop: 10, width: width / 1.51 }]}>
                    You can turn on location to improve
                    your search experience.
                  </Text>

                  <View style={{ flex: 1, justifyContent: 'center', marginBottom: 50 }}>
                    <View style={[styles.outer, styles.centerAlign]}>
                      <View style={[styles.middle, styles.centerAlign]}>
                        <View style={[styles.inner, styles.centerAlign]}>
                          <View style={styles.contWrap}>
                            <Image style={{ width: 30, height: 30 }} source={require("../assets/icons/location.png")} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.btnWrap}
                  >
                    <Text style={styles.btnText}>Turn On Location</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* fourth slide */}
              <View style={styles.slideWrap}>
                <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                  <Text style={[styles.s2HeadingText, { color: white }]}>Register</Text>

                  <View style={{ width: 195, alignItems: "center", marginTop: 15 }}>
                    <Text style={styles.s2SubHeadingText}>
                      Earn <Text style={{ fontWeight: 600 }}> 2x  points </Text> when  you're  signed  in.
                    </Text>
                  </View>
                </View>

                <View style={{ marginTop: 80, marginHorizontal: 20, }}>
                  <TouchableOpacity style={styles.s2BtnWrap}>
                    <View style={styles.s2btnContWrap}>
                      <Image style={styles.s2Img} source={require("../assets/icons/google.png")} />

                      <Text style={styles.s2btnText}>Continue with Google</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.s2BtnWrap}>
                    <View style={styles.s2btnContWrap}>
                      <Image style={styles.s2Img} source={require("../assets/icons/facebook.png")} />

                      <Text style={styles.s2btnText}>Continue with Facebook</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.s2BtnWrap}>
                    <View style={styles.s2btnContWrap}>
                      <Image style={styles.s2Img} source={require("../assets/icons/gmail.png")} />

                      <Text style={styles.s2btnText}>Continue with E-mail</Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginHorizontal: 30, alignItems: "center", marginTop: 15, }}>
                    <Text style={[styles.s2SigninText, { fontSize: Platform.OS === "ios" ? 16 : 14 }]}>Already have an account?
                      <Text onPress={() => navigation.replace("signin")} style={{ color: b1, fontFamily: "Poppins-SemiBold" }}> Sign In</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* footer */}
          {Number(curInd) !== 3 &&
            <View style={styles.bottomWrap} >
              <View style={styles.dotWrap}>
                {data.map((_, i) => (
                  <View key={i} style={curInd == i ? styles.dotActive : styles.dot} />
                ))}
              </View>

              <View style={styles.nextWrap}>
                <TouchableOpacity style={styles.nextBtn} onPress={() => handleNext()} >
                  <Text style={styles.next}>Next </Text>
                  <Image
                    style={{ tintColor: white, width: 13, height: 13 }}
                    source={require("../assets/icons/right-arrow.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>}
        </ImageBackground>
      </View>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  imgBkgrnd: {
    width: width,
    height: "100%",
  },
  skip: {
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    color: b1,
  },
  skipWrap: {
    marginLeft: 10,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { marginTop: 70 },
      android: { marginTop: 50 },
    }),
  },
  logoName: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    position: "relative",
    width: width,
  },
  logoText: {
    fontSize: 45,
    fontFamily: "LondonBetween",
    width: width / 1.4,
    textAlign: "center",
    color: b1,
    textTransform: "uppercase",
    ...Platform.select({
      ios: { marginBottom: 70 },
      android: { marginBottom: 50 },
    }),
  },
  btnWrap: {
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 70,
    paddingVertical: 13,
    borderRadius: 7,
    position: "absolute",
    bottom: 30,
  },
  btnText: {
    color: blueShade2,
    fontFamily: "LondonBetween",
    fontSize: 18,
  },
  bottomWrap: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    position: "relative",
    paddingVertical: 10
  },
  dot: {
    backgroundColor: white,
    opacity: 0.4,
    width: 8,
    height: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  dotActive: {
    backgroundColor: white,
    width: 8,
    height: 8,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  dotWrap: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
  },
  next: {
    color: white,
    fontFamily: "LondonBetween",
    fontSize: 18,
  },
  nextBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  nextWrap: {
    position: "absolute",
    right: 35,
  },
  slideWrap: {
    flex: 1,
    width: width,
  },
  s2HeadingText: {
    fontFamily: 'LondonBetween',
    fontSize: 23,
    color: b1,
  },
  s2SubHeadingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: Platform.OS === "ios" ? 13 : 12,
    color: white,
    textAlign: "center",
  },
  s2BtnWrap: {
    backgroundColor: white,
    marginHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: bs1,
    paddingVertical: 10,
    marginVertical: 10
  },
  s2btnText: {
    color: bs1,
    fontFamily: "Assistant-Regular",
    ...Platform.select({
      ios: { fontSize: 16 },
      android: { fontSize: 14 },
    }),
  },
  s2Img: {
    width: 25,
    height: 25,
  },
  s2btnContWrap: {
    flexDirection: 'row',
    alignItems: "center",
    marginHorizontal: 40,
    columnGap: 20,
  },
  s2SigninText: {
    fontFamily: "Poppins-Medium",
    color: white,
  },
  s3Wrap: {
    marginTop: 50,
  },
  s3ContWrap: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginVertical: 20,
  },
  s3Img: {
    width: 35,
    height: 35,
    marginTop: 10,
    tintColor: b1,
  },
  s3ContHText: {
    color: b1,
    fontFamily: "LondonBetween",
    fontSize: 19,
  },
  s3ContSubHText: {
    color: b1,
    fontFamily: "Assistant-SemiBold",
    fontSize: 14,
    marginTop: 8,
    textAlign: "left",
  },
  s4Wrap: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 50,
    marginBottom: 25,
    alignItems: "center",
    position: 'relative'
  },
  contWrap: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: 50,
  },
  outer: {
    width: 202,
    height: 202,
    borderColor: "rgba(255,255,255, 0.2)"
  },
  middle: {
    width: 154,
    height: 154,
    borderColor: "rgba(255,255,255, 0.5)",
  },
  inner: {
    width: 106,
    height: 106,
    borderColor: "rgba(255,255,255, 0.7)"
  },
  centerAlign: {
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
  },
});