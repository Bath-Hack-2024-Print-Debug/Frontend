import React from "react";
import { StyleSheet, Text, Button, Pressable } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import { DropDown } from "../components/DropDown";
import { ChatButton } from "../components/ChatButton";

export const HouseScreen = () => {
  return (
    <>
    <View style={styles.containerTop}>
      <Text style={styles.text}>Select your preferences</Text>
      <DropDown label = "bathroom"></DropDown>
      <DropDown label = "bedroom"></DropDown>
      <DropDown label = "price"></DropDown>
    </View>
    <View style={styles.containerBottom}>
      <Text style={styles.textBig}>OR</Text>
      <ChatButton />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flex: 3,
    backgroundColor:Colors.lightGreen,
  },
  text:{
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    color: Colors.darkGreen
  },
  textBig:{
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    color: Colors.darkGreen
  },
  containerBottom: {
    flex: 2,
    backgroundColor:Colors.lightGreen,
  },
});
