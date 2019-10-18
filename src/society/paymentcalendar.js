import React,{Component} from "react";
import { View, Text, ScrollView,Image,TouchableOpacity,Linking,Platform, TouchableHighlight,ImageBackground } from "react-native";
import {Container,Header,Title,Content,Footer,FooterTab} from 'native-base';
//import { CheckBox } from 'react-native-elements'
import CustomHeader from '../common/customHeader';
import CustomFooter from '../common/customFooter';
//import CalendarPicker from 'react-native-calendar-picker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
let styles=require('../../stylesheet/style');

export default class PaymentCalendar extends React.Component{
    static navigationOptions = {
        header:null
    }
    constructor(props) {
        super(props);
        this.state = {
            view:3,
            selectedStartDate: null
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    onDateChange(date) {
        this.setState({
        selectedStartDate: date,
        });
    }
    render=()=>{
        const {selectedStartDate} =this.state;
        //const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <Container >
                <CustomHeader title="Payment Calendar" {...this.props}/>
                {/*<View>
                    <CalendarPicker
                    onDateChange={this.onDateChange}
                    />
 
                    <View>
                    <Text>SELECTED DATE:{ startDate }</Text>
                    </View>
                </View>*/}
                <CalendarList
                    horizontal={true}
                    pagingEnabled={true}
                    current={'2019-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2019-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2019-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => {console.log('selected day', day)}}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => {console.log('selected day', day)}}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => {console.log('month changed', month)}}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    theme={{
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: 'black',
                        indicatorColor: 'blue',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16,
                      }}
                    />
                    <Content/>
                <CustomFooter {...this.props} view={this.state.view}/>
            </Container>
        )
    }
}