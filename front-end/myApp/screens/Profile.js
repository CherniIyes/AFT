import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRecoilValue } from 'recoil';
import { userState } from '../Recoil/Rstore';

const FarmerProfile = () => {
  const user = useRecoilValue(userState);
  const profileImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNErRk-0VnxqOmNa71Rok-FLZKUt6Y38mJkA&usqp=CAU";

  const openWhatsApp = () => {
    Linking.openURL(`whatsapp://send?phone=1234567890`); // Replace with actual WhatsApp number
  };

  const makeCall = () => {
    Linking.openURL(`tel:1234567890`); // Replace with actual phone number
  };

  const sendEmail = () => {
    Linking.openURL(`mailto:recipient@example.com`); // Replace with actual email address
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
          <Text style={styles.sectionTitle}>Background:</Text>
          <Text style={styles.description}>
            {user.background}
          </Text>
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills:</Text>
          <View style={styles.skillsContainer}>
            <View style={styles.skill}>
              <Text style={styles.skillText}>Agriculture</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '70%' }]} />
              </View>
            </View>
            <View style={styles.skill}>
              <Text style={styles.skillText}>Organic Farming</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: '90%' }]} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.additionalSection}>
          <Text style={styles.additionalTitle}>Education & Certifications:</Text>
          <Text style={styles.additionalDescription}>
            {user.education}
          </Text>
        </View>

        <View style={styles.additionalSection}>
          <Text style={styles.additionalTitle}>Projects & Initiatives:</Text>
          <Text style={styles.additionalDescription}>
            {user.projects}
          </Text>
        </View>

      </View>
    </ScrollView>
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
