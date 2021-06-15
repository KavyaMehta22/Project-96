import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import NotificationScreen from '../screens/NotificationsScreen';
import SettingScreen from '../screens/SettingScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import Suggestion from '../screens/Suggestions';
import { Icon } from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    Settings: {
      screen: SettingScreen,
    },
    Suggestion: {
      screen: Suggestion,
    },
    Notification: {
      screen: NotificationScreen,
    },

    Feedback: {
      screen: FeedbackScreen,
    },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
