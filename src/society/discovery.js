import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
import { Actions } from 'react-native-router-flux';
let styles=require('../../stylesheet/style');
import {joined,record} from '../../data/data'
export default class Discovery extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:1
        };
      }
    render=()=>{
        return(
            <Container>
                <CustomHeader title="Discovery" {...this.props}/>
                <View style={styles.selectlistbar}>                       
                    <Text style={styles.searchbartext}>Search for name, event, society, canteen...</Text>
                    <TouchableOpacity>
                        <Image style={styles.checkboximg} source={require('../../image/search-icon.png')}/>
                    </TouchableOpacity>
                </View>
                <Content style={[styles.content,{paddingVertical:10}]}>
                    <View>
                        <TouchableOpacity style={styles.societyarea} onPress={()=>{ this.props.navigation.navigate('SocietyDetail',{
                            record: record,
                            joined: joined,
                        });}}>
                                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                                <View style={styles.shoppingareadetail}>
                                    
                                        <Text style={styles.shoppingareadetailtext2}>
                                            Student Union
                                        </Text>
                                    <Text style={styles.shoppingareadetailtext}>
                                        Description
                                    </Text>
                                </View>
                            
                        </TouchableOpacity>
                        <ImageBackground source={require('../../image/event01.jpg')} style={styles.eventarea}>
                            <Text style={styles.eventareatitle}>Event Name</Text>
                            <View style={{marginTop:20,alignItems:"center"}}>
                                <Text style={styles.eventareatext}>Society Name</Text>
                                <Text style={styles.eventareatext}>12-12-2019</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../image/event02.jpg')} style={styles.eventarea}>
                            <Text style={styles.eventareatitle}>Event Name</Text>
                            <View style={{marginTop:20,alignItems:"center"}}>
                                <Text style={styles.eventareatext}>Society Name</Text>
                                <Text style={styles.eventareatext}>12-12-2019</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    
                    
                </Content>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}