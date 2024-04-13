import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet, TouchableOpacity} from 'react-native';

import { Colors } from '../config';

export const ChatButton = ({}) => {
    const handlePress = () => {
        console.log('Chat button pressed');
    };
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.textButton}>Chat with our AI property assistant</Text>
    </TouchableOpacity>
  );
};
  
const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.darkGreen,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    textButton: {
      color: Colors.cream,
      fontSize: 20,
    },
});
