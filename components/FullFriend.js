import React from 'react';
import { Image, StyleSheet, Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { Colors } from "../config"; // Assuming 'Colors' are correctly defined in your config

export const FullFriend = ({ name, imageSource, des, gender, dob }) => {
    const handleContact = () => {
        console.log('contact');
    }

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Description: {des}</Text>
                    <Text style={styles.text}>Gender: {gender}</Text>
                    <Text style={styles.text}>Date Of Birth: {dob}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleContact}>
                    <Text style={styles.buttonText}>Get In Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.lightGreen, // Corrected property name
        paddingTop: 70,
    },
    image: {
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: Colors.cream,
        paddingTop: 70,

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGreen,
        marginBottom: 10,
        paddingTop: 70,

    },
    nameText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.darkGreen,
    },
    textContainer: {
        padding: 20,
        backgroundColor: Colors.lightGreen, // Corrected property name
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingTop: 30,

    },
    scrollView: {
        marginHorizontal: 20, // Give some horizontal margin if needed
    },
    nameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGreen, // Corrected property name
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGreen, // Corrected property name
        marginBottom:20,
    },
    button: {
        backgroundColor: Colors.cream,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        marginVertical: 10, // Ensures space above and below the button
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGreen,
    }
});

export default FullFriend;
