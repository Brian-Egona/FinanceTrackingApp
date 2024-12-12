import React, { useState } from 'react'; // Importing React and useState hook
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, Picker } from 'react-native'; // Importing necessary components
import globalStyles from '../../components/styles/globalStyles'; // Import Global Styles

const AddTransactionScreen = () => {
  // States for modal visibility and form inputs
  const [incomeModalVisible, setIncomeModalVisible] = useState(false);
  const [expenseModalVisible, setExpenseModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toLocaleDateString()); // Current Date

  // Function to handle the submit action
// Function to handle the submit action
const handleSubmit = (type) => {
  if (type === "income") {
    console.log('Income Amount:', amount);
    console.log('Income Category:', category);
    console.log('Income Description:', description);
    console.log('Income Date:', date);
    setIncomeModalVisible(false); // Close the Income modal after submission
  } else if (type === "expense") {
    console.log('Expense Amount:', amount);
    console.log('Expense Category:', category);
    console.log('Expense Description:', description);
    console.log('Expense Date:', date);
    setExpenseModalVisible(false); // Close the Expense modal after submission
  }
};


  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Transaction</Text>

      {/* Button to open the modal for Income */}
      <TouchableOpacity onPress={() => setIncomeModalVisible(true)} style={styles.openModalButton}>
        <Text style={styles.buttonText}>Add Income</Text>
      </TouchableOpacity>

      {/* Button to open the modal for Expense */}
      <TouchableOpacity onPress={() => setExpenseModalVisible(true)} style={styles.openModalButton}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>

      {/* Income Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={incomeModalVisible}
        onRequestClose={() => setIncomeModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Income</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={category}
              style={styles.input}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Select Category:" value="" /> 
              <Picker.Item label="Salary" value="Salary" />
              <Picker.Item label="Freelance" value="Freelance" />
              <Picker.Item label="Gift" value="Gift" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
            <Text style={styles.inputLabel}>Date: {date}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Description"
              value={description}
              onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit("income")}>
              <Text style={styles.submitButtonText}>Submit Income</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={() => setIncomeModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Expense Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={expenseModalVisible}
        onRequestClose={() => setExpenseModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Expense</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
            <Picker
              selectedValue={category}
              style={styles.input}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="Select Category:" value="" /> 
              <Picker.Item label="Food" value="Food" />
              <Picker.Item label="Transport" value="Transport" />
              <Picker.Item label="Entertainment" value="Entertainment" />
              <Picker.Item label="Bills" value="Bills" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
            <Text style={styles.inputLabel}>Date: {date}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Description"
              value={description}
              onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit("expense")}>
                <Text style={styles.submitButtonText}>Submit Expense</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.closeButton} onPress={() => setExpenseModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles for modal and buttons
const styles = StyleSheet.create({
  openModalButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddTransactionScreen;
