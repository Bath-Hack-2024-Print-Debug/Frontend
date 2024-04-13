import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const UserDetail = () => {
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

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
            testID="Set Date of Birth"
            value={date}
            mode='date'
            is24Hour={true}
            onChange={onChange}
        />
      <Picker
        selectedValue={gender}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TextInput
        style={[styles.input, { height: 100 }]}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 'auto',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default UserDetail;