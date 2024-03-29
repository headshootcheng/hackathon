import React,{Component} from "react";
import { View, Text } from "react-native";
import { createAppContainer  } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/society/login'
import Discovery from './src/society/discovery'
import ShoppingCart from './src/society/shoppingcart'
import News from './src/society/news'
import Personalinfo from './src/society/personalinfo'
import SocietyDetail from './src/society/societydetail'
import PaymentCalendar from './src/society/paymentcalendar'
import QRCode from './src/society/qrcode'

import Timetable from'./src/society/timetableplanner'
import Accomodation from './src/society/accomodation'
import Booking from './src/society/booking'

import Member from './src/society/membership'
import Payment from './src/society/Payment'

import {joined,record} from './data/data'


const Allpages = createStackNavigator({
  Discovery:Discovery,
  ShoppingCart:ShoppingCart,
  News:News,
  Personalinfo:Personalinfo,
  SocietyDetail:SocietyDetail,
  PaymentCalendar:PaymentCalendar,
  Login:Login,
  QRCode:QRCode,
  Member:Member,
  Timetable:Timetable,
  Accomodation:Accomodation,
  Booking:Booking,
  Payment:Payment
},
{
  initialRouteName:"Login",
},

);

export default createAppContainer(Allpages);
