import React,{Component} from 'react';
import {Footer,FooterTab} from 'native-base';
import {TouchableOpacity,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
let styles = require('../../stylesheet/style');

export default class customHeader extends Component{
    render() {
        const {title} = this.props
        return(
            <Footer >
                    <FooterTab style={styles.footer}>
                        <Image style={styles.footerimg} source={require('../../image/home-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../../image/search-icon.png')}/>
                        <Image style={styles.footerimg2} source={require('../../image/qrcode-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../../image/cart-icon.png')}/>
                        <Image style={styles.footerimg} source={require('../../image/user-icon.png')}/>
                    </FooterTab>
            </Footer>
        )
    }
}