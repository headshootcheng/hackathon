import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';

let styles=require('../../stylesheet/style');

export default class Accomodation extends React.Component{
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
                <CustomHeader title="Accomodation Expense" {...this.props}/>
                <Content style={styles.content}>
                    <View style={styles.eachexpensebox}>
                        <Image source={require('../../image/laundry-icon.png')} style={styles.expenseimg}/>
                        <Text style={styles.expensetext}>Laundry Service</Text>
                    </View>
                    <View style={styles.eachexpensebox}>
                    <Image source={require('../../image/air-con-icon.png')} style={styles.expenseimg}/>
                        <Text style={styles.expensetext}>Air-Conditioning</Text>
                    </View>
                </Content>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}