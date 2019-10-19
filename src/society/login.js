import React,{Component} from "react";
import { View, Text, TextInput,ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground,NativeEventEmitter } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { Dropdown } from 'react-native-material-dropdown';
let styles=require('../../stylesheet/style');
import {joined,record} from '../../data/data'
export default class Login extends React.Component{
    static navigationOptions = {
        header:null
    }
    render=()=>{
        let data = [{
            value: '1',
            label:'University 1'
          }, {
            value: '2',
            label:'University 2'
          }, {
            value: '3',
            label:'University 3'
          }];
        return(
            <Container style={styles.loginarea}>
                <Image source={require('../../image/white-tap-and-go.png')} style={styles.loginimg}/>
                <TextInput style={styles.logininput} placeholder="Username"/>
                <TextInput style={styles.logininput} placeholder="Password"/>
                <TouchableOpacity style={styles.loginbutton} onPress={()=>{ this.props.navigation.navigate('News',{
                record: record,
                joined: joined,
           });}}>
                    <Text style={styles.loginbuttontext}>Login</Text>
                </TouchableOpacity>
                {/*<Dropdown
                    label='Selected University'
                    data={data}
                />*/}
            </Container>
        )
        
    }
}