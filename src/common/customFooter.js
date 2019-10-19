import React,{Component} from 'react';
import {Footer,FooterTab} from 'native-base';
import {TouchableOpacity,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {joined,record} from '../../data/data'
let styles = require('../../stylesheet/style');

export default class customHeader extends Component{
    render() {
        let {view}=this.props;
        gotoview1=()=>{
            //let view =0;
            this.props.navigation.navigate('News',{
                record: record,
                joined: joined,
           });
        }
        gotoview2=()=>{
            //let view=1;
            this.props.navigation.navigate('Discovery',{
                record: record,
                joined: joined,
           });
        }
        gotoview3=()=>{
            //let view=2;
            this.props.navigation.navigate('ShoppingCart',{
                record: record,
                joined: joined,
           });
        }
        gotoview4=()=>{
            //let view=2;
            this.props.navigation.navigate('Personalinfo',{
                record: record,
                joined: joined,
           });
        }
        
        return(
            <Footer >
                    <FooterTab style={styles.footer}>
                        <TouchableOpacity onPress={gotoview1}>
                            <Image style={styles.footerimg} source={view==0?require('../../image/home-icon.png'):require('../../image/home-icon-grey.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoview2}>
                        <Image style={styles.footerimg} source={view==1?require('../../image/search-icon.png'):require('../../image/search-icon-grey.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('QRCode')}>
                            <Image style={styles.footerimg2} source={require('../../image/qrcode-icon.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoview3}>
                            <Image style={styles.footerimg} source={view==2?require('../../image/cart-icon.png'):require('../../image/cart-icon-grey.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoview4}>
                            <Image style={styles.footerimg} source={view==3?require('../../image/user-icon.png'):require('../../image/user-icon-grey.png')}/>
                        </TouchableOpacity>
                        
                    </FooterTab>
            </Footer>
        )
    }
}