import {StyleSheet} from 'react-native'

const topBarStyle = StyleSheet.create({
    container:{   
        height:50,
        padding:2,
        marginHorizontal:10,
        marginTop:10 ,
        borderRadius:10, 
        borderWidth:0.5,
        borderColor:'#d4d4d4', 
        justifyContent:'space-between', 
        alignItems:'center', 
        backgroundColor:'#ffff',
        flexDirection: "row"
    },
    mainContainer:{
        justifyContent:'center', 
        alignItems:'center', 
        padding:12
    },
})

export default topBarStyle;