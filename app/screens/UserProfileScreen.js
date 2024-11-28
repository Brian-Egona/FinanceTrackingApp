import React, { useState } from 'react'; // Importing React and useState hook
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native'; // Importing necessary components
import globalStyles from '../../components/styles/globalStyles'; // Import Global Styles
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const UserProfileScreen = () => {
  const navigation = useNavigation(); // Access navigation prop

  // Sample user data (this could be dynamic, such as from an API or Firebase)
  const [username, setUsername] = useState('User');
  const [password, setPassword] = useState('********');
  
  // Modal visibility state
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing session, redirecting to login)
    console.log('Logging out...');
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  const handleDeleteAccount = () => {
    // Logic for deleting the account (e.g., API call to delete the user account)
    console.log('Deleting account...');
    // Navigate to the login screen after account deletion
    navigation.navigate('Login');
  };

  const handleCloseDeleteModal = () => {
    // Close the modal without deleting the account
    setDeleteModalVisible(false);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>User Profile</Text>

      {/* User Logo (can be an image or icon) */}
      <View style={styles.userLogoContainer}>
        <Text style={styles.userLogoText}>👤</Text>
      </View>

      {/* Display username and password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          editable={false} // Make it non-editable for display purposes
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          editable={false} // Make it non-editable for display purposes
        />
      </View>

      {/* Log Out and Delete Account Buttons */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.deleteButton]} 
        onPress={() => setDeleteModalVisible(true)} // Open the modal when clicking the delete button
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>

      {/* Delete Account Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={handleCloseDeleteModal} // Close modal if back button is pressed
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are you sure you want to delete your account?</Text>

            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={handleDeleteAccount}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCloseDeleteModal}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  userLogoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userLogoText: {
    fontSize: 100, // Larger size for the user logo (icon)
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  deleteButton: {
    backgroundColor: '#f44336', // Red button for delete
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
  confirmButton: {
    backgroundColor: '#4CAF50', // Green button for confirmation
  },
  cancelButton: {
    backgroundColor: '#f44336', // Red button for cancellation
    marginTop: 10,
  },
});

export default UserProfileScreen;
