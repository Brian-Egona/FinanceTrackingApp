// Importing the React library
import React from 'react';
// Importing specific components and utilities from React Native
import { View, Text, StyleSheet } from 'react-native';

// Defining a functional component named Header
const Header = () => {
  return (
    // A View component that acts as a container for other components
    <View style={styles.container}>
      {/* A Text component to display the title */}
      <Text style={styles.title}>Finance Tracker</Text>
    </View>
  );
};

// Creating a stylesheet for the Header component
const styles = StyleSheet.create({
  // Styles for the container View
  container: {
    padding: 20, // Adds padding inside the container
    backgroundColor: '#f8f8f8', // Sets a light gray background color
    alignItems: 'center', // Centers child elements horizontally
  },
  // Styles for the title Text
  title: {
    fontSize: 24, // Sets the font size of the text
    fontWeight: 'bold', // Makes the text bold
  },
});

// Exporting the Header component for use in other files
export default Header;

