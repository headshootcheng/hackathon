import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground,NativeEventEmitter } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
import { Actions } from 'react-native-router-flux';
let styles=require('../../stylesheet/style');
export default class Payment extends React.Component{
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
            <Container>
                <CustomHeader title="Payment Record" {...this.props}/>
                <Content >
                <View style={styles.bookingbox}>
                        <View style={styles.bookingboxtop}>
                            <Text style={styles.bookingboxtoptext}>Purchase Date: dd/mm/yy</Text>
                        </View>
                        <View style={styles.bookingboxbottom}>
                            <View style={styles.bookingboxbottomrow}>
                                <View>
                                    <Text style={styles.booktext1}>Event Name</Text>
                                    <Text style={styles.booktext1}>Event Organiser</Text>
                                </View>
                                <Text style={styles.booktext1}>-$21</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.bookingbox}>
                        <View style={styles.bookingboxtop}>
                            <Text style={styles.bookingboxtoptext}>Purchase Date: dd/mm/yy</Text>
                        </View>
                        <View style={styles.bookingboxbottom}>
                            <View style={styles.bookingboxbottomrow}>
                                <View>
                                    <Text style={styles.booktext1}>Event Name</Text>
                                    <Text style={styles.booktext1}>Event Organiser</Text>
                                </View>
                                <Text style={styles.booktext1}>-$22</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}
