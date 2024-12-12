import React, { useState } from 'react'; // Importing React and useState hook
import { View, Text, Button, TouchableOpacity } from 'react-native'; // Importing necessary components
import InputField from '../../components/InputField'; // Import the InputField component
import globalStyles from '../../components/styles/globalStyles'; // Import the GlobalStyle 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const LoginScreen = () => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Access the navigation prop

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your authentication logic here
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
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
      {/*<Button title="Log In" onPress={handleLogin} style={globalStyles.button} />*/}
      <Button title="Log In" onPress={() => navigation.navigate('Dashboard')} style={globalStyles.button}/>
      
      {/* Line for signing up */}
      <Text style={{ marginTop: 20 }}> {/* Margin for spacing */}
        Don't have an account? 
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: '#007BFF', fontWeight: 'bold' }}> Signup</Text> {/* Link styling */}
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen; // Exporting the LoginScreen component
