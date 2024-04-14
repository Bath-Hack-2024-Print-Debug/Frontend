import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, Modal, Button, TouchableOpacity } from "react-native";
import { View } from "../components";
import { Colors } from "../config";
import Card from "../components/Card";
import SettingsIcon from "../components/settings";
import { getSimilarStudents } from "../api/user";
import UserDetail from "../components/UserDetail";
import UserPreferences from "../components/UserPreferences";
import { FullFriend } from "../components/FullFriend";

export const FriendsScreen = () => {
  const [data, setData] = useState(null); // State to store fetched data
  const [preferences, setPreferences] = useState(false);
  const [activeUserIndex, setActiveUserIndex] = useState(null); // State to track which user's modal is open

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSimilarStudents();
      setData(response);
    };
    fetchData();
  }, []);

  const togglePreferences = () => setPreferences(!preferences);
  const openUserModal = (index) => setActiveUserIndex(index);
  const closeUserModal = () => setActiveUserIndex(null);

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.text}>Friend Finder</Text>
        <TouchableOpacity onPress={() => setActiveUserIndex(-1)}><SettingsIcon/></TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={activeUserIndex !== null}
      >
        <View style={styles.buttonContainer}>
          <Button title="Account Details" onPress={togglePreferences} disabled={preferences}></Button>
          <Button title="User Preferences" onPress={togglePreferences} disabled={!preferences}></Button>
        </View>
        {preferences ? <UserDetail/> : <UserPreferences/>}
        <View style={{ backgroundColor: Colors.lightGreen, paddingBottom: 40 }}>
          <Button title="Close" onPress={closeUserModal}></Button>
        </View>
      </Modal>
      <ScrollView style={styles.cardContainer}>
        {data && data.users && data.users.map((user, index) => (
          <View key={index} style={styles.container}>
            <TouchableOpacity style={styles.container} onPress={() => openUserModal(index)}>
              <Card title={user.name} description={user.description} imageSource={require("../assets/PersonOne.jpeg")}></Card>
            </TouchableOpacity>
            {activeUserIndex === index && (
              <Modal
                animationType="slide"
                transparent={true}
                visible={true}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <FullFriend
                      name={user.name}
                      imageSource={require("../assets/PersonOne.jpeg")} 
                      des={user.description}
                      gender={user.gender}
                      dob={user.dob}
                    />
                    <TouchableOpacity onPress={closeUserModal}>
                      <Text style={styles.modalCloseButton}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor:Colors.lightGreen,
  },
  topbar:{
    paddingTop:40,
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
    backgroundColor:Colors.lightGreen,
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    
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
