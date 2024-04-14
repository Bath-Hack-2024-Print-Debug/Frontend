import * as React from "react";
import { HouseScreen,FriendsScreen } from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../config";


const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: Colors.cream,
      tabBarInactiveTintColor: Colors.lightGreen,
      headerShown: false,
      tabBarStyle: { backgroundColor: Colors.darkGreen, borderTopColor: Colors.darkGreen},
    })}
  >
      <Tab.Screen name="Find Home" component={HouseScreen} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={color} size={size} />
      ),
    }}/>
      <Tab.Screen name="Find Friends" component={FriendsScreen} options={{
      tabBarLabel: 'Friends',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="people" color={color} size={size} />
      ),
    }}/>
    </Tab.Navigator>
  );
};
