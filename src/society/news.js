import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground,NativeEventEmitter } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
import { Actions } from 'react-native-router-flux';
import {RNTapNGoSDK, TapNGoSDK} from './RNTapNGoSDKClass';
import {API} from '../../data/data'
let styles=require('../../stylesheet/style');
var subscription;
export default class News extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            merTradeNo:"TEST20191019",
            price:null,
            currency:null,
            remark:"",
            notifyUrl:"",
        };
      }
      singlepayment(item){
          console.log(item)
          let merTradeNo = "TEST20191019"
          let price = parseFloat(item.price)
          let currency = "HKD"
          let remark = item.Host + item.Product
          let notifyUrl = ""
        RNTapNGoSDK.doSinglePayment(API.Sandbox,
            API.APPID,
            API.WEB_APP.APIKEY,
            API.WEB_APP.PublicKey,
            API.APPID,
            merTradeNo,
            price,
            currency,
            remark,
            notifyUrl
           );
      }
      async getMoviesFromApi() {
        try {
        //   let response = await fetch(
        //     'https://datastudio-api.hkstp.org:443/CPhackathon2019/v1.0.0/datastore_search?resource_id=dabe12a3-875d-47d2-b11b-294c1311bffc'
        //     ,{
        //         method: 'GET',
        //         headers: {
        //           Accept: 'application/json',
        //           'Authorization': 'Bearer 72eebdaeb9b302ac55dd9a36d73b6ba0',
        //         }})
        let response = await fetch(
            'https://facebook.github.io/react-native/movies.json'
            )
          let responseJson = await response.json();
          return responseJson;
        } catch (error) {
          console.error(error);
        }
      }
      getdata(){
        this.getMoviesFromApi()
        .then(
            (response) => console.log(response)
        )
      }
      componentDidMount(){
       const paymentResultEmitter = new NativeEventEmitter(TapNGoSDK);
       subscription = paymentResultEmitter.addListener("TGSDKPayResult", (result) => {
       // Handle the result
       console.log(result)
       });
      } 
      componentWillUnmount(){
            subscription.remove();
        }
      
    render=()=>{
        const { state } = this.props.navigation
        var joined_raw = state.params.joined
        var react = this
        var joined = joined_raw.map(function(item) {
            // return (<TouchableOpacity  onPress={()=>{react.singlepayment(item)}} >
            return (<TouchableOpacity  onPress={()=>{react.getdata()}} >
           <ImageBackground source={require('../../image/featured-event02.jpg')} style={styles.eachfeatureeventarea}>
                    <Text style={styles.eachfeatureeventtext}>{item.Product}</Text>
                    <View style={{marginTop:20,alignItems:"center",justifyContent:"center"}}>
                        <Text style={styles.eachfeatureeventtext2}>{item.Host}</Text>
                        <Text style={styles.eachfeatureeventtext2}>{item.Period}</Text>
                    </View>
                </ImageBackground>
                </TouchableOpacity>)
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
                <CustomFooter {...this.props}/>
            </Container>
        )
    }
}