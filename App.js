import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Discovery from './src/society/discovery'
import ShoppingCart from './src/society/shoppingcart'
import News from './src/society/news'
import Personalinfo from './src/society/personalinfo'
const Allpages = createStackNavigator({
  Discovery:Discovery,
  ShoppingCart:ShoppingCart,
  News:News,
  Personalinfo:Personalinfo
},
{
  initialRouteName:"Personalinfo",
});

export default createAppContainer(Allpages);
