import React from "react";
import { StyleSheet, Text, ScrollView, Modal,Button, TouchableOpacity } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import SettingsIcon from "../components/settings";
import { useState,useEffect } from "react";
import { HouseProfile } from "../components/HouseProfile";


export const HouseScreen = () => {
  return (
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
  buttonContainer:{
    backgroundColor:Colors.darkGreen, 
    paddingTop:60 ,
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    maxHeight:100,
    fontSize:50,
  }});