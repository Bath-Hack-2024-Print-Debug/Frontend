import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../config';
import { setUserDetails } from '../api/user';

const UserDetail = () => {
  const [name, setName] = useState('');
  const [DoB, setDoB] = useState(new Date(0));
  const [desc, setDesc] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDoB(currentDate);
  };

  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'}
  ]);

  const handleSubmit = () => {
    // Handle form submission
    setUserDetails(name,DoB,desc,gender)

    // You can send this data to an API, update state, etc.
  };

  return (
    <View style={styles.container}>
    <View style={styles.row}>
    <Text style={styles.label}>Name: </Text>
      <TextInput
        style={{fontSize:20,width:200}}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
        multiline = {false}
      />
      </View>

      <View style={styles.row}>
    <Text style={styles.label}>Description: </Text>
      <TextInput
        style={{fontSize:20,width:200}}
        placeholder="..."
        value={desc}
        onChangeText={text => setDesc(text)}
        multiline = {false}
      />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Date of Birth: </Text>
        <DateTimePicker
            style = {{}}
            testID="Set Date of Birth"
            value={DoB}
            mode='date'
            is24Hour={true}
            onChange={onChange}
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
    color:Colors.white,
  }
  
});

export default UserDetail;