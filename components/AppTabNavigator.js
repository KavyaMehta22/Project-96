import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator';

export const AppTabNavigator = createBottomTabNavigator({
  TodayActivity: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/act.png')}
          style={{ width: 30, height: 30 }}
        />
      ),
      tabBarLabel: "Today's Activities",
    },
  },
});
