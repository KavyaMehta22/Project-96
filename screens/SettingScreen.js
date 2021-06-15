import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import db from '../config';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';

export default class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      firstName: '',
      lastName: '',
      address: '',
      contact: '',
      docId: '',
    };
  }

  getUserDetails = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('users')
      .where('email_id', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            emailId: data.email_id,
            firstName: data.first_name,
            lastName: data.last_name,
            address: data.address,
            contact: data.contact,
            docId: doc.id,
          });
        });
      });
  };

  updateUserDetails = () => {
    var message = 'Changes are saved successfully';
    db.collection('users').doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
    });

    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  componentDidMount() {
    this.getUserDetails();
  }

  render() {
    return (
      <View style={styles.container}>
        <MyHeader title="Settings" navigation={this.props.navigation} />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.formTextInput}
            placeholder={'First Name'}
            placeholderTextColor="#000"
            maxLength={12}
            onChangeText={(text) => {
              this.setState({
                firstName: text,
              });
            }}
            value={this.state.firstName}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={'Last Name'}
            placeholderTextColor="#000"
            maxLength={12}
            onChangeText={(text) => {
              this.setState({
                lastName: text,
              });
            }}
            value={this.state.lastName}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={'Contact'}
            placeholderTextColor="#000"
            maxLength={10}
            keyboardType={'numeric'}
            onChangeText={(text) => {
              this.setState({
                contact: text,
              });
            }}
            value={this.state.contact}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder={'Address'}
            multiline={true}
            placeholderTextColor="#000"
            onChangeText={(text) => {
              this.setState({
                address: text,
              });
            }}
            value={this.state.address}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.updateUserDetails();
            }}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edc2d8ff',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTextInput: {
    width: '75%',
    height: 45,
    alignSelf: 'center',
    borderColor: '#8abad3ff',
    borderRadius: 11,
    borderWidth: 2,
    marginTop: 20,
    padding: 11,
  },
  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#8abad3ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
  },
});

// add Toast android message for all alerts.
