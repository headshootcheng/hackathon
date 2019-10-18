import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
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
    render=()=>{
        return(
            <Container>
                <CustomHeader title="Shopping Cart" {...this.props}/>
                <View style={styles.selectlistbar}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <TouchableOpacity>
                            <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.searchbartext}>0 Selected</Text>
                    </View>     
                </View>
                <Content style={styles.content}>
                    <View style={styles.shoppingarea}>
                        <TouchableOpacity>
                            <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                        <View style={styles.shoppingareadetail}>
                            
                            <View style={styles.shoppingareadetailrow}>
                                <Text style={styles.shoppingareadetailtext2}>
                                    EventName
                                </Text>

                                <Text style={[styles.shoppingareadetailtext3,{marginRight:0}]}>
                                    $100
                                </Text>
                            </View>
                             
                            <Text style={styles.shoppingareadetailtext}>
                                Date: 1/1/2019
                            </Text>
                            <Text style={styles.shoppingareadetailtext}>
                                Deadline: 1/1/2019
                            </Text>
                        </View>
                    </View>
                    <View style={styles.shoppingarea}>
                        <TouchableOpacity>
                            <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                        <View style={styles.shoppingareadetail}>
                            
                            <View style={styles.shoppingareadetailrow}>
                                <Text style={styles.shoppingareadetailtext2}>
                                    EventName
                                </Text>

                                <Text style={[styles.shoppingareadetailtext3,{marginRight:0}]}>
                                    $100
                                </Text>
                            </View>
                             
                            <Text style={styles.shoppingareadetailtext}>
                                Date: 1/1/2019
                            </Text>
                            <Text style={styles.shoppingareadetailtext}>
                                Deadline: 1/1/2019
                            </Text>
                        </View>
                    </View>
                    <View style={styles.shoppingarea}>
                        <TouchableOpacity>
                            <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                        <View style={styles.shoppingareadetail}>
                            
                            <View style={styles.shoppingareadetailrow}>
                                <Text style={styles.shoppingareadetailtext2}>
                                    EventName
                                </Text>

                                <Text style={[styles.shoppingareadetailtext3,{marginRight:0}]}>
                                    $100
                                </Text>
                            </View>
                             
                            <Text style={styles.shoppingareadetailtext}>
                                Date: 1/1/2019
                            </Text>
                            <Text style={styles.shoppingareadetailtext}>
                                Deadline: 1/1/2019
                            </Text>
                        </View>
                    </View>
                    <View style={styles.shoppingarea}>
                        <TouchableOpacity>
                            <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                        <View style={styles.shoppingareadetail}>
                            
                            <View style={styles.shoppingareadetailrow}>
                                <Text style={styles.shoppingareadetailtext2}>
                                    EventName
                                </Text>

                                <Text style={[styles.shoppingareadetailtext3,{marginRight:0}]}>
                                    $100
                                </Text>
                            </View>
                             
                            <Text style={styles.shoppingareadetailtext}>
                                Date: 1/1/2019
                            </Text>
                            <Text style={styles.shoppingareadetailtext}>
                                Deadline: 1/1/2019
                            </Text>
                        </View>
                    </View>
                    <View style={styles.shoppingarea}>
                        <TouchableOpacity>
                            <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                        <View style={styles.shoppingareadetail}>
                            
                            <View style={styles.shoppingareadetailrow}>
                                <Text style={styles.shoppingareadetailtext2}>
                                    EventName
                                </Text>

                                <Text style={[styles.shoppingareadetailtext3,{marginRight:0}]}>
                                    $100
                                </Text>
                            </View>
                             
                            <Text style={styles.shoppingareadetailtext}>
                                Date: 1/1/2019
                            </Text>
                            <Text style={styles.shoppingareadetailtext}>
                                Deadline: 1/1/2019
                            </Text>
                        </View>
                    </View>
                </Content>
                <View style={styles.searchbar}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <TouchableOpacity>
                                <Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.searchbartext}>Select All</Text>
                    </View>
                    <TouchableOpacity style={styles.paybutton}>
                        <Text style={styles.paybuttontext}>Pay</Text>
                    </TouchableOpacity>
                </View>
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