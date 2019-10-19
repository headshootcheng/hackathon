import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform,ImageBackground,NativeEventEmitter } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
import { Actions } from 'react-native-router-flux';
let styles=require('../../stylesheet/style');
export default class Member extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:2
        };
    }
    render=()=>{
        return(
            <Container>
                <CustomHeader title="Society Membership" {...this.props}/>
                <Content style={[styles.content,]}>
                    <View style={{marginVertical:2}}>
                            <TouchableOpacity style={styles.societyarea} >
                                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                                    <View style={styles.shoppingareadetail}>
                                        
                                            <Text style={styles.shoppingareadetailtext2}>
                                                Society Name
                                            </Text>
                                        <Text style={styles.shoppingareadetailtext}>
                                            Description
                                        </Text>
                                    </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:2}}>
                            <TouchableOpacity style={styles.societyarea} >
                                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                                    <View style={styles.shoppingareadetail}>
                                        
                                            <Text style={styles.shoppingareadetailtext2}>
                                                Society Name
                                            </Text>
                                        <Text style={styles.shoppingareadetailtext}>
                                            Description
                                        </Text>
                                    </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:2}}>
                            <TouchableOpacity style={styles.societyarea} >
                                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                                    <View style={styles.shoppingareadetail}>
                                        
                                            <Text style={styles.shoppingareadetailtext2}>
                                                Society Name
                                            </Text>
                                        <Text style={styles.shoppingareadetailtext}>
                                            Description
                                        </Text>
                                    </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:2}}>
                            <TouchableOpacity style={styles.societyarea} >
                                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                                    <View style={styles.shoppingareadetail}>
                                        
                                            <Text style={styles.shoppingareadetailtext2}>
                                                Society Name
                                            </Text>
                                        <Text style={styles.shoppingareadetailtext}>
                                            Description
                                        </Text>
                                    </View>
                            </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:2}}>
                            <TouchableOpacity style={styles.societyarea} >
                                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                                    <View style={styles.shoppingareadetail}>
                                        
                                            <Text style={styles.shoppingareadetailtext2}>
                                                Society Name
                                            </Text>
                                        <Text style={styles.shoppingareadetailtext}>
                                            Description
                                        </Text>
                                    </View>
                            </TouchableOpacity>
                    </View>
                </Content>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}
