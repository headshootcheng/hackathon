import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
import {shoppingcart} from '../../data/data'
let styles=require('../../stylesheet/style');
export default class Shoppingcart extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            cart: shoppingcart,
            allchecked:false,
            view:2,
            no_selected:0
        };
      }
      change_no_selected(){
          let no=0;
          for(var i=0;i<this.state.cart.length;i++){
              console.log(this.state.cart[i].checked)
            if(this.state.cart[i].checked==true)
                no++
          }
          this.setState({no_selected:no});
      }
      radioallclick(){
        if(this.state.allchecked){
            this.setState({allchecked:false})
            this.setState(prevState => ({

                cart: prevState.cart.map(
                  el => el.checked != false? { ...el, checked: false }: el
                )
              
              }),()=>this.change_no_selected())
        }
        else{
            this.setState({allchecked:true})
            this.setState(prevState => ({

                cart: prevState.cart.map(
                  el => el.checked != true? { ...el, checked: true }: el
                )
              
              }),()=>this.change_no_selected())
            }

           
      }
      radioclick(item,index){
        this.setState(prevState => ({

            cart: prevState.cart.map(
              el => el._id === item._id? { ...el, checked: item.checked?false:true }: el
            )
          
          }),()=>this.change_no_selected())
         
      }
    render=()=>{
        var raw_item_in_cart = this.state.cart
        var react = this
        var item_in_cart = raw_item_in_cart.map(function(item,index) {
            // return (<TouchableOpacity  onPress={()=>{react.singlepayment(item)}} >
            return (<View style={styles.shoppingarea}>
                <TouchableOpacity onPress={()=>{react.radioclick(item,index)}} >
                    {item.checked?<Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                    :<Image style={styles.checkboximg} source={require('../../image/uncheck.png')}/>}
                </TouchableOpacity>
                <Image style={styles.shoppingphotoimg} source={require('../../image/defaultphoto.jpg')}/>
                <View style={styles.shoppingareadetail}>
                    
                    <View style={styles.shoppingareadetailrow}>
                        <Text style={styles.shoppingareadetailtext2}>
                            {item.Product}
                        </Text>

                        <Text style={[styles.shoppingareadetailtext3,{marginRight:0}]}>
                            {item.Price}
                        </Text>
                    </View>
                     
                    <Text style={styles.shoppingareadetailtext}>
                        Date: {item.Period}
                    </Text>
                    <Text style={styles.shoppingareadetailtext}>
                        Deadline: N/A
                    </Text>
                </View>
            </View>)
        });
        return(
            <Container>
                <CustomHeader title="Shopping Cart" {...this.props}/>
                <View style={styles.selectlistbar}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <Text style={styles.searchbartext}>{this.state.no_selected} Selected</Text>
                    </View>     
                </View>
                <Content style={styles.content}>
                    
                    {item_in_cart}
                </Content>
                <View style={styles.searchbar}>
                    <View style={{flexDirection:'row',alignItems:"center"}}>
                        <TouchableOpacity onPress={()=>{react.radioallclick()}}>
                            {this.state.allchecked?<Image style={styles.checkboximg} source={require('../../image/checked.png')}/>
                            :<Image style={styles.checkboximg} source={require('../../image/uncheck.png')}/>}
                        </TouchableOpacity>
                        <Text style={styles.searchbartext}>Select All</Text>
                    </View>
                    <TouchableOpacity style={styles.paybutton}>
                        <Text style={styles.paybuttontext}>Pay</Text>
                    </TouchableOpacity>
                </View>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}