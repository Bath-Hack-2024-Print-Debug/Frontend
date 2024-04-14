import React from "react";
import { StyleSheet, Text, ScrollView, Modal,Button, TouchableOpacity } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import SettingsIcon from "../components/settings";

import { HouseProfile } from "../components/HouseProfile";


export const HouseScreen = () => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.topbar}>
    //     <Text style={styles.text}>Potential housemates</Text>
    //     <SettingsIcon></SettingsIcon>
    //   </View>
    //   <ScrollView style={styles.cardContainer}>
    //   <Card title={"Louis Viner"} description={"Hi! I am a second year student looking for housemates"} imageSource={require("../assets/PersonOne.jpeg")}></Card>
    //   <Card title={"Alfie Downing"} description={"Please need friends"} imageSource={require("../assets/Person2.jpeg")}></Card>
    //   </ScrollView>
    // </View>
    <View style={styles.container}>
      <Text style={styles.text}>Potential houses</Text>
      <HouseProfile imageSource={require("../assets/Person2.jpeg")} price={1000} address={"1 BATH RD"} desc = {""}></HouseProfile>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
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
  },
  buttonContainer:{
    backgroundColor:Colors.darkGreen, 
    paddingTop:60 ,
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    maxHeight:100,
    fontSize:50,
  },
  });

