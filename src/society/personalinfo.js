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
            checked:false
        };
      }
    render=()=>{
        return(
            <Container >
                <CustomHeader title="Personal Info" {...this.props}/>
                <View style={styles.personalinfored}>
                    
                </View>
                <Image source={require('../../image/society-profile.png')} style={styles.personaliconimg}/>
                <View style={styles.personalinfowhite}>
                    <Text style={styles.personinfotitle}>Students Union</Text>
                    <Text style={styles.personinfotext}>A sncil, student government, free student union, ents' association, guild of students, or government of student body is a student organization present in many colleges, universities, and high schools.</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20}}>
                    <TouchableHighlight style={styles.personinfotabactive}>
                        <Text style={styles.personinfotabtextactive}>Event</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.personinfotab}>
                        <Text style={styles.personinfotabtext}>Post</Text>
                    </TouchableHighlight>
                </View>
                <Content style={styles.content}>
                    <ImageBackground style={styles.eachboxarea} source={require('../../image/event01.jpg')}> 
                        <Text style={styles.boxtitle}>Orientation Night</Text>
                        <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                            <Text style={styles.boxtext}>Student Union</Text>
                            <Text style={styles.boxtext}>12/02/2019</Text>
                        </View>                   
                    </ImageBackground>
                    <ImageBackground style={styles.eachboxarea} source={require('../../image/event02.jpg')}> 
                        <Text style={styles.boxtitle}>Halloween Party</Text>
                        <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                            <Text style={styles.boxtext}>Student Union</Text>
                            <Text style={styles.boxtext}>12/02/2019</Text>
                        </View>                   
                    </ImageBackground>
                    <ImageBackground style={styles.eachboxarea} source={require('../../image/event03.jpg')}> 
                        <Text style={styles.boxtitle}>Cultural Exchange</Text>
                        <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                            <Text style={styles.boxtext}>Student Union</Text>
                            <Text style={styles.boxtext}>12/02/2019</Text>
                        </View>                   
                    </ImageBackground>
                </Content>                   
                <CustomFooter {...this.props}/>
            </Container>
        )
    }
}