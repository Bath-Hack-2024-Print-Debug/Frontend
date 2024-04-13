import React, {useState} from "react";
import { StyleSheet, Button, Text ,Modal} from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import UserDetail from "../components/UserDetail";

export const FriendsScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const changeModalVisible = () => {
    setModalVisible(!modalVisible); // Correct, update state in an event handler
  };
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button title = "open" onPress={changeModalVisible}></Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
          <UserDetail/>
          <Button title = "close" onPress={changeModalVisible}></Button>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.darkGray,
    paddingTop: 50,
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
