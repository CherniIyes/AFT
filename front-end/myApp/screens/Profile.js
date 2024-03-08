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
import { useSelector, useDispatch } from 'react-redux';

const ProfessionalProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user);

  const profileImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNErRk-0VnxqOmNa71Rok-FLZKUt6Y38mJkA&usqp=CAU";


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{user.username}</Text>
          <Text style={styles.dob}></Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Background:</Text>
        <Text style={styles.description}>
          John Doe is a passionate and dedicated farmer with over a decade of hands-on experience in agricultural practices. Born and raised in a farming family, John developed a deep connection with the land and a profound understanding of sustainable farming methods from a young age.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact:</Text>
        <View style={styles.contactContainer}>
          {/* <TouchableOpacity onPress={openEmail} style={styles.contactItem}>
            <Ionicons name="mail" size={24} color="#F6B304" />
            <Text style={styles.contactText}>Email</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={makeCall} style={styles.contactItem}>
            <Ionicons name="call" size={24} color="#F6B304" />
            <Text style={styles.contactText}>Call</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={openLinkedIn} style={styles.contactItem}>
            <Ionicons name="logo-linkedin" size={24} color="#F6B304" />
            <Text style={styles.contactText}>LinkedIn</Text>
          </TouchableOpacity> */}
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

      {/* Additional Design Elements */}
      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Education & Certifications:</Text>
        <Text style={styles.additionalDescription}>
          John Doe holds a Bachelor's degree in Agricultural Science from XYZ University. He also completed certifications in Organic Farming and Sustainable Agriculture from ABC Institute.
        </Text>
      </View>

      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Projects & Initiatives:</Text>
        <Text style={styles.additionalDescription}>
          Throughout his career, John has been actively involved in various projects aimed at promoting sustainable farming practices. Some of his notable initiatives include establishing community-supported agriculture programs, organizing workshops on composting and soil health, and leading reforestation efforts in rural areas.
        </Text>
      </View>

    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dob: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
    color: "#F6B304",
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
  // Additional Styles
  additionalSection: {
    marginBottom: 20,
    backgroundColor: "#DFF2BF",
    padding: 15,
    borderRadius: 10,
  },
  additionalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#006400", // Green color
  },
  additionalDescription: {
    fontSize: 14,
    lineHeight: 22,
  },
});

export default ProfessionalProfile;
