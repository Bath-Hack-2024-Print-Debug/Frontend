import React, { useCallback } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import {RNPickerSelect} from'react-native-picker-select';

import { Colors } from '../config';

export const DropDown = ({label, selectedValue, onValueChange}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.cream,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    }
  });