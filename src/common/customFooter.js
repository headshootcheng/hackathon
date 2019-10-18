import React,{Component} from 'react';
import {Footer,FooterTab} from 'native-base';
import {TouchableOpacity,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {joined,record} from '../../data/data'
let styles = require('../../stylesheet/style');

export default class customHeader extends Component{
    render() {
        const view=0;
        return(
            <Footer >
                    <FooterTab style={styles.footer}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('News',{
                             record: record,
                             joined: joined,
                        });}}>
                            <Image style={styles.footerimg} source={require('../../image/home-icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Discovery');}}>
                        <Image style={styles.footerimg} source={require('../../image/search-icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.footerimg2} source={require('../../image/qrcode-icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ShoppingCart');}}>
                            <Image style={styles.footerimg} source={require('../../image/cart-icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Personalinfo');}}>
                            <Image style={styles.footerimg} source={require('../../image/user-icon.png')}/>
                        </TouchableOpacity>
                        
                    </FooterTab>
            </Footer>
        )
    }
}