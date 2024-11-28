// globalStyles.js
import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Container for main views
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#333D49', // Dark background color
    width: '100%',
  },
  
  // Button styles
  button: {
    backgroundColor: '#007BFF', // Button background color
    color: 'white',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center', // Center the text in the button
    width: '100%', // Make button full width
  },
  
  // Input field styles
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '125%', // Full width for input
    borderRadius: 5, // Rounded corners for input
    color: 'white', // Set the text color to white for better contrast
  },
  
  // Title styles
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // White color for the title text
  },
  
  // Sub title styles
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left', // Aligning the subtitle to the left
    width: '100%', // Making it take full width
    marginBottom: 15,
  },

  
  // Label styles for input fields
  label: {
    fontSize: 16,
    color: 'white', // Label color
    marginBottom: 5, // Space between label and input
    alignItems: 'center',
  },

  // Error message styles
  errorText: {
    color: 'red', // Red color for error messages
    marginBottom: 10,
  },
  
  // Styles for Dashboard
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  legendText: {
    color: 'white',
    fontSize: 16,
  },
  

});

export default globalStyles;
