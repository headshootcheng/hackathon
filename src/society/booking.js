import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';

let styles=require('../../stylesheet/style');

export default class Booking extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:3,
        };
      
      }
   
    render=()=>{
        const {selectedStartDate} =this.state;
        //const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <Container >
                <CustomHeader title="Booking Venue" {...this.props}/>
                <Content>
                    <View style={styles.bookingbox}>
                        <View style={styles.bookingboxtop}>
                            <Text style={styles.bookingboxtoptext}>Date: dd/mm/yy</Text>
                        </View>
                        <View style={styles.bookingboxbottom}>
                            <View style={styles.bookingboxbottomrow}>
                                <View>
                                    <Text style={styles.booktext1}>XX Gymnasium</Text>
                                    <Text style={styles.booktext1}>Tennis court #1</Text>
                                </View>
                                <Text style={styles.booktext1}>14:30</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bookingbox}>
                        <View style={styles.bookingboxtop}>
                            <Text style={styles.bookingboxtoptext}>Date: dd/mm/yy</Text>
                        </View>
                        <View style={styles.bookingboxbottom}>
                            <View style={styles.bookingboxbottomrow}>
                                <View>
                                    <Text style={styles.booktext1}>YY Gymnasium</Text>
                                    <Text style={styles.booktext1}>Tennis court #2</Text>
                                </View>
                                <Text style={styles.booktext1}>09:30</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <TouchableOpacity>
                    <Text>Add Booking</Text>
                </TouchableOpacity>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}