import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const HomePage = (props) => {
  const images = [
    "https://c4.wallpaperflare.com/wallpaper/807/189/316/selective-focus-photography-of-green-flowers-near-sea-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/388/52/975/cow-funny-ruminant-cute.jpg",
    "https://c1.wallpaperflare.com/preview/854/259/728/cow-small-calf-baby-meadow-sweet.jpg",
  ];

  const [sliderValue, setSliderValue] = useState(0);
  const [articles, setArticles] = useState([]);
  const [likedArticles, setLikedArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchArticles();
    const intervalId = setInterval(() => {
      setSliderValue((prevValue) => (prevValue === 2 ? 0 : prevValue + 1));
    }, 3000); // Change the slider value every 3 seconds
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  const handleTest = (idd) => {
    navigation.navigate(`Test`, { idd });
  };

  const fetchArticles = () => {
    axios.get("http://192.168.1.10:6464/articles/").then((response) => {
      setArticles(response.data);
      setLikedArticles(new Array(response.data.length).fill(false));
    });
  };

  const handleLike = (index) => {
    const updatedLikedArticles = [...likedArticles];
    updatedLikedArticles[index] = !updatedLikedArticles[index];
    setLikedArticles(updatedLikedArticles);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Slider
            value={sliderValue}
            style={{ width: "100%" }}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="#F6B304"
            maximumTrackTintColor="#092F03"
            thumbTintColor="#F6B304"
            onValueChange={(value) => setSliderValue(value)} // Allow manual sliding if desired
          />
          <MaterialIcons
            name="park"
            size={24}
            color="#F6B304"
            style={{
              position: "absolute",
              left: `${sliderValue * (100 / 2)}%`,
              top: 20,
              zIndex: 1,
            }}
          />
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: images[Math.floor(sliderValue)] }}
          />
        </View>

        <Text style={styles.introText}>
          Welcome to the future of dairy production! Here are some insightful articles and steps aimed at enhancing your dairy production and elevating its quality.
        </Text>

        {articles.map((article, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => handleTest(article.id)}
            activeOpacity={0.7} // Adjust the opacity as desired
          >
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{ uri: article.img }} />
              <View style={styles.flexx}>
                <Text style={styles.sectionTitle}>{article.title}</Text>
                <TouchableOpacity onPress={() => handleLike(index)}>
                  <Icon
                    name={likedArticles[index] ? "heart" : "heart-o"}
                    size={20}
                    color={likedArticles[index] ? "#F6B304" : "#092F03"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
        {/* Add space between the articles and the footer */}
        <View style={{ height: 20 }} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Your Dairy App. All Rights Reserved.</Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: "#FFFFFF",
    position: "relative",
    marginTop: 105, // Adjusted to provide space for the headerContainer
    marginBottom: 70, // Adjusted to provide more space for the tabBarContainer
  },
  sliderContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  introText: {
    fontSize: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#092F03",
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  flexx: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
});

export default HomePage;
