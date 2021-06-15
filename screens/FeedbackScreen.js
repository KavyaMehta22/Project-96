import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class FeedbackScreen extends Component {
  constructor() {
    super();
    this.state = {
      userName: firebase.auth().currentUser.email,
      subject: '',
      message: '',
    };
  }

  addItem = (subject, message) => {
    var userName = this.state.userName;
    db.collection('feedback_form').add({
      username: userName,
      subject: subject,
      message: message,
    });
    this.setState({
      subject: '',
      message: '',
    });

    this.setState({
      subject: '',
      message: '',
    });

    return Alert.alert('Thank you for your feedback', '', [
      {
        text: 'OK',
        onPress: () => {
          this.props.navigation.navigate('TodayActivity');
        },
      },
    ]);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#edc2d8ff' }}>
        <MyHeader navigation={this.props.navigation} title="Feedback" />
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={styles.formTextInput}
            placeholder={'Subject'}
            maxLength={20}
            onChangeText={(text) => {
              this.setState({
                subject: text,
              });
            }}
            value={this.state.subject}
          />
          <TextInput
            multiline
            numberOfLines={6}
            style={[styles.formTextInput, { height: 110 }]}
            placeholder={'Your feedback'}
            onChangeText={(text) => {
              this.setState({
                message: text,
              });
            }}
            value={this.state.message}
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 10 }]}
            onPress={() => {
              this.addItem(this.state.subject, this.state.message);
            }}>
            <Text style={{ color: '#ffff', fontSize: 18, fontWeight: 'bold' }}>
              Submit
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: '75%',
    height: 40,
    alignSelf: 'center',
    borderColor: '#8abad3ff',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    marginTop: 15,
    backgroundColor: '#8abad3ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 11.32,
    elevation: 17,
  },
});
