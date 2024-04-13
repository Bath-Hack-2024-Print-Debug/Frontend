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
        <Text style={styles.text}>Possible housemates</Text>

        <SettingsIcon></SettingsIcon>
      </View>
      <ScrollView style={styles.cardContainer}>
      <Card title={"test"} description={"test desc"} imageSource={require("../assets/flame.png")}></Card>
      <Card title={"test"} description={"test desc"} imageSource={require("../assets/flame.png")}></Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    backgroundColor:Colors.darkGray,
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
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  cardContainer:{
    marginVertical:10,
    backgroundColor:Colors.black,
    marginHorizontal:20,
    borderRadius:10,
  }
});
