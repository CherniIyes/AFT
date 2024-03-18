import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Animated,
  LayoutAnimation,
  Easing,
} from "react-native";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome"; // Updated import
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
  const [searchText, setSearchText] = useState("");
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [faqHeight, setFaqHeight] = useState(new Animated.Value(0));
  const navigation = useNavigation();
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchArticles();
    const intervalId = setInterval(() => {
      setSliderValue((prevValue) => (prevValue === 2 ? 0 : prevValue + 1));
    }, 3000); // Change the slider value every 3 seconds
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  useEffect(() => {
    animateIcon();
  }, [likedArticles]);

  const animateIcon = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      animationValue.setValue(0);
    });
  };

  const handleTest = (idd) => {
    navigation.navigate(`singleArticle`, { idd });
  };

  const fetchArticles = () => {
    axios.get("http://192.168.100.43:6464/articles/").then((response) => {
      setArticles(response.data);
      setLikedArticles(new Array(response.data.length).fill(false));
    });
  };

  const handleLike = (index) => {
    const updatedLikedArticles = [...likedArticles];
    updatedLikedArticles[index] = !updatedLikedArticles[index];
    setLikedArticles(updatedLikedArticles);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleFaq = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFaqExpanded(!faqExpanded);
    Animated.timing(faqHeight, {
      toValue: faqExpanded ? 0 : 400,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View style={styles.sliderContainer}>
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
        </View> */}

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: images[Math.floor(sliderValue)] }}
          />
        </View>

        <Text style={styles.introText}>
          Welcome to the{" "}
          <Text style={{ fontWeight: "bold", fontStyle: "italic", color: "#F6B304" }}>
            future
          </Text>{" "}
          of dairy production! Here are some insightful articles and steps aimed
          at enhancing your dairy production and elevating its quality.
          <Icon name="tree" size={18} color="#4CAF50" /> Let's grow together!
        </Text>

        {/* Enhanced Search Bar */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#F6B304" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search articles by name..."
            placeholderTextColor="#666"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>

        {/* Articles */}
        <View style={styles.articlesContainer}>
          {filteredArticles.map((article, index) => (
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
                    <Animated.View
                      style={{
                        transform: [
                          {
                            scale: animationValue.interpolate({
                              inputRange: [0, 0.5, 1],
                              outputRange: [1, 1.2, 1],
                            }),
                          },
                        ],
                      }}
                    >
                      <Icon
                        name={likedArticles[index] ? "heart" : "heart-o"}
                        size={20}
                        color={likedArticles[index] ? "#F6B304" : "#092F03"}
                      />
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Advanced FAQ Section */}
        <TouchableOpacity onPress={toggleFaq} style={styles.faqHeader}>
          <Text style={styles.faqHeaderText}>FAQ</Text>
          <Icon
            name={faqExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color="#F6B304"
          />
        </TouchableOpacity>
        <Animated.View style={[styles.faqContainer, { height: faqHeight }]}>
          {/* Add your FAQ content here */}
          <View style={styles.faqItem}>
            <View style={styles.faqBubble}>
              <Text style={styles.faqQuestion}>
                Q: How can I improve milk production?
              </Text>
              <Text style={styles.faqAnswer}>
                A: Ensure cows have proper nutrition and a comfortable environment.
              </Text>
            </View>
          </View>
          <View style={styles.faqItem}>
            <View style={styles.faqBubble}>
              <Text style={styles.faqQuestion}>
                Q: What are the common diseases in dairy cows?
              </Text>
              <Text style={styles.faqAnswer}>
                A: Common diseases include mastitis, lameness, and metabolic disorders.
              </Text>
            </View>
          </View>
          <View style={styles.faqItem}>
            <View style={styles.faqBubble}>
              <Text style={styles.faqQuestion}>
                Q: How often should cows be milked?
              </Text>
              <Text style={styles.faqAnswer}>
                A: Cows should typically be milked two to three times per day.
              </Text>
            </View>
          </View>
          {/* Add more FAQs as needed */}
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Your Dairy App. All Rights Reserved.
          </Text>
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
    shadowColor: "#000",
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
    textAlign: "center",
    fontStyle: "italic",
    color: "#092F03",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#092F03",
  },
  card: {
    backgroundColor: "#D8F7D4",
    borderRadius: 10,
    marginTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
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
    marginBottom: 10,
  },
  flexx: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D8F7D4",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#F6B304",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: "#092F03",
  },
  articlesContainer: {
    marginBottom: 20,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D8F7D4",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingVertical: 15,
  },
  faqHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#092F03",
  },
  faqContainer: {
    backgroundColor: "#D8F7D4",
    borderRadius: 10,
    paddingHorizontal: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  faqBubble: {
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#D8F7D4",
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#092F03",
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 16,
    color: "#092F03",
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
