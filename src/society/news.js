import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
import { Actions } from 'react-native-router-flux';
let styles=require('../../stylesheet/style');
export default class News extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            checked:false
        };
      }
      componentDidMount(){

      }
    render=()=>{
        return(
            <Container>
                <CustomHeader title="News" {...this.props}/>
                <Content style={styles.content}>
                    <View style={styles.featureeventarea}>
                        <Text style={styles.featureeventareatext}>Featured Events</Text>
                        <ScrollView horizontal={true} style={styles.featureeventareaview}>
                            <ImageBackground source={require('../../image/featured-event01.jpg')} style={styles.eachfeatureeventarea}>
                                <Text style={styles.eachfeatureeventtext}>Event Name</Text>
                                <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={styles.eachfeatureeventtext2}>Society Name</Text>
                                    <Text style={styles.eachfeatureeventtext2}>12-12-2019</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground source={require('../../image/featured-event02.jpg')} style={styles.eachfeatureeventarea}>
                                <Text style={styles.eachfeatureeventtext}>Event Name</Text>
                                <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={styles.eachfeatureeventtext2}>Society Name</Text>
                                    <Text style={styles.eachfeatureeventtext2}>12-12-2019</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground source={require('../../image/featured-event01.jpg')} style={styles.eachfeatureeventarea}>
                                <Text style={styles.eachfeatureeventtext}>Event Name</Text>
                                <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={styles.eachfeatureeventtext2}>Society Name</Text>
                                    <Text style={styles.eachfeatureeventtext2}>12-12-2019</Text>
                                </View>
                            </ImageBackground>
                            <ImageBackground source={require('../../image/featured-event02.jpg')} style={styles.eachfeatureeventarea}>
                                <Text style={styles.eachfeatureeventtext}>Event Name</Text>
                                <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={styles.eachfeatureeventtext2}>Society Name</Text>
                                    <Text style={styles.eachfeatureeventtext2}>12-12-2019</Text>
                                </View>
                            </ImageBackground>
                        </ScrollView>
                    </View>

                    <View style={styles.recenteventarea}>
                        <Text style={styles.recenteventareatext}>Recent Events</Text>
                        <View style={{marginVertical:5}}>
                            <ImageBackground source={require('../../image/event01.jpg')} style={styles.eachrecenteventarea}>
                                <Text style={styles.eachrecenteventtext}>Event Name</Text>
                                <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={styles.eachrecenteventtext2}>Society Name</Text>
                                    <Text style={styles.eachrecenteventtext2}>12-12-2019</Text>
                                </View>
                            </ImageBackground>
                            <View style={styles.eachrecenteventdetail}>
                                <View>
                                    <Text>Venue: Sports Center</Text>
                                    <Text>Time: 1:00PM - 3:00PM</Text>
                                </View>
                                <Image style={styles.addcartimg} source={require('../../image/add-cart.png')}/>
                            </View>
                        </View>

                        <View style={{marginVertical:5}}>
                            <ImageBackground source={require('../../image/event02.jpg')} style={styles.eachrecenteventarea}>
                                <Text style={styles.eachrecenteventtext}>Event Name</Text>
                                <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                                    <Text style={styles.eachrecenteventtext2}>Society Name</Text>
                                    <Text style={styles.eachrecenteventtext2}>12-12-2019</Text>
                                </View>
                            </ImageBackground>
                            <View style={styles.eachrecenteventdetail}>
                                <View>
                                    <Text>Venue: Sports Center</Text>
                                    <Text>Time: 1:00PM - 3:00PM</Text>
                                </View>
                                <Image style={styles.addcartimg} source={require('../../image/add-cart.png')}/>
                            </View>
                        </View>
                    </View>
                </Content>
                <CustomFooter/>
            </Container>
        )
    }
}