import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class TodayActivity extends Component {
  constructor() {
    super();
    this.state = {
      health: '',
      academics: '',
      entertainment: '',
      friendship: '',
      lifegoal: '',
      schoolwork: '',
      sleeping: '',
      hobbies: '',
      games: '',
      isVisible: false,
      healthResult: '',
      academicResult: '',
      entertainmentResult: '',
      friendshipResult: '',
      lifegoalResult: '',
      schoolworkResult: '',
      sleepingResult: '',
      hobbiesResult: '',
      gamesResult: '',
    };
  }

  finalResultHealth = () => {
    var db = this.state;
    if (db.health >= 30) {
      var good = 'Used Efficiently';
      this.setState({
        healthResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        healthResult: bad,
      });
    }
  };

  finalResultAcademics = () => {
    var db = this.state;
    if (db.academics < 90) {
      var bad = 'Inefficient Utilization';
      this.setState({
        academicResult: bad,
      });
    } else {
      var good = 'Used Efficiently';
      this.setState({
        academicResult: good,
      });
    }
  };

  finalResultEntertainment = () => {
    var db = this.state;
    if (db.entertainment > 30) {
      var bad = 'Inefficient Utilization';
      this.setState({
        entertainmentResult: bad,
      });
    } else {
      var good = 'Used Efficiently';
      this.setState({
        entertainmentResult: good,
      });
    }
  };

  finalResultFriendship = () => {
    var db = this.state;
    if (db.friendship < 30) {
      var good = 'Used Efficiently';
      this.setState({
        friendshipResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        friendshipResult: bad,
      });
    }
  };

  finalResultLifegoal = () => {
    var db = this.state;
    if (db.lifegoal >= 60) {
      var good = 'Used Efficiently';
      this.setState({
        lifegoalResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        lifegoalResult: bad,
      });
    }
  };

  finalResultSchoolwork = () => {
    var db = this.state;
    if (db.schoolwork >= 480) {
      var good = 'Used Efficiently';
      this.setState({
        schoolworkResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        schoolworkResult: bad,
      });
    }
  };

  finalResultSleeping = () => {
    var db = this.state;
    if (db.sleeping <= 480) {
      var good = 'Used Efficiently';
      this.setState({
        sleepingResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        sleepingResult: bad,
      });
    }
  };

  finalResultHobbies = () => {
    var db = this.state;
    if (db.hobbies < 30) {
      var good = 'Used Efficiently';
      this.setState({
        hobbiesResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        hobbiesResult: bad,
      });
    }
  };

  finalResultGames = () => {
    var db = this.state;
    if (db.games < 30) {
      var good = 'Used Efficiently';
      this.setState({
        gamesResult: good,
      });
    } else {
      var bad = 'Inefficient Utilization';
      this.setState({
        gamesResult: bad,
      });
    }
  };

  showModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={this.state.isVisible}
      style={styles.modalResult}>
      <View>
        <ScrollView>
          <Text style={styles.modalTitle}> Today's Report</Text>
          <Text style={styles.modalText}>
            Health:
            <Text style={styles.modalreplyText}>{this.state.healthResult}</Text>
          </Text>
          <Text style={styles.modalText}>
            Academics:
            <Text style={styles.modalreplyText}>
              {this.state.academicResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Entertainment:
            <Text style={styles.modalreplyText}>
              {this.state.entertainmentResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Friends:
            <Text style={styles.modalreplyText}>
              {this.state.friendshipResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Life Goal:
            <Text style={styles.modalreplyText}>
              {this.state.lifegoalResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Home Work:
            <Text style={styles.modalreplyText}>
              {this.state.schoolworkResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Sleeping:
            <Text style={styles.modalreplyText}>
              {this.state.sleepingResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Random Hobbies:
            <Text style={styles.modalreplyText}>
              {this.state.hobbiesResult}
            </Text>
          </Text>
          <Text style={styles.modalText}>
            Games:
            <Text style={styles.modalreplyText}>{this.state.gamesResult}</Text>
          </Text>
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
        </ScrollView>
      </View>
    </Modal>
  );

  render() {
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="Today's Activity" />
        <ScrollView>
       
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop : 20 }}>
            {this.showModal()}
          </View>
          <KeyboardAvoidingView>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Health and Fitness</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 17 }]}
                placeholder={'Spent time in min'}
                placeholderTextColor="#000"
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    health: text,
                  });
                  {
                    this.finalResultHealth();
                  }
                }}
                value={this.state.health}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Academics</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 62 }]}
                placeholder={'Spent time in min'}
                placeholderTextColor="#000"
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    academics: text,
                  });
                  {
                    this.finalResultAcademics();
                  }
                }}
                value={this.state.academics}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Entertainment</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 38 }]}
                placeholder={'Spent time in min'}
                placeholderTextColor="#000"
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    entertainment: text,
                  });
                  {
                    this.finalResultEntertainment();
                  }
                }}
                value={this.state.entertainment}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Friendship</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 65 }]}
                placeholder={'Spent time in min'}
                keyboardType={'numeric'}
                placeholderTextColor="#000"
                onChangeText={(text) => {
                  this.setState({
                    friendship: text,
                  });
                  {
                    this.finalResultFriendship();
                  }
                }}
                value={this.state.friendship}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Life Goal</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 85 }]}
                placeholder={'Spent time in min'}
                keyboardType={'numeric'}
                placeholderTextColor="#000"
                onChangeText={(text) => {
                  this.setState({
                    lifegoal: text,
                  });
                  {
                    this.finalResultLifegoal();
                  }
                }}
                value={this.state.lifegoal}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>School </Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 90 }]}
                placeholder={'Spent time in min'}
                keyboardType={'numeric'}
                placeholderTextColor="#000"
                onChangeText={(text) => {
                  this.setState({
                    schoolwork: text,
                  });
                  {
                    this.finalResultSchoolwork();
                  }
                }}
                value={this.state.schoolwork}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Sleeping</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 82 }]}
                placeholder={'Spent time in min'}
                placeholderTextColor="#000"
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    sleeping: text,
                  });
                  {
                    this.finalResultSleeping();
                  }
                }}
                value={this.state.sleeping}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Hobbies</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 85 }]}
                placeholder={'Spent time in min'}
                keyboardType={'numeric'}
                placeholderTextColor="#000"
                onChangeText={(text) => {
                  this.setState({
                    hobbies: text,
                  });
                  {
                    this.finalResultHobbies();
                  }
                }}
                value={this.state.hobbies}
              />
            </View>
            <View style={styles.activityContainer}>
              <Text style={styles.requiredText}>Games</Text>
              <TextInput
                style={[styles.textinput, { marginLeft: 90 }]}
                placeholder={'Spent time in min'}
                placeholderTextColor="#000"
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    games: text,
                  });
                  {
                    this.finalResultGames();
                  }
                }}
                value={this.state.games}
              />
            </View>
            <TouchableOpacity
              style={styles.generateButton}
              onPress={() => {
                this.setState({ isVisible: true });
              }}>
              <Text style={styles.generateText}>Generate Report</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
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
  activityContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  requiredText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#8abad3ff',
    fontFamily: 'AvenirNext-Heavy',
    marginTop: 7,
  },
  textinput: {
    width: 150,
    marginTop: 20,
    borderRadius: 15,
    textAlign: 'center',
    borderColor: '#8abad3ff',
    borderWidth: 2,
    fontFamily: 'AvenirNext-Heavy',
    height: 30,
    marginRight: 5,
  },
  generateButton: {
    marginTop: 15,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1.5,
    borderRadius: 11,
    backgroundColor: '#edc2d8ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.34,
    shadowRadius: 7.32,
    elevation: 14,
    width: 150,
    height: 50,
    marginBottom: 20,
  },
  generateText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  modalResult: {
    flex: 1,
    backgroundColor: '#f7ced7ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    width: '85%',
  },
  modalText: {
    height: RFValue(50),
    marginTop: 10,
    margin: RFValue(5),
    color: '#000',
    fontFamily: 'Cochin',
    fontSize: 20,
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderColor: '#000',
    borderRadius: 11,
  },
  modalreplyText: {
    color: '#FF4500',
    fontSize: 17,
    padding: 1,
    fontFamily: 'Cochin',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  modalTitle: {
    fontSize: 23,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#8abad3ff',
    marginTop: 5,
    marginBottom: 5,
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
});
