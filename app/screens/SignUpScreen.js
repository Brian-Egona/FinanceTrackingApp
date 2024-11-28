import React, { useState } from 'react'; // Importing React and useState hook
import { View, Text, Button, TouchableOpacity } from 'react-native'; // Importing necessary components
import InputField from '../../components/InputField'; // Import the InputField component
import globalStyles from '../../components/styles/globalStyles'; // Import the GlobalStyle 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const SignUpScreen = () => {
  // State variables for user inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation(); // Access the navigation prop

  const handleSignUp = () => {
    // Handle signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Add your signup logic here
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sign Up</Text>
      <InputField 
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <InputField 
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
      />
      <InputField 
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true} // For password input
      />
      <InputField 
        label="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm your password"
        secureTextEntry={true} // For password input
      />
      <Button title="Sign Up" onPress={handleSignUp} style={globalStyles.button} />
      
      {/* Line for logging in */}
      <Text style={{ marginTop: 20 }}>
        Already have an account? 
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#007BFF', fontWeight: 'bold' }}> Log In</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUpScreen; // Exporting the SignUpScreen component
