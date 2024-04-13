import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsIcon = () => {
  const navigation = useNavigation();

  const handleSettingsPress = () => {
    navigation.navigate('Settings'); // Assuming you have a 'Settings' screen in your navigation stack
  };

  return (
    <TouchableOpacity onPress={handleSettingsPress}>
      <Image
        source={require("../assets/settings.png")} // Replace with your settings icon image
        style={{ width: 24, height: 24, marginRight: 10 }} // Adjust size and margin as needed
      />
    </TouchableOpacity>
  );
};

export default SettingsIcon;