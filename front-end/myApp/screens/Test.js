import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Animated } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const Test = () => {
  const route = useRoute();
  const { idd } = route.params;
  const [article, setArticle] = useState({});
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageHeight = new Animated.Value(0);

  useEffect(() => {
    axios.get(`http://192.168.1.6:6464/articles/${idd}`).then((fetchedArticles) => {
      setArticle(fetchedArticles.data);
      setIsImageLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (isImageLoaded) {
      Animated.timing(imageHeight, {
        toValue: 300,
        duration: 800,
        useNativeDriver: false,
      }).start();
    }
  }, [isImageLoaded]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.Image
        style={[styles.image, { height: imageHeight }]}
        source={{ uri: article.img }}
      />
      <Text style={styles.date}>{article.date}</Text>
      <Text style={styles.author}>{article.Author}</Text>
      <Text style={styles.content}>{article.content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'linear-gradient(to bottom right, #000000, #00755f)',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});

export default Test;