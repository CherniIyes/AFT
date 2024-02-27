import React, { useState } from "react";
import { Image } from "expo-image";
import { TextInput, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FIREBASE_AUTH } from '../FireBsae-Config/FirebaseConfig';
import axios from 'axios';

const AndroidSmall1 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
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

      console.log('Password being sent:', password);

      const loginResponse = await axios.post('http://192.168.1.4:6464/user/login', {
        email,
        password,
      });

      console.log('Login API response:', loginResponse);

      if (!loginResponse || !loginResponse.data || loginResponse.data.error) {
        console.error("Login error:", loginResponse.data?.error);
        alert("Invalid email or password. Please try again.");
        return;
      }

      sessionStorage.setItem('user', true);
      setUser(loginResponse.data);
      console.log('user:', loginResponse.data);
      setEmail('');
      setPassword('');

      alert("Sign in successful");
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
    <View style={styles.androidSmall1}>
      <Image
        style={styles.androidSmall1Child}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={[styles.androidSmall1Item, styles.androidLayout]} />
      <View style={[styles.androidSmall1Inner, styles.androidLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.androidSmall1Child1, styles.lineViewLayout]} />
      <View style={[styles.vectorParent, styles.vectorFlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <TextInput
          style={styles.email}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      <View style={[styles.vectorGroup, styles.vectorFlexBox]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <TextInput
          style={styles.email}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />

      </View>
      <View style={styles.rectangleView} />
      <View style={styles.androidSmall1Child2} />
      <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
        Remember me
      </Text>
      <Text style={[styles.forgotPassword, styles.rememberMeTypo]}>
        Forgot password?
      </Text>
      <Image
        style={[styles.eleyeCloseIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/eleyeclose.png")}
      />
      <TouchableOpacity onPress={handleSignIn}>
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
    width: 241,
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
    top: 598,
    left: 216,
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
    width: 240,
    height: 32,
    left: 66,
    position: "absolute",
  },
  androidSmall1Child2: {
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorLightgray,
    height: 11,
    top: 425,
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
    left: 161,
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
  },
  text: {
    color: Color.colorGoldenrod,
  },
  signUp: {
    textDecoration: "underline",
  },
  dontHaveAnContainer: {
    top: 513,
    left: 87,
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

export default AndroidSmall1;
