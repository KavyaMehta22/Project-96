import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import TodayActivity from '../screens/TodayActivity';
import NotificationScreen from '../screens/NotificationsScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import SettingsScreen from '../screens/SettingScreen';

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: TodayActivity,
      navigationOptions: {
        headerShown: false,
      },
    },
    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: 'Home',
  }
);
