import React from "react";
import { StyleSheet, Button, Text } from "react-native";
import {View} from "../components";
import { Colors } from "../config";
import UserDetail from "../components/UserDetail";
export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <UserDetail></UserDetail>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.darkGray,
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
