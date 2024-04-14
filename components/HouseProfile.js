import React from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';

import { Images } from '../config';
import { View } from './View';
import { Colors } from "../config";
import { FullHouse } from './FullHouse';


export const HouseProfile = ({imageSource, price, address,desc}) => {

  const [modalVisible, setModalVisible] = React.useState(false);
  const changeModalVisible = () => {
    setModalVisible(!modalVisible); // Correct, update state in an event handler

  };

  console.log("imageSource:", imageSource);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress = {changeModalVisible}>

           <Image source={{uri: imageSource}} style={styles.image} />

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
                          propertyDes = {desc}
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
    marginVertical:15,
    borderRadius:8,
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
    color: Colors.black,
  },
  button: {
    borderRadius:8,
    backgroundColor: Colors.cream,
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
    color: Colors.black,
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