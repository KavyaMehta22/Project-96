import React, { Component } from 'react';
import {
  Text,
  View,
  Flatlist,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader';

export default class Suggestion extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="Suggestions" />
        <ScrollView>
          <Image style={styles.image} source={require('../assets/logo_1.jpg')} />
          <Text style={styles.text}>1. Start your day with a clear focus.</Text>
          <Text style={styles.text}>2. Set your goals correctly.</Text>
          <Text style={styles.text}>3. Remove non-essential tasks.</Text>
          <Text style={styles.text}>4. Learn to prioratise your work.</Text>
          <Text style={styles.text}>5. Put a time limit on tasks.</Text>
          <Text style={styles.text}>6. Select random days for all your hobbies.</Text>
          <Text style={styles.text}>7. Take small breaks between your activities so that you can't be bored .</Text>
          <Text style={styles.text}>
            8. Work smart not hard.
          </Text>
          <Text style={styles.text}>
            9. Keep yourself hydrated.
          </Text>
          <Text style={styles.text}>
            10. Review your day.
          </Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edc2d8ff',
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 23,
    fontColor: '#000',
  },
});
