import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../config';

const UserPreferences = () => {
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [people, setPeople] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Mixed', value: 'Mixed'}
  ]);

  const handleSubmit = () => {
    // Handle form submission


    // You can send this data to an API, update state, etc.
  };

  return (
    <View style={styles.container}>
    <View style={styles.row}>
    <Text style={styles.label}>City: </Text>
      <TextInput
        style={{fontSize:20,width:200}}
        placeholder="City"
        value={city}
        onChangeText={text => setCity(text)}
        multiline = {false}
      />
      </View>
      <View style={styles.row}>
    <Text style={styles.label}>Max people: </Text>
      <TextInput
         keyboardType='numeric'
        style={{fontSize:20,width:200}}
        placeholder="Max people"
        value={people}
        onChangeText={text => setPeople(text)}
        multiline = {false}
      />
      </View>
      <View style={styles.row}>
    <Text style={styles.label}>Max price: </Text>
      <TextInput
         keyboardType='numeric'
        style={{fontSize:20,width:200}}
        placeholder="Max price"
        value={maxPrice}
        onChangeText={text => setMaxPrice(text)}
        multiline = {false}
      />
      </View>
      <View style={styles.row}>
    <Text style={styles.label}>Min price: </Text>
      <TextInput
         keyboardType='numeric'
        style={{fontSize:20,width:200}}
        placeholder="Min price"
        value={minPrice}
        onChangeText={text => setMinPrice(text)}
        multiline = {false}
      />
      </View>
      <View style={[styles.row,{zIndex: 2}]}>
      <Text style={styles.label}>Gender: </Text>
    <DropDownPicker
    containerStyle={{width: 200,elevation:30}}
      placeholder="select gender"
      open={open}
      value={gender}
      items={items}
      setOpen={setOpen}
      setValue={setGender}
      setItems={setItems}
    />
    </View>
      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:Colors.darkGreen,
  },
  row: {
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    backgroundColor:Colors.lightGreen,
    borderRadius:8,
    paddingHorizontal:"3%",
    
  },
  label:{
    fontSize:20,
    fontWeight:'bold',
    color:Colors.cream,
  }
  
});

export default UserPreferences;