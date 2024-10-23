import React from 'react'; // Importing React
import { View } from 'react-native'; // Importing View from react-native
import Header from '../../components/Header'; // Corrected import path for Header

const HomeScreen = () => {
  return (
    <View>
      <Header /> {/* Render the Header component */}
      {/* Add additional components or content here */}
    </View>
  );
};

export default HomeScreen; // Exporting the HomeScreen component as default
