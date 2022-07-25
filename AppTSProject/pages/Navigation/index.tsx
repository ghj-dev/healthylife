import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//导航容器
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//底部导航
import BottomNavigation from './BottomNavigation';
//首页搜索页面
import Serch from './Serch';
const Navigation = () => {
  //创建外层导航
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Serch"
          component={Serch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
