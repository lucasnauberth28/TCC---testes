import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './pages/login'
import home from './pages/home'
import faq from './pages/FAQ'

const AuthStack = createStackNavigator();
export default function Stack() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode='none'>
        <AuthStack.Screen name = 'Login' component={login}/>
        <AuthStack.Screen name = 'home' component={home}/>
        <AuthStack.Screen name = 'faq' component={faq}/>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}