import {StyleSheet,Dimensions} from 'react-native';
module.exports = StyleSheet.create({
    //login
    loginarea:{
        backgroundColor:'#99242b',
        flex:1,
        //height:'100%'
        alignItems:"center"
    },
    loginimg:{
        resizeMode:'contain',
        height:350,
        width:350
    },
    logininput:{
        marginVertical:10,
        height:50,
        width:350,
        backgroundColor:'grey'
    },
    loginbutton:{
       backgroundColor:'blue' ,
       alignItems:"center",
       justifyContent:"center",
       width:350,
       height:80,
       marginTop:50,
       borderRadius:10
    },
    loginbuttontext:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    header:{
        backgroundColor:"white",
        width:"100%",
        height:80,
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:10
    },
    logoimg:{
        marginRight:20,
        height:100,
        width:100,
        resizeMode:'contain',
    },
    title:{
        marginLeft:20,
        fontSize:20,
        fontWeight:"bold"
    },
    footer:{
       backgroundColor:'white',
       flexDirection:'row',
       paddingHorizontal:20,
    },
    selectlistbar:{
        height:50,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:'#d3d3d3',
        paddingHorizontal:10
    },
    searchbar:{
        height:80,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        borderTopWidth:1,
        borderColor:'#d3d3d3',
        paddingHorizontal:10
    },
    searchbartext:{
        fontSize:16,
        color:'#656565'
    },
    paybutton:{
        backgroundColor:'#99242b',
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:100
    },
    paybuttontext:{
        fontSize:16,
        color:'white'
    },
    footerimg:{
        height:30,
        width:30,
        resizeMode:'contain',
        marginRight:10,
        top:10
    },
    footerimg2:{
        height:100,
        width:100,
        resizeMode:'contain',
        marginRight:10,
        bottom:50
    },
    checkboximg:{
        height:30,
        width:30,
        resizeMode:'contain',
        marginRight:10,
    },
    content:{
        backgroundColor:'grey',
        flex:1
    },
    //shopping
    shoppingarea:{
        flex:1,
        height:200,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#d3d3d3',
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:'center',
        paddingHorizontal:10
    },
    shoppingphotoimg:{
        height:100,
        width:100,
        resizeMode:'contain',
    },
    shoppingareadetail:{
        flexDirection:'column',
        alignItems:"flex-start",
        justifyContent:"center",
        flex:1,
        backgroundColor:"white",
        marginLeft:20,
        bottom:10
    },
    shoppingareadetailrow:{
        flexDirection:"row",
        justifyContent:"space-between",
        //alignItems:"center",
    },
    shoppingareadetailtext:{
        fontSize:16,
        color:"#99242b",
        marginVertical:0
    },
    shoppingareadetailtext2:{
        fontSize:20,
        fontWeight:"bold",
        color:"#99242b",
        marginVertical:15
    },
    shoppingareadetailtext3:{
        fontSize:20,
        fontWeight:"bold",
        color:"#99242b",
        marginVertical:15,
        left:50
    },
    //discovery
    searchbarimg: {
        height:100,
        width:100,
        resizeMode:'contain',
        alignItems:"flex-end"
    },
    societyarea:{
        flex:1,
        height:120,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#d3d3d3',
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:'center',
        paddingHorizontal:10
    },
    eventarea:{
        marginTop:5,
        flex:1,
        height:150,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:"center",
        paddingHorizontal:10,
        resizeMode:'contain'
    },
    eventareatitle:{
        fontWeight:'bold',
        fontSize:25,
        color:'white'
    },
    eventareatext:{
        fontSize:18,
        color:'white'
    },
    //news
    featureeventarea:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:0
    },
    featureeventareatext:{
        fontSize:18,
        marginTop:5,
        marginHorizontal:20
    },
    featureeventareaview:{
        marginVertical:10
    },
    eachfeatureeventarea:{
        height:200,
        width:150,
        marginHorizontal:5,
        resizeMode:'contain',
        borderRadius:30,
        overflow:'hidden',
        alignItems:"center",
        justifyContent:"center"
    },
    eachfeatureeventtext:{
        color:'white',
        fontSize:18
    },
    eachfeatureeventtext2:{
        color:'white',
        fontSize:14
    },
    recenteventarea:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:0
    },
    recenteventareatext:{
        fontSize:18,
        marginTop:5,
        marginHorizontal:20
    },
    eachrecenteventarea:{
        flex:1,
        height:150,
        resizeMode:'contain',
        alignItems:"center",
        justifyContent:"center"
    },
    eachrecenteventtext:{
        color:'white',
        fontSize:18,
        fontWeight:"bold"
    },
    eachrecenteventtext2:{
        color:'white',
        fontSize:14
    },
    eachrecenteventdetail:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal: 20,
        height:100
    },
    addcartimg:{
        height:30,
        width:30,
        resizeMode:'contain',
    },
    //PersonalInfo
    personaldetailarea:{
        marginTop:20,
        alignItems:"center",
        justifyContent:"center"
    },
    personalname:{
        fontSize:25,
        fontWeight:'bold'
    },
    personalicon:{
        height:160,
        width:160,
        resizeMode:'contain'
    },
  
    sid:{
        fontSize:18
    },
    personaloptionarea:{
        marginTop:20,
        marginHorizontal:20
    },
    personaloptionrow:{
        flexDirection:'row',
        marginTop:10,
        alignItems:"center",
        justifyContent:"flex-start",
        marginHorizontal:20,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#d3d3d3'
    },
    optionimg:{
        height:40,
        width:40,
        resizeMode:'contain'
    },
    optiontext:{
        fontSize:18,
        color:'#99242b',
        marginLeft:20
    },
    //SocietyDetail
    societydetailred:{
        backgroundColor:"#99242b",
        height:100,
        alignItems:"center"
    },
    personaliconimg:{
        height:160,
        width:160,
        resizeMode:'contain',
        left:'31%',
        bottom:80,
    },
    societydetailwhite:{
        backgroundColor:"white",
        height:180,
        alignItems:"center",
        //flexWrap:'wrap',
        //justifyContent:'flex-start'
    },
    societydetailtitle:{
        fontSize:25,
        fontWeight:'bold',
        bottom:50
    },
    societydetailtext:{
        fontSize:18,
        //fontWeight:'bold',
        bottom:30,
        marginHorizontal:60
    },
    societydetailtab:{
        height:50,
        width:150,
        //backgroundColor:'yellow',
        alignItems:"center",
        justifyContent:"center"
    },
    societydetailtabactive:{
        height:50,
        width:150,
        //backgroundColor:'yellow',
        borderColor:"#99242b",
        borderBottomWidth:3,
        alignItems:"center",
        justifyContent:"center"
    },
    societydetailtabtext:{
        fontSize:20,
        fontWeight:"bold"
    },
    societydetailtabtextactive:{
        fontSize:20,
        fontWeight:"bold",
        color:'#99242b'
    },
    eachboxarea:{
        flex:1,
        height:120,
        alignItems:"center",
        justifyContent:"center"
    },
    eachboxarea2:{
        flex:1,
        height:150,
        alignItems:"center",
        justifyContent:"center"
    },
    boxtitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    },
    boxtext:{
        fontSize:16,
        color:"white"
    },
    //QRCode
    qrcodearea:{
        height:'100%',
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#99242b"
    },
    qrcodeimg:{
        height:200,
        width:200,
        resizeMode:"contain"
    },
    qrcodetext:{
        marginTop:10,
        fontSize:18,
        color:'white'
    },
    closeimg:{
        height:80,
        width:80,
        //top:80,
        resizeMode:"contain"
    },
    //Timetable
    timetableimg:{
        height:600,
        right:60,
        resizeMode:'contain'
    },
    //Accomodation Expense
    eachexpensebox:{
        backgroundColor:'white',
        alignItems:"center",
        height:300,
        flex:1,
        borderWidth:1,
        borderColor:'#d3d3d3'
    },
    expenseimg:{
        marginTop:40,
        height:150,
        width:150,
        resizeMode:'contain'
    },
    expensetext:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:20
    },
    //Booking Room
    bookingbox:{
        marginTop:10,
        width:'90%',
        height:200,
        marginHorizontal:20
    },
    bookingboxtop:{
        height:50,
        backgroundColor:'#c5c5c6',
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        justifyContent:"center",
        paddingHorizontal:10,
    },
    bookingtoptext:{
        fontSize:12,   
    },
    bookingboxbottom:{
        height:150,
        backgroundColor:'#adadae',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        justifyContent:"center",
        paddingHorizontal:20,
    },
    bookingboxbottomrow:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    booktext1:{
        fontSize:20,
        fontWeight:"bold"
    },
});


