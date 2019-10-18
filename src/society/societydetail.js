import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
let styles=require('../../stylesheet/style');

export default class SocietyDetail extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:1,
            mode:1
        };

      }
    render=()=>{
        const {mode} =this.state;
        return(
            <Container >
                <CustomHeader title="Society Detail" {...this.props}/>
                <Content >
                <View style={styles.societydetailred}>
                </View>
                <Image source={require('../../image/society-profile.png')} style={styles.personaliconimg}/>
                <View style={styles.societydetailwhite}>
                    <Text style={styles.societydetailtitle}>Students Union</Text>
                    <Text style={styles.societydetailtext}>A sncil, student government, free student union, ents' association, guild of students, or government of student body is a student organization present in many colleges, universities, and high schools.</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20}}>
                    <TouchableHighlight style={mode==1?styles.societydetailtabactive:styles.societydetailtab} onPress={()=>this.setState({mode:1})}>
                        <Text style={mode==1?styles.societydetailtabtextactive:styles.societydetailtabtext}>Event</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={mode==2?styles.societydetailtabactive:styles.societydetailtab} onPress={()=>this.setState({mode:2})}>
                        <Text style={mode==2?styles.societydetailtabtextactive:styles.societydetailtabtext}>Post</Text>
                    </TouchableHighlight>
                </View>
                {mode==1?
                    
                <View >
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
                </View>                   
                :
                <View>
                    <ImageBackground style={styles.eachboxarea2} source={require('../../image/post01.jpg')}> 
                        <Text style={styles.boxtitle}>Next week is our Halloween party!</Text>
                        <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                            <Text style={styles.boxtext}>Remeber to wear costume</Text>
                            <Text style={styles.boxtext}>Date: 30/12/2019</Text>
                            <Text style={styles.boxtext}>Time: 8:30PM</Text>
                            <Text style={styles.boxtext}>Venue: LSK Room 109</Text>
                        </View>                   
                    </ImageBackground>
                    <ImageBackground style={styles.eachboxarea2} source={require('../../image/post02.jpg')}> 
                        <Text style={styles.boxtitle}>Next week is our Orientation Night!</Text>
                        <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                            <Text style={styles.boxtext}>Student Union</Text>
                            <Text style={styles.boxtext}>Date: 30/12/2019</Text>
                            <Text style={styles.boxtext}>Time: 8:30PM</Text>
                            <Text style={styles.boxtext}>Venue: LSK Room 109</Text>
                        </View>                   
                    </ImageBackground>
                    <ImageBackground style={styles.eachboxarea2} source={require('../../image/post01.jpg')}> 
                        <Text style={styles.boxtitle}>Next week is our Cultural Exchange</Text>
                        <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                        <Text style={styles.boxtext}>Student Union</Text>
                            <Text style={styles.boxtext}>Date: 30/12/2019</Text>
                            <Text style={styles.boxtext}>Time: 8:30PM</Text>
                            <Text style={styles.boxtext}>Venue: LSK Room 109</Text>
                        </View>                   
                    </ImageBackground>
                </View>   
                }
                </Content>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}