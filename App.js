import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Discovery from './src/discovery'
import ShoppingCart from './src/shoppingcart'
const Allpages = createStackNavigator({
  Discovery:Discovery,
  ShoppingCart:ShoppingCart
},
{
  initialRouteName:"Discovery",
});

export default createAppContainer(Allpages);
