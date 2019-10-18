import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
let styles=require('../../stylesheet/style');
export default class Personalinfo extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:3
        };
      }
    render=()=>{
        return(
            <Container >
                <CustomHeader title="Personal Info" {...this.props}/>
                    <View style={styles.personaldetailarea}>
                        <Image source={require('../../image/society-profile.png')} style={styles.personalicon}/>
                        <Text style={styles.personalname}>Chan Tai Ming</Text>
                        <Text style={styles.sid}>1155095123</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/member.png')}/>
                            <Text style={styles.optiontext}>Society Membership</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/pay-record.png')}/>
                            <Text style={styles.optiontext}>Payment Record</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/booking.png')}/>
                            <Text style={styles.optiontext}>Manage Venue Booking</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/pay-calendar.png')}/>
                            <Text style={styles.optiontext}>Payment Calendar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/timetable.png')}/>
                            <Text style={styles.optiontext}>Timetable Planner</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/college-icon.png')}/>
                            <Text style={styles.optiontext}>Administration Fee</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.personaloptionrow}>
                            <Image style={styles.optionimg} source={require('../../image/hostel-icon.png')}/>
                            <Text style={styles.optiontext}>Accomodation Expense</Text>
                        </TouchableOpacity>
                    </View>
                    <Content/>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}