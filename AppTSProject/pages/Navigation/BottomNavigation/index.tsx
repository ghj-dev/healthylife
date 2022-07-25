import React, {type PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Home';
import Mine from '../Mine';
import HealthEncyclopedia from '../HealthEncyclopedia';
const BottomNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#00c792"
      inactiveColor="#ccc"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="首页"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" color={color} size={18} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="健康百科"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="document-text-outline" color={color} size={18} />
          ),
        }}
        component={HealthEncyclopedia}
      />
      <Tab.Screen
        name="我的"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={18} />
          ),
        }}
        component={Mine}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavigation;
