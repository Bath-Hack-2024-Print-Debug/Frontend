import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Text } from 'react-native';
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
      <View style={styles.row}>
        <Text style={styles.label}>test</Text>
        <DateTimePicker
            style = {{}}
            testID="Set Date of Birth"
            value={date}
            mode='date'
            is24Hour={true}
            onChange={onChange}
        />
        </View>
      <View style={styles.row}>
      <Text style={styles.label}>test</Text>
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
    <View style={styles.row}>
    <Text style={styles.label}>test</Text>
      <TextInput
        style={{fontSize:20,width:200}}
        placeholder="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        multiline = {false}
      />
      </View>
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
  row: {
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    zIndex: 2,
    backgroundColor:Colors.mediumGray,
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