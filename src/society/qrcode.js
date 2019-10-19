import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
let styles=require('../../stylesheet/style');
export default class QRcode extends React.Component{
    static navigationOptions = {
        header:null
    }
    render=()=>{
        return(
            <Container>
                <CustomHeader title="Payment" {...this.props}/>
                <View style={styles.qrcodearea}>
                    <Image source={require('../../image/qrcode-scan.png')} style={styles.qrcodeimg}/>
                    <Text></Text>
                </View>
            </Container>
        )
    }
}
