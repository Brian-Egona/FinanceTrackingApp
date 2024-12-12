// InputField.js
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import globalStyles from '../components/styles/globalStyles'; // Ensure the path is correct

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
  <View style={globalStyles.inputContainer}>
    <Text style={globalStyles.label}>{label}</Text>
    <TextInput
      style={globalStyles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default InputField; // Make sure it's a default export
