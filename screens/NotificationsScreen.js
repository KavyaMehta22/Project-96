import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

import db from '../config';

export default class NotificationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="Notifications" />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
            marginBottom: 10,
          }}>
          <Image source={require('../assets/notification.png')} />
          <Text style={{ fontSize: 25, marginTop: 25 }}>
            You have no Notifications
          </Text>
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
});
