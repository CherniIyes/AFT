import React, { useState } from "react";
import { Image, TextInput, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_AUTH } from '../FireBsae-Config/FirebaseConfig';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
// import { useDispatch } from 'react-redux';
import { signUp } from '../redux/action';
import axios from 'axios';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CreateAccountScreen = ({ navigation }) => {
  // const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])/;
      if (!passwordRegex.test(password)) {
        alert("Password must contain at least one capital letter and one number");
        return;
      }

      const registerResponse = await axios.post('http://192.168.100.52:6464/user/register', {
        username,
        email,
        password
      });

      if (registerResponse.status === 201) {
        alert("Sign up successful");
        setEmail('');
        setPassword('');
        setUsername('');
        navigation.navigate('Login');
      } else {
        console.error("User registration failed:", registerResponse.data);
        alert("User creation failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during user creation:", error);
      alert("User creation failed. Please try again.");
    }
  };

  const handleNameChange = (text) => {
    setUsername(text);
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
          style={[styles.BigGreen, styles.androidLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />

        <View style={[styles.blueSquaree, styles.androidLayout]} />

      <View style={styles.midddle}>
        <Text style={[styles.createAnAccount, styles.signUpFlexBox]}>
          Create an account
        </Text>
        <View style={[styles.lineUnderEmail, styles.androidChildLayout]} />
        <View style={[styles.lineUnderpass, styles.androidChildLayout]} />
        <View style={[styles.lineUdnerName, styles.androidChildLayout]} />
        <View style={[styles.lineUnderConPass, styles.androidChildLayout]} />

        <View style={[styles.namee, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <TextInput
            style={styles.Input}
            placeholder="Name"
            onChangeText={handleNameChange}
            value={username}
          />
        </View>

        <View style={[styles.Emailcon, styles.vectorFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <TextInput
            style={styles.Input}
            placeholder="Email"
            onChangeText={handleEmailChange}
            value={email}
          />
        </View>
        <View style={[styles.ConfPass, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <TextInput
            style={styles.Input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
          />
        </View>
        <View style={[styles.passcon, styles.vectorFlexBox]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <TextInput
            style={styles.Input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={handlePasswordChange}
            value={password}
          />
        </View>
        <Image
          style={[styles.eleyeCloseIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/eleyeclose.png")}
        />

        
        <View style={styles.rectangleView} />

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
      </View>


    </View >
  );
};

const styles = StyleSheet.create({

  androidLayout: {
    borderRadius: Border.br_5xl,
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
  BigGreen: {
    top: responsiveHeight(-15),
    left: responsiveWidth(-35),
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  blueSquaree: {
    top: responsiveHeight(98),
    left: responsiveWidth(65),
    backgroundColor: Color.colorDarkslategray_200,
    width: responsiveWidth(50),
    height: responsiveHeight(13),
    transform: [
      {
        rotate: "-31.29deg",
      },
    ],
  },
  createAnAccount: {
    top: responsiveHeight(28),
    left: responsiveWidth(13),
    fontSize: 22,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorDarkslategray_100,
  },

  email: {
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },

  vectorIcon1: {
    height: 14,
    width: 11,
  },












  namee: {
    top: responsiveHeight(35),
    left: responsiveWidth(13),
    width: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lineUdnerName: {
    top: responsiveHeight(37.6),
  },

  Emailcon: {
    top: responsiveHeight(40.3),
    left: responsiveWidth(13),
    width: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lineUnderEmail: {
    top: responsiveHeight(43),
  },

  passcon: {
    top: responsiveHeight(45.5),
    left: responsiveWidth(13),
    width: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lineUnderpass: {
    top: responsiveHeight(48.2),
  },

  ConfPass: {
    top: responsiveHeight(50.8),
    left: responsiveWidth(13),
    width: responsiveWidth(2),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  lineUnderConPass: {
    top: responsiveHeight(53.5),
  },


  Input: {
    width: responsiveWidth(49),
    left: responsiveWidth(1),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  }, 
  
  midddle: {
    // width: responsiveWidth(49),
    left: responsiveWidth(8),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },












  eleyeCloseIcon: {
    top: 483,
    left: 279,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    color: Color.colorBlack,
  },



  sign: {
    color: Color.colorOrange_200,
  },
  signUp: {
    top: responsiveHeight(60.5),
    left: responsiveWidth(32.7),
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },

  rectangleView: {
    top: responsiveHeight(60),
    left: responsiveWidth(24),
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkolivegreen,
    width: responsiveWidth(30),
    height: 32,
    position: "absolute",
  },


  alreadyHaveAn: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
  },
  login: {
    top: responsiveHeight(0.45),

    color: Color.colorSeagreen,
  },
  text1: {
    color: Color.colorGoldenrod,
  },
  loginUp: {
    textDecoration: "underline",
  },
  alreadyHaveAnContainer: {
    top: responsiveHeight(64),
    left: responsiveWidth(19),
    fontSize: FontSize.size_xs,
  },
  vectorIcon3: {
    width: 13,
    height: 13,
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

export default CreateAccountScreen;
