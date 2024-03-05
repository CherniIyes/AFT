import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { Slider } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomePage = (props) => {
  const images = [
    "https://c4.wallpaperflare.com/wallpaper/807/189/316/selective-focus-photography-of-green-flowers-near-sea-wallpaper-preview.jpg",
    "https://c1.wallpaperflare.com/preview/388/52/975/cow-funny-ruminant-cute.jpg",
    "https://c1.wallpaperflare.com/preview/854/259/728/cow-small-calf-baby-meadow-sweet.jpg",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    const fetchedArticles = [
      {
        title: "Importance of dairy hygiene",
        articleImg: "https://c0.wallpaperflare.com/preview/624/812/844/white-and-black-cow-standing-on-green-grass-field-during-daytime.jpg",
        likes: 10,
        rating: 4.5,
      },
      {
        title: "Teat disinfection",
        articleImg: "https://c1.wallpaperflare.com/preview/314/313/121/cow-milk-cow-beef-pasture.jpg",
        likes: 15,
        rating: 4.2,
      },
    ];
    setArticles(fetchedArticles);
  };

  const handleCardClick = (title) => {
    console.log("Navigating to full article view:", title);
    navigation.navigate("FullArticle", { title });
  };

  const handleLike = (index) => {
    const updatedArticles = [...articles];
    updatedArticles[index].likes += 1;
    setArticles(updatedArticles);
  };

  const handleRatingChange = (newRating, index) => {
    const updatedArticles = [...articles];
    updatedArticles[index].rating = newRating;
    setArticles(updatedArticles);
  };

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView>
        <View style={styles.imageContainer}>
          {filteredArticles.map((article, index) => (
            <TouchableOpacity key={index} onPress={() => handleCardClick(article.title)}>
              <View style={styles.card}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: article.articleImg }}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{article.title}</Text>
                  <View style={styles.ratingContainer}>
                    <MaterialIcons name="star" size={24} color="#FFD700" />
                    <Text style={styles.rating}>{article.rating}</Text>
                  </View>
                  <View style={styles.likeContainer}>
                    <TouchableOpacity onPress={() => handleLike(index)}>
                      <MaterialIcons name="favorite" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={styles.likes}>Likes: {article.likes}</Text>
                  </View>
                  <Slider
                    value={article.rating}
                    minimumValue={0}
                    maximumValue={5}
                    step={0.1}
                    thumbTintColor="#FFD700"
                    onValueChange={(value) => handleRatingChange(value, index)}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  likes: {
    marginLeft: 5,
  },
});

export default HomePage;
