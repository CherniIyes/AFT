import React, { useState } from "react";
import axios from "axios";
import { Image, TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FIREBASE_AUTH } from '../FireBsae-Config/FirebaseConfig';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles'
const AndroidSmall3 = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(FIREBASE_AUTH);

  const handleSignUp = async () => {
    try {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter and one number");
        return;
      }

      // Proceed to server registration
      console.log('Data being sent to server:', { username, email, password });

      const registerResponse = await axios.post('http://192.168.1.4:6464/user/register', {
        username,
        email,
        password
      });

      console.log('Registration API response:', registerResponse);

      // Check the response from the server and handle accordingly
      if (registerResponse.status === 201) {
        // Clear form fields and show success message
        alert("Sign up successful");
        setEmail('');
        setPassword('');
        setusername('');
        navigation.navigate('Login');
      } else {
        // Handle registration failure
        console.error("User registration failed:", registerResponse.data);
        alert("User creation failed. Please try again.");
      }
    } catch (error) {
      // Handle errors
      console.error("Error during user creation:", error);
      alert("User creation failed. Please try again.");
    }
  };

  const handleNameChange = (text) => {
    setusername(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };



  return (
    <View style={styles.androidSmall5}>
      <Image
        style={[styles.androidSmall5Child, styles.androidLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={[styles.androidSmall5Item, styles.androidLayout]} />
      <Text style={[styles.createAnAccount, styles.signUpFlexBox]}>
        Create an account
      </Text>
      <View style={[styles.androidSmall5Inner, styles.androidChildLayout]} />
      <View style={[styles.lineView, styles.androidChildLayout]} />
      <View style={[styles.androidSmall5Child1, styles.androidChildLayout]} />
      <View style={[styles.androidSmall5Child2, styles.androidChildLayout]} />
      <View style={[styles.vectorParent, styles.vectorFlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <TextInput
          style={styles.emailInput}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      <View style={[styles.vectorGroup, styles.vectorFlexBox]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <TextInput
          style={styles.emailInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={handleConfirmPasswordChange}
          value={confirmPassword}
        />
      </View>
      <View style={[styles.vectorContainer, styles.vectorFlexBox]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <TextInput
          style={styles.emailInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={password}
        />
      </View>
      <View style={styles.rectangleView} />
      <View style={styles.androidSmall5Child3} />
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
      <Text style={[styles.signUp, styles.signUpTypo]}>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.sign}>SIGN UP</Text>
        </TouchableOpacity>

      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.signUpFlexBox]}>
        <Text style={styles.alreadyHaveAn}>{`Already have an account ? `}</Text>
        <Text style={[styles.loginUp, styles.signUpTypo]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.text1}>{` `}</Text>
        </Text>
      </Text>
      <View style={[styles.frameView, styles.vectorFlexBox]}>
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Name"
          onChangeText={handleNameChange}
          value={username}
        />
      </View>
    </View >
  );
};

const styles = StyleSheet.create({

  androidLayout: {
    // borderRadius: Border.br_5xl,
    position: "absolute",
  },
  signUpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  androidChildLayout: {
    height: 1,
    width: 241,
    borderTopWidth: 1,
    borderColor: Color.colorMediumseagreen_100,
    borderStyle: "solid",
    left: 56,
    position: "absolute",
  },
  vectorFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  rememberMeTypo: {
    fontSize: FontSize.size_5xs,
    top: 517,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 10,
    width: 12,
  },
  signUpTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  androidSmall5Child: {
    top: -119,
    left: -145,
    width: 438,
    height: 503,
  },
  androidSmall5Item: {
    top: 598,
    left: 216,
    backgroundColor: Color.colorDarkslategray_200,
    width: 208,
    height: 101,
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
  },
  createAnAccount: {
    top: 264,
    left: 62,
    fontSize: 22,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorDarkslategray_100,
  },
  androidSmall5Inner: {
    top: 397,
  },
  lineView: {
    top: 455,
  },
  androidSmall5Child1: {
    top: 339,
  },
  androidSmall5Child2: {
    top: 505,
  },
  email: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  vectorParent: {
    top: 373,
    width: 63,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    left: 70,
  },
  vectorIcon1: {
    height: 14,
    width: 11,
  },
  vectorGroup: {
    top: 481,
    width: 155,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 70,
  },
  vectorContainer: {
    top: 431,
    width: 95,
    justifyContent: "space-between",
    flexDirection: "row",
    left: 70,
  },
  rectangleView: {
    top: 554,
    left: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkolivegreen,
    width: 240,
    height: 32,
    position: "absolute",
  },
  androidSmall5Child3: {
    top: 516,
    borderRadius: Border.br_12xs,
    backgroundColor: Color.colorLightgray,
    height: 11,
    width: 11,
    left: 56,
    position: "absolute",
  },
  rememberMe: {
    left: 75,
    color: Color.colorBlack,
  },
  forgotPassword: {
    left: 228,
    color: Color.colorBlack,
  },
  eleyeCloseIcon: {
    top: 483,
    left: 279,
    position: "absolute",
    overflow: "hidden",
  },
  sign: {
    color: Color.colorOrange_200,
  },
  text: {
    color: Color.colorBlack,
  },
  signUp: {
    top: 560,
    left: 144,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  alreadyHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
  },
  login: {
    color: Color.colorSeagreen,
  },
  text1: {
    color: Color.colorGoldenrod,
  },
  loginUp: {
    textDecoration: "underline",
  },
  alreadyHaveAnContainer: {
    top: 603,
    left: 73,
    fontSize: FontSize.size_xs,
  },
  vectorIcon3: {
    width: 13,
    height: 13,
  },
  frameView: {
    top: 315,
    left: 69,
    width: 68,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  androidSmall5: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall3;
