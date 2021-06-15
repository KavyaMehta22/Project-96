import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isVisible: false,
      firstName: '',
      lastName: '',
      mobileNumber: '',
      address: '',
      confirmPassword: '',
    };
  }

  userLogin = (username, password) => {
    var login = 'You have Successfully logged in.';
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        this.props.navigation.navigate('TodayActivity');
        ToastAndroid.show(login, ToastAndroid.SHORT);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      });
  };

  userSignUp = (username, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(username, password)
        .then((response) => {
          db.collection('users').add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            mobile_number: this.state.mobileNumber,
            username: this.state.username,
            address: this.state.address,
          });
          return Alert.alert('User Added Successfully', '', [
            { text: 'OK', onPress: () => this.setState({ isVisible: false }) },
          ]);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  showModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={this.state.isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ef6079ff',
          //  borderRadius: 17,
          //borderWidth: 2,
        }}>
        <ScrollView style={{ width: '100%' }}>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(25),
                fontWeight: 'bold',
                color: '#8abad3ff',
                margin: 7,
              }}>
              {' '}
              SIGN UP{' '}
            </Text>
          </View>
          <View style={{ flex: 0.95 }}>
            <TextInput
              style={styles.formTextInput}
              placeholder={'First Name'}
              placeholderTextColor="#8abad3ff"
              maxLength={15}
              onChangeText={(text) => {
                this.setState({
                  firstName: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Last Name'}
              placeholderTextColor="#8abad3ff"
              maxLength={10}
              onChangeText={(text) => {
                this.setState({
                  lastName: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Mobile Number'}
              placeholderTextColor="#8abad3ff"
              maxLength={15}
              keyboardType={'numeric'}
              onChangeText={(text) => {
                this.setState({
                  mobileNumber: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Address'}
              placeholderTextColor="#8abad3ff"
              multiline={true}
              onChangeText={(text) => {
                this.setState({
                  address: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Username'}
              placeholderTextColor="#8abad3ff"
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({
                  username: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Password'}
              placeholderTextColor="#8abad3ff"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder={'Confirm Password'}
              placeholderTextColor="#8abad3ff"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  confirmPassword: text,
                });
              }}
            />
          </View>
          <View style={{ flex: 0.2, alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() =>
                this.userSignUp(
                  this.state.username,
                  this.state.password,
                  this.state.confirmPassword
                )
              }>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => this.setState({ isVisible: false })}>
              <Text
                style={{
                  fontSize: RFValue(20),
                  fontWeight: 'bold',
                  color: '#8abad3ff',
                  margin: RFValue(10),
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );

  render() {
    return (
      <View style={styles.container}>
       <Image
            style={{ height: 40, width : 40,  alignItems: 'center' }}
            source={'../assets/logo.jpg'}
          />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {this.showModal()}
        </View>
        <View style={styles.profileContainer}>
          {}
         
          <Text style={styles.title}>Golden Time</Text>
          <Text
            style={{
              color: '#8abad3ff',
              fontSize: 20,
              fontFamily: 'AvenirNext-Heavy',
              marginBottom: 15,
            }}>
            Better Utilisation of Your Time
          </Text>

          <Text
            style={{
              color: '#8abad3ff',
              fontSize: 20,
              fontFamily: 'AvenirNext-Heavy',
              marginBottom: 15,
            }}>
            By-: Kavya Mehta
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 55,
            }}>
            USERNAME
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.loginBox}
              keyboardType={'email-address'}
              onChangeText={(text) => {
                this.setState({
                  username: text,
                });
              }}
            />
          </View>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 55,
            }}>
            PASSWORD
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: 10 }]}
              onPress={() => {
                this.userLogin(this.state.username, this.state.password);
              }}>
              <Text
                style={{ color: '#8abad3ff', fontSize: 19, fontWeight: 'bold' }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.setState({ isVisible: true });
              }}>
              <Text
                style={{ color: '#8abad3ff', fontSize: 19, fontWeight: 'bold' }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
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
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: '200',
    fontFamily: 'AvenirNext-Heavy',
    color: '#8abad3ff',
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: '#000',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5,
  },
  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#ffff',
    elevation: 10,
    marginBottom: 10,
    borderColor: '#000',
    borderWidth: 2,
  },
  buttonContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: '85%',
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#000',
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14),
  },
  registerButton: {
    width: '85%',
    height: RFValue(45),
    marginTop: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: '#8abad3ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.44,
    shadowRadius: 12.32,
    elevation: 16,
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: 'bold',
    color: '#ffff',
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
