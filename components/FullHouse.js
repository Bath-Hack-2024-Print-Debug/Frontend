import React from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Images } from '../config';
import { View } from './View';
import { Colors } from "../config";

// an example of how to call rn
/*
<FullHouse 
        imageSource = {require('../assets/testHouse.jpeg')} 
        address = {"2 ST. KILDAS"} 
        propertyDes = {"Welcome to this charming family home nestled in the heart of historic Bath. Offering a seamless blend of modern comfort and classic elegance, this spacious residence boasts [number of bedrooms] bedrooms and [number of bathrooms] bathrooms, providing ample space for both relaxation and entertaining. The bright and airy living room is perfect for gatherings, while the cozy study area offers a tranquil space for work or leisure. The well-appointed kitchen features state-of-the-art appliances and ample storage, making meal preparation a joy. Step outside to the private garden, a serene retreat for enjoying the outdoors. With off-street parking for [number of vehicles] and convenient access to local amenities, schools, and transportation, this meticulously maintained property presents an exceptional opportunity for city living in Bath."}
/>
*/

export const FullHouse = ( {imageSource, address, propertyDes}) => {

    const handleFair = () => {
        console.log('fair');
    }

    const handleRev = () => {
        console.log('rev');
    }

    return (
    <View style={styles.container}>
      <View style = {styles.addressContainer}>
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri:imageSource}} style={styles.image} />
      </View>
      <ScrollView style={styles.scrollView}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Property Description: </Text>
        <Text style={styles.text}>{propertyDes}</Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  },
  addressText: {
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
  },
  scrollView: {
    flex: 1,
  },
  addressContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backroundColor: Colors.lightGreen,
  },
  buttonContainer: {
    height:30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backroundColor: Colors.lightGreen,
  },
  button: {
    height:30,
    flex: 1,
    backgroundColor: Colors.cream,
    padding: 0,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGreen,
  }
});