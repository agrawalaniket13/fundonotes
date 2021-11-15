import {StyleSheet} from 'react-native'

const loginStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387',
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
        marginTop:30,
    },
    footer:{
        flex:4,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    textinput:{
        height: 45,
        backgroundColor: 'azure',
        paddingLeft:10,
        fontSize: 15,
        fontWeight:'bold',
        borderColor: 'gray',
        borderWidth: 3,
    },
    banner:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
    },
    mainnav:{
        marginTop:'8%',  
        width:'90%',
        flex:1,
        
    }
})

export default loginStyles;