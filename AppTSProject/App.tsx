/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './pages/Navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  return <Navigation></Navigation>;
};

const styles = StyleSheet.create({});

export default App;
