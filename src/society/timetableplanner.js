import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';

let styles=require('../../stylesheet/style');

export default class TimeTable extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:3,
            selectedStartDate: null
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    onDateChange(date) {
        this.setState({
        selectedStartDate: date,
        });
    }
    render=()=>{
        const {selectedStartDate} =this.state;
        //const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <Container >
                <CustomHeader title="Timetable Planner" {...this.props}/>
                <Content >
                    <Image source={require('../../image/timetable-planner.jpg')} style={styles.timetableimg}/>
                </Content>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}