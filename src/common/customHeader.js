import React,{Component} from 'react';
import {Header,Title} from 'native-base';
import {TouchableOpacity,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
let styles = require('../../stylesheet/style');

export default class customHeader extends Component{
    render() {
        const {title} = this.props
        return(
            <Header style={styles.header}>
                <Icon style={styles.title} name="chevron-left" size={20} onPress={()=>{this.props.navigation.goBack()}}/>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.logoimg} source={require('../../image/logo.png')}/>
            </Header>
        )
    }
}