import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import Card from "../components/Card";
import SettingsIcon from "../components/settings";
export const HouseScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.text}>Potential housemates</Text>
        <SettingsIcon></SettingsIcon>
      </View>
      <ScrollView style={styles.cardContainer}>
      <Card title={"Louis Viner"} description={"Hi! I am a second year student looking for housemates"} imageSource={require("../assets/PersonOne.jpeg")}></Card>
      <Card title={"Alfie Downing"} description={"Please need friends"} imageSource={require("../assets/Person2.jpeg")}></Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor:Colors.lightGreen,
  },
  topbar:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  settings:{
    marginLeft:'auto',
    marginRight:20,
  },
  text:{
    color: Colors.darkGreen,
    fontSize: 33,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  cardContainer:{
    marginVertical:10,
    backgroundColor:Colors.darkGreen,
    marginHorizontal:20,
    borderRadius:10,
  }
});
