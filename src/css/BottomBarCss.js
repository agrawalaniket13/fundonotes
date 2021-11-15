import {StyleSheet} from 'react-native'

const bottomBarStyle = StyleSheet.create({
    container:{
        padding:2, 
        borderWidth:0.5, 
        borderColor:'black', 
        justifyContent:'space-around', 
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'row', 
        marginTop:30
    },
    mainContainer:{
        justifyContent:'center', 
        alignItems:'center', 
        padding:12
    },
})

export default bottomBarStyle;