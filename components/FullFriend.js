import React from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Images } from '../config';
import { View } from './View';
import { Colors } from "../config";

export const FullFriend = ( {name, imageSource, des, gender, dob}) => {

    const handleContact = () => {
        console.log('contact');
    }

    return (
    <View style={styles.container}>
      <View style = {styles.nameContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <ScrollView style={styles.scrollView}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{des}</Text>
        <Text style={styles.text}>Gender: {gender}</Text>
        <Text style={styles.text}>Date Of Birth: {dob}</Text>
      </View>
      </ScrollView>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress = {handleContact}>
            <Text style={styles.buttonText}>Get In Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Arrange children horizontally
    flex: 1,
    backroundColour: Colors.lightGreen,
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: Colors.cream
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGreen,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.darkGreen,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1, // Take remaining space
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align children to the start
    flexWrap: 'wrap', // Wrap children to next line if needed
    alignContent: 'center',
    padding: 20,
    backroundColor: Colors.lightGreen,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backroundColor: Colors.darkGreen,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backroundColor: Colors.lightGreen,
  },
  button: {
    flex: 1,
    backgroundColor: Colors.cream,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGreen,
  }
});