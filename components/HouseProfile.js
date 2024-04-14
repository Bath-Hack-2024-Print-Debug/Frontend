import React from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';

import { Images } from '../config';
import { View } from './View';
import { Colors } from "../config";
import { FullHouse } from './FullHouse';

export const HouseProfile = ({imageSource, price, address}) => {

  const [modalVisible, setModalVisible] = React.useState(true);
  const changeModalVisible = () => {
    setModalVisible(!modalVisible); // Correct, update state in an event handler
  };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress = {changeModalVisible}>
                <Image source={imageSource} style={styles.image} />
                <View style = {styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>Address: {address}</Text>
                    <Text style={styles.buttonText}>Price per Month: £{price}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <FullHouse 
                          imageSource = {imageSource} 
                          address = {address} 
                          propertyDes = {"Welcome to this charming family home nestled in the heart of historic Bath. Offering a seamless blend of modern comfort and classic elegance, this spacious residence boasts [number of bedrooms] bedrooms and [number of bathrooms] bathrooms, providing ample space for both relaxation and entertaining. The bright and airy living room is perfect for gatherings, while the cozy study area offers a tranquil space for work or leisure. The well-appointed kitchen features state-of-the-art appliances and ample storage, making meal preparation a joy. Step outside to the private garden, a serene retreat for enjoying the outdoors. With off-street parking for [number of vehicles] and convenient access to local amenities, schools, and transportation, this meticulously maintained property presents an exceptional opportunity for city living in Bath."}
                        />
                        <TouchableOpacity onPress={changeModalVisible}>
                            <Text style={styles.modalCloseButton}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Arrange children horizontally
    flex: 1,
    backgroundColour: Colors.lightGreen,
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
      backgroundColor: Colors.lightGreen,
      padding: 20,
      borderRadius: 10,
      elevation: 5, // shadow on Android
  },
  modalText: {
      fontSize: 18,
      marginBottom: 20,
  },
  modalCloseButton: {
      fontSize: 16,
      color: 'blue',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      
  },
});