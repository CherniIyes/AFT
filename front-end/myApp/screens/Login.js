import React, { useState } from "react";
import { Image, TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action';
import { Provider } from 'react-redux';
import store from '../redux/store';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignIn = async () => {
    try {
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      const loginResponse = await axios.post('http://192.168.100.52:6464/user/login', {
        email,
        password,
      });

      if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
        console.error("Login error:", loginResponse.data?.error);
        alert("Invalid email or password. Please try again.");
        return;
      }

      const userData = loginResponse.data;
      dispatch(login(userData));

      setEmail('');
      setPassword('');
      navigation.navigate('HomePage');
      alert(`Sign in successful! Welcome, ${userData.username}`);
    } catch (error) {
      console.error("Error during sign-in:", error);

      if (error.response && error.response.status === 404) {
        alert("Login endpoint not found. Please check the server configuration.");
      } else {
        alert("Sign in failed. Please try again.");
      }
    }
  };


  return (
    // <Provider store={store}>
      <View style={styles.androidSmall1}>
        <Image
          style={styles.androidSmall1Child}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <View style={[styles.androidSmall1Inner, styles.androidLayout]} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
        <View style={[styles.androidSmall1Child1, styles.lineViewLayout]} />
        <View style={[styles.vectorParent, styles.vectorFlexBox]}>
          <TextInput
            style={styles.email}
            placeholder="Email"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>
        <View style={[styles.vectorGroup, styles.vectorFlexBox]}>
          <TextInput
            style={styles.email}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            value={password}
          />

        </View>
        <View style={styles.rectangleView} />
        <TouchableOpacity style={styles.loginfilsa} onPress={handleSignIn}>
          <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.dontHaveAnContainer}>
          <Text style={styles.dontHaveAn}>{`Don’t have an account ? `}</Text>
          <Text style={[styles.signUp, styles.loginTypo]}>

            <TouchableOpacity
              onPress={() => navigation.navigate('CreatAcc')}
            >
              <Text style={styles.sign}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </Text>
        <Text style={styles.logIn}>{`Log In `}</Text>
      </View>
    // </Provider>

  );
};

const styles = StyleSheet.create({
  androidLayout: {
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
    height: 101,
    width: 208,
    backgroundColor: Color.colorDarkslategray_200,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },

  lineViewLayout: {
    height: 1,
    width: 270,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 66,
    position: "absolute",
  },
  vectorFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    left: 80,
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_5xs,
    color: Color.colorBlack,
    top: 425,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 10,
    width: 12,
  },
  loginTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidSmall1Child: {
    top: -119,
    left: -145,
    width: 438,
    height: 503,
    borderRadius: Border.br_5xl,
    position: "absolute",
  },
  androidSmall1Item: {
    top: 11,
    left: -65,
  },
  androidSmall1Inner: {
    top: 850,
    left: 250,
  },
  lineView: {
    top: 347,
    borderColor: "rgba(79, 173, 85, 0.32)",
  },
  androidSmall1Child1: {
    top: 415,
    borderColor: "rgba(157, 134, 105, 0.32)",
  },
  email: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    width: 233,
    position: "relative",
    right: 10,
  },
  vectorParent: {
    top: 321,
    width: 60,
    alignItems: "center",
  },
  vectorIcon1: {
    height: 14,
    width: 11,
  },
  vectorGroup: {
    top: 389,
    width: 92,
  },
  rectangleView: {
    top: 463,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkolivegreen,
    width: 200,
    height: 32,
    left: 100,
    position: "absolute",
  },
  androidSmall1Child2: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorLightgray,
    height: 11,
    top: 500,
    width: 11,
    left: 66,
    position: "absolute",
  },
  rememberMe: {
    left: 85,
    color: Color.colorBlack,
  },
  forgotPassword: {
    left: 238,
    color: Color.colorBlack,
  },
  eleyeCloseIcon: {
    top: 393,
    left: 289,
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    top: 470,
    left: 180,
    fontSize: FontSize.size_base,
    color: Color.colorOrange_200,
    textAlign: "left",
    position: "absolute",
  },
  dontHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
  },
  sign: {
    color: Color.colorSeagreen,
    position: "relative",
    top: 3,
  },
  text: {
    color: Color.colorGoldenrod,
  },
  signUp: {
    textDecoration: "underline",
  },
  dontHaveAnContainer: {
    top: 513,
    left: 120,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  logIn: {
    top: 260,
    fontSize: FontSize.size_4xl,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    left: 80,
    position: "absolute",
    fontSize: 30,

  },
  androidSmall1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default LoginScreen;
