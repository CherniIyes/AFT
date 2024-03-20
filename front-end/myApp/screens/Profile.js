import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/Rstore';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const FarmerProfile = () => {
  const user = useRecoilValue(userState);
  const profileImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNErRk-0VnxqOmNa71Rok-FLZKUt6Y38mJkA&usqp=CAU";
  const [education, setEducation] = useState(user.education);
  const [projects, setProjects] = useState(user.projects);

  const navigation = useNavigation();

  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=29015899`); // Replace with actual WhatsApp number
  };

  const makeCall = () => {
    Linking.openURL(`tel:29015899`);
  };

  const sendEmail = () => {
    Linking.openURL(`mailto:cherniiyes@gmail.com`);
  };

  const handleEducationUpdate = async () => {
    try {
      await axios.put(`http://192.168.1.4:6464/user/update/${user.id}`, {
        education: education
      });
      console.log("Education updated successfully");
    } catch (error) {
      console.error("Error updating education:", error);
    }
  };

  const handleProjectsUpdate = async () => {
    try {
      await axios.put(`http://192.168.1.4:6464/user/update/${user.id}`, {
        projects: projects
      });
      console.log("Projects updated successfully");
    } catch (error) {
      console.error("Error updating projects:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{user.username}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact:</Text>
          <View style={styles.contactContainer}>
            <TouchableOpacity onPress={sendEmail} style={styles.contactItem}>
              <Ionicons name="mail" size={24} color="#4CAF50" />
              <Text style={[styles.contactText, { color: '#4CAF50' }]}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={makeCall} style={styles.contactItem}>
              <Ionicons name="call" size={24} color="#4CAF50" />
              <Text style={[styles.contactText, { color: '#4CAF50' }]}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openWhatsApp} style={styles.contactItem}>
              <Ionicons name="logo-whatsapp" size={24} color="#4CAF50" />
              <Text style={[styles.contactText, { color: '#4CAF50' }]}>WhatsApp</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.additionalSection}>
          <Text style={styles.sectionTitle}>Education & Certifications:</Text>
          <TextInput
            style={styles.input}
            value={education}
            onChangeText={setEducation} // Update education state
            onBlur={handleEducationUpdate} // Update education when TextInput loses focus
          />
        </View>

        <View style={styles.additionalSection}>
          <Text style={styles.sectionTitle}>Projects & Initiatives:</Text>
          <TextInput
            style={styles.input}
            value={projects}
            onChangeText={setProjects} // Update projects state
            onBlur={handleProjectsUpdate} // Update projects when TextInput loses focus
          />
        </View>

      </View>
    </ScrollView >
  );
};

// Styles
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 120,
    marginBottom: 23,
    borderRadius: 20,
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#4CAF50",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactText: {
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  skillsContainer: {
    alignItems: "center",
  },
  skill: {
    marginBottom: 10,
  },
  skillText: {
    marginBottom: 5,
  },
  progressBar: {
    backgroundColor: "#ccc",
    height: 10,
    width: 150,
    borderRadius: 5,
  },
  progress: {
    backgroundColor: "#F6B304",
    height: 10,
    borderRadius: 5,
  },
  additionalSection: {
    marginBottom: 20,
    backgroundColor: "#DFF2BF",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  additionalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#006400",
  },
  additionalDescription: {
    fontSize: 14,
    lineHeight: 22,
  },
});

export default FarmerProfile;
