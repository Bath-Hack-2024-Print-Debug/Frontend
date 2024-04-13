import React from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Images } from '../config';
import { View } from './View';
import { Colors } from "../config";

export const HouseProfile = ({imageSource, price, address}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>House Options For You</Text>
            <TouchableOpacity style={styles.button}>
                <Image source={imageSource} style={styles.image} />
                <View style = {styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Address: {address}</Text>
                    <Text style={styles.buttonText}>Price per Week: £{price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Arrange children horizontally
    flex: 1,
    backroundColour: Colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: Colors.cream,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkGreen,
  },
  button: {
    backgroundColor: Colors.darkGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width: '90%',
    padding: 10,
  },
  buttonTextContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.lightGreen,
    marginBottom: 10,
  }
});