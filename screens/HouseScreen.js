import React from "react";
import { StyleSheet, Text } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import { FullHouse } from "../components/FullHouse";
import { HouseProfile } from "../components/HouseProfile";


export const HouseScreen = () => {
  return (
    <View style={styles.container}>
        <HouseProfile imageSource={require('../assets/testHouse.jpeg')} price = {151} address = {"2 ST. KILDAS"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.lightGreen,
  },
  text:{
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});
