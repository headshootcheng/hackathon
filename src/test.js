import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import {Container,Header,Title,Content} from 'native-base';
export default class Test extends React.Component{
    static navigationOptions = {
        header:null
    }
    render=()=>{
        return(
            <Container>
                <Text>testing123</Text>
            </Container>
        )
    }
}