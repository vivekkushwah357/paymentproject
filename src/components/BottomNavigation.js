import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Notification from '../screens/Notification';
import Profile from '../screens/Profile';
import HomeUI from '../screens/HomeUI';
import Homescreen from '../screens/Homescreen';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Payment"
        component={Homescreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Payment',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="folderopen" size={30} color="#900" />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="bells" size={30} color="#900" />
          ),
        }}
      />

      <Tab.Screen
        name="Prrofile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={30} color="#900" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({});
