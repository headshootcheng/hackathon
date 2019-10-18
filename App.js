import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Discovery from './src/society/discovery'
import ShoppingCart from './src/society/shoppingcart'
import News from './src/society/news'
const joined=[
  {
    "_id": 6,
    "Host": "豁 - 國際經濟學商學學生會理大分會 AIESEC",
    "Category": "Event",
    "Nature": "Public",
    "Registration": "",
    "Product": "AIESEC Members Recruitment",
    "Period": "28/08/2018-09/09/2018",
    "Price": "",
    "Quota (if applicable)": null
  },
  {
    "_id": 7,
    "Host": "文 - 基督徒詩班 Christian Choir",
    "Category": "Event",
    "Nature": "Public",
    "Registration": "",
    "Product": "迎新資訊日",
    "Period": "31/08/2018",
    "Price": "",
    "Quota (if applicable)": null
  },
]
const record= [
  {
    "_id": 2,
    "Host": "藝 - 戲劇社 Drama",
    "Category": "Event",
    "Nature": "Internal",
    "Registration": "",
    "Product": "Summer Night 2018 Evaluation 仲夏之夜二零一八檢討會",
    "Period": "15/08/2018",
    "Price": "",
    "Quota (if applicable)": null
  },
  {
    "_id": 3,
    "Host": "藝 - 戲劇社 Drama",
    "Category": "Event",
    "Nature": "Internal",
    "Registration": "",
    "Product": "Theatre Night 2018 Rehearsal",
    "Period": "04/09/2018, 23/09/2018",
    "Price": "",
    "Quota (if applicable)": null
  },
  {
    "_id": 4,
    "Host": "藝 - 戲劇社 Drama",
    "Category": "Event",
    "Nature": "Internal",
    "Registration": "",
    "Product": "Theatre Night 2018 Evaluation",
    "Period": "28/09/2018",
    "Price": "",
    "Quota (if applicable)": null
  },
  {
    "_id": 5,
    "Host": "藝 - 合唱團 Choir",
    "Category": "Recurring Activity",
    "Nature": "Internal",
    "Registration": "",
    "Product": "General Practice",
    "Period": "26/08/2018-30/06/2019",
    "Price": "",
    "Quota (if applicable)": null
  },
]

const Allpages = createStackNavigator({
  Discovery:Discovery,
  ShoppingCart:ShoppingCart,
  News:News
},
{
  initialRouteName:"News",
  initialRouteParams:{
    record: record,
    joined: joined,
  }
});

export default createAppContainer(Allpages);
