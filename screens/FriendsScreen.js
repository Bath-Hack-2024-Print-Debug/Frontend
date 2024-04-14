import React, {useState} from "react";
import { StyleSheet, Button, Text ,Modal, TouchableOpacity, Image} from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import UserDetail from "../components/UserDetail";
import UserPreferences from "../components/UserPreferences";

export const FriendsScreen = () => {
  const [preferences,setPreferences] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisible = () => {
    setModalVisible(!modalVisible); // Correct, update state in an event handler
  };
  const changepref = () => {
    setPreferences(!preferences); // Correct, update state in an event handler
  };
  return (
    <>
    <View style={styles.container}>
      <Text></Text>
      <TouchableOpacity style={styles.buttonHouse} onPress = {changeModalVisible}>
        <Text style={styles.buttonText}>Set up HouseMate Finder</Text>
      </TouchableOpacity>
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
    </View>
    <View style={styles.imageContainer}>
      <Image source={require("../assets/HouseInARow.png")} style={styles.image}></Image>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor:Colors.lightGreen,
    paddingTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text:{
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
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
  buttonWrapper:{
    fontSize:50
  },
  buttonHouse:{
    backgroundColor:Colors.darkGreen,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  buttonText:{
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.white,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  imageContainer:{
    flex:1,
    backgroundColor:Colors.lightGreen,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image:{
    width: "100%",
  }
});
