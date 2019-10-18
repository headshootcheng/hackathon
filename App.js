import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Discovery from './src/society/discovery'
import ShoppingCart from './src/society/shoppingcart'
import News from './src/society/news'
const Allpages = createStackNavigator({
  Discovery:Discovery,
  ShoppingCart:ShoppingCart,
  News:News
},
{
  initialRouteName:"News",
});

export default createAppContainer(Allpages);
