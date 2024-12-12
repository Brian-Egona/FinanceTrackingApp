import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import LoginScreen from '../screens/LoginScreen'; 
import SignUpScreen from '../screens/SignUpScreen'; 
import DashboardScreen from '../screens/DashboardScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
const Stack = createNativeStackNavigator(); 

const App = () => {
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
      </Stack.Navigator>
    
  );
};

export default App;
