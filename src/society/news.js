import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import { Actions } from 'react-native-router-flux';
let styles=require('../../stylesheet/style');
export default class Test extends React.Component{
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
        const { state } = this.props.navigation
        var joined_raw = state.params.joined
        var joined = joined_raw.map(function(item) {
            return (<ImageBackground source={require('../../image/featured-event02.jpg')} style={styles.eachfeatureeventarea}>
                    <Text style={styles.eachfeatureeventtext}>{item.Product}</Text>
                    <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                        <Text style={styles.eachfeatureeventtext2}>{item.Host}</Text>
                        <Text style={styles.eachfeatureeventtext2}>{item.Period}</Text>
                    </View>
                </ImageBackground>)
        });
        var record_raw = state.params.record
        var record = record_raw.map(function(item) {
            return (<View style={{marginVertical:5}}>
                <ImageBackground source={require('../../image/event01.jpg')} style={styles.eachrecenteventarea}>
                    <Text style={styles.eachrecenteventtext}>{item.Product}</Text>
                    <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                        <Text style={styles.eachrecenteventtext2}>{item.Host}</Text>
                        <Text style={styles.eachrecenteventtext2}>{item.Period}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.eachrecenteventdetail}>
                    <View>
                        <Text>Venue: Sports Center</Text>
                        <Text>Time: 1:00PM - 3:00PM</Text>
                    </View>
                    <Image style={styles.addcartimg} source={require('../../image/add-cart.png')}/>
                </View>
            </View>)
        });
        return(
            <Container>
                <CustomHeader title="News" {...this.props}/>
                <Content style={styles.content}>
                    <View style={styles.featureeventarea}>
                        <Text style={styles.featureeventareatext}>Featured Events</Text>
                        <ScrollView horizontal={true} style={styles.featureeventareaview}>
                            {joined}
                        </ScrollView>
                    </View>

                    <View style={styles.recenteventarea}>
                        <Text style={styles.recenteventareatext}>Recent Events</Text>
                        {record}
                    </View>
                </Content>
                <Footer >
                    <FooterTab style={styles.footer}>
                        <Image style={styles.footerimg} source={require('../../image/home-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../../image/search-icon.png')}/>
                        <Image style={styles.footerimg2} source={require('../../image/qrcode-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../../image/cart-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../../image/user-icon.png')}/>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}