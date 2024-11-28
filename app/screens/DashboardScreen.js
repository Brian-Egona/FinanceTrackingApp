import React, { useState } from 'react'; // Importing React and useState hook
import { View, Text, TouchableOpacity, FlatList, ScrollView, Dimensions, StyleSheet, Image } from 'react-native'; // Importing necessary components
import PieChartComponent from '../../components/PieChartComponent'; // Import the reusable PieChart component
import globalStyles from '../../components/styles/globalStyles'; // Import the GlobalStyle
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

// Utility function to generate a random color
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Get the screen width dynamically
const screenWidth = Dimensions.get('window').width;

const DashboardScreen = () => {
  const navigation = useNavigation(); // Access navigation prop

  // Sample expense categories (this data could come dynamically from a database or API)
  const expenseData = [
    { name: 'Rent', value: 500, color: generateRandomColor() },
    { name: 'Groceries', value: 200, color: generateRandomColor() },
    { name: 'Utilities', value: 150, color: generateRandomColor() },
    { name: 'Transportation', value: 100, color: generateRandomColor() },
    { name: 'Entertainment', value: 50, color: generateRandomColor() },
  ];

  // Format data to match the pie chart structure
  const data = expenseData.map(item => ({
    name: item.name,
    population: item.value,
    color: item.color,
    legendFontColor: 'white',
    legendFontSize: 15,
  }));

  // Sample transaction data (this could also come dynamically from a database or API)
  const transactions = [
    { id: '1', description: 'Rent Payment', amount: '$500', category: 'Rent' },
    { id: '2', description: 'Grocery Shopping', amount: '$200', category: 'Groceries' },
    { id: '3', description: 'Utility Bill', amount: '$150', category: 'Utilities' },
    { id: '4', description: 'Bus Fare', amount: '$100', category: 'Transportation' },
    { id: '5', description: 'Movie Night', amount: '$50', category: 'Entertainment' },
  ];

  // Render each transaction item
  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
      </View>
      
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit', item.id)}>
          <Text style={styles.editText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => console.log('Delete', item.id)}>
          <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={globalStyles.container}>
        {/* User Profile Link */}
        <TouchableOpacity 
          style={styles.userLink} 
          onPress={() => navigation.navigate('UserProfile')} // Navigates to the UserProfile screen
        >
          <Text style={styles.userLinkText}>User</Text>
        </TouchableOpacity>

        <Text style={globalStyles.title}>Dashboard</Text>
        <PieChartComponent data={data} />

        <View style={globalStyles.legendContainer}>
          {expenseData.map((item, index) => (
            <View key={index} style={globalStyles.legendItem}>
              <View style={[globalStyles.legendColor, { backgroundColor: item.color }]} />
              <Text style={globalStyles.legendText}>{item.name}: ${item.value}</Text>
            </View>
          ))}
        </View>

        <Text style={[globalStyles.subtitle, { marginTop: 50 }]}>Recent Transactions

        {/* Add Transaction Button */}
        <TouchableOpacity 
          style={styles.addTransactionButton} 
          onPress={() => navigation.navigate('AddTransaction')}
        >
          <Image 
            source={require('../../assets/images/plus-button.png')} // Add your image here (replace the path with your actual image location)
            style={styles.addTransactionImage}
          />
        </TouchableOpacity>

        </Text>
        
        {/* Display the list of transactions */}
        <FlatList
          data={transactions}
          renderItem={renderTransactionItem}
          keyExtractor={item => item.id}
          contentContainerStyle={globalStyles.transactionTable} // Ensures table takes up full width
        />


      </View>
    </ScrollView>
  );
};

// Styling for the transaction table and buttons
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensures the content takes up available space and is scrollable
    backgroundColor: '#333D49', // Keeping the background consistent
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: screenWidth - 40, // 40px margin/padding for some space from edges
  },
  userLink: {
    position: 'absolute',
    top: 10, // Adjust as needed to position it correctly at the top
    left: 20, // Aligns it to the left
    zIndex: 10, // Ensures it stays on top
  },
  userLinkText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  transactionDescription: {
    color: 'black',
    fontSize: 20,
  },
  transactionAmount: {
    color: 'black',
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 10,
  },
  deleteButton: {},
  editText: {
    fontSize: 20,
    color: 'yellow',
  },
  deleteText: {
    fontSize: 20,
    color: 'red',
  },
  addTransactionButton: {
    marginTop: 20, // Adjust this to control the space between the table and button
    alignSelf: 'flex-end', // Aligns it to the right
  },
  addTransactionImage: {
    width: 60, // Width of the image
    height: 60, // Height of the image
    borderRadius: 30, // Circular shape for the image
  },
});

export default DashboardScreen;
