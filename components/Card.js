import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../config';

const Card = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={{
          uri: "https://lid.zoocdn.com/u/2400/1800/acc71ee99f06d8bca2fcde6164aa2f2524e3fbb1.jpg",
        }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cream,
    flexDirection: 'row',
    borderRadius: 10,
    //backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    borderRadius:"100%",
    width: 100,
    height: 100,
    margin:10
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;