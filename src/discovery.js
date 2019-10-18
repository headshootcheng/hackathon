import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from './common/customHeader';
let styles=require('../stylesheet/style');
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
                <CustomHeader title="Discovery" {...this.props}/>
                <View style={styles.selectlistbar}>                       
                    <Text style={styles.searchbartext}>Search for name, event, society, canteen...</Text>
                    <TouchableOpacity>
                        <Image style={styles.checkboximg} source={require('../image/search-icon.png')}/>
                    </TouchableOpacity>
                </View>
                <Content style={[styles.content,{paddingVertical:10}]}>
                    <View>
                        <View style={styles.societyarea}>
                                <Image style={styles.shoppingphotoimg} source={require('../image/defaultphoto.jpg')}/>
                                <View style={styles.shoppingareadetail}>
                                    
                                        <Text style={styles.shoppingareadetailtext2}>
                                            Society Name
                                        </Text>
                                    <Text style={styles.shoppingareadetailtext}>
                                        Description
                                    </Text>
                                </View>
                            
                        </View>
                    </View>
                    
                    
                </Content>
                <Footer >
                    <FooterTab style={styles.footer}>
                        <Image style={styles.footerimg} source={require('../image/home-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../image/search-icon.png')}/>
                        <Image style={styles.footerimg2} source={require('../image/qrcode-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../image/cart-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../image/user-icon.png')}/>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}