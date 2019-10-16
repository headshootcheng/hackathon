import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Test from './src/test'
const Allpages = createStackNavigator({
  Test:Test
},
{
  initialRouteName:"Test",
});

export default createAppContainer(Allpages);
