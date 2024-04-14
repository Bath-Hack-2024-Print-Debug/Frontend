import React from "react";
import { StyleSheet, Text, ScrollView, Modal,Button, TouchableOpacity } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import Card from "../components/Card";
import SettingsIcon from "../components/settings";
import { getSimilarStudents } from "../api/user";
import { useState,useEffect } from "react";
import UserDetail from "../components/UserDetail";
import UserPreferences from "../components/UserPreferences";

export const FriendsScreen = () => {
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
        const response = await getSimilarStudents(); // Replace with your API endpoint
        setData(response); // Update state with fetched data
    };
    fetchData(); // Call fetchData function when component mounts
  }, []);

  const [preferences,setPreferences] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisible = () => {
    setModalVisible(!modalVisible); // Correct, update state in an event handler
  };
  const changepref = () => {
    setPreferences(!preferences); // Correct, update state in an event handler
  };
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.text}>Friend Finder</Text>
        <TouchableOpacity onPress={changeModalVisible}><SettingsIcon></SettingsIcon></TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
          <View style={styles.buttonContainer}>
          <Button title = "Account Details" onPress={changepref} disabled={preferences}></Button>
          <Button title = "User Preferences" onPress={changepref} disabled={!preferences}></Button>
          </View>
          {preferences ? <UserDetail/> : <UserPreferences/>}
          <View style={{backgroundColor:Colors.darkGray, paddingBottom:70}}>
          <Button title = "close" onPress={changeModalVisible} ></Button>
          </View> 
        </Modal>
      <ScrollView style={styles.cardContainer}>
      {data && data.users && data.users.map((user, index) => {
          {console.log(user);}
          return <Card title={user.name} description={user.description} imageSource={require("../assets/PersonOne.jpeg")}></Card>
        })}
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
