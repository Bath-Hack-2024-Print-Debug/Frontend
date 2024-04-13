import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from '../config';

const UserDetail = () => {
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'}
  ]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const handleSubmit = () => {
    // Handle form submission

    console.log('Date of Birth:', date);
    console.log('Gender:', gender);
    console.log('Description:', description);
    // You can send this data to an API, update state, etc.
  };

  return (
    <View style={styles.container}>
        <DateTimePicker
            style = {{marginBottom:20}}
            testID="Set Date of Birth"
            value={date}
            mode='date'
            is24Hour={true}
            onChange={onChange}
        />
    <DropDownPicker
      open={open}
      value={gender}
      items={items}
      setOpen={setOpen}
      setValue={setGender}
      setItems={setItems}
    />
      <TextInput
        style={[styles.input, {fontSize:20}]}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline = {false}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    marginVertical: 30,
    borderRadius: 8,
    backgroundColor: Colors.mediumGray,
    height: 'auto',
    width: '100%',
    borderWidth: 0,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  
});

export default UserDetail;