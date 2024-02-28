
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { MaterialIcons } from '@expo/vector-icons';

const HomePage = () => {

  const images = [
    'https://c4.wallpaperflare.com/wallpaper/807/189/316/selective-focus-photography-of-green-flowers-near-sea-wallpaper-preview.jpg',
    'https://c1.wallpaperflare.com/preview/388/52/975/cow-funny-ruminant-cute.jpg',
    'https://c1.wallpaperflare.com/preview/854/259/728/cow-small-calf-baby-meadow-sweet.jpg'
  ];

  const [sliderValue, setSliderValue] = useState(0);
  const [articles, setArticles] = useState([]);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    const fetchedArticles = [
      { title: 'Importance of dairy hygiene', articleImg: 'https://c0.wallpaperflare.com/preview/624/812/844/white-and-black-cow-standing-on-green-grass-field-during-daytime.jpg' },
      { title: 'Teat disinfection', articleImg: 'https://c1.wallpaperflare.com/preview/314/313/121/cow-milk-cow-beef-pasture.jpg' }
    ];
    setArticles(fetchedArticles);
  };

  const handleCardClick = (title) => {
    console.log('Navigating to full article view:', title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Dairy Production</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Sales</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Dairy Value Chain</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Expenses</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sliderContainer}>
        <Slider
          value={sliderValue}
          style={{ width: '100%' }}
          minimumValue={0}
          maximumValue={2}
          minimumTrackTintColor="#34D399"
          maximumTrackTintColor="#10B981"
          thumbTintColor="#10B981"
          onValueChange={handleSliderChange}
        />
        <MaterialIcons
          name="park"
          size={24}
          color="#10B981"
          style={{ position: 'absolute', left: `${sliderValue * (100 / 2)}%`, top: 20, zIndex: 1 }}
        />
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: images[Math.floor(sliderValue)] }}
        />
      </View>

      <ScrollView>
        <Text>These are our articles</Text>
        <TouchableOpacity onPress={() => handleCardClick(articles.length > 0 ? articles[0].title : '')}>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{ uri: articles.length > 0 ? articles[0].articleImg : '' }}
            />
            <Text>{articles.length > 0 ? articles[0].title : ''}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleCardClick(articles.length > 1 ? articles[1].title : '')}>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{ uri: articles.length > 1 ? articles[1].articleImg : '' }}
            />
            <Text>{articles.length > 1 ? articles[1].title : ''}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  sliderContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default HomePage;

