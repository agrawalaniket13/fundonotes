import {StyleSheet} from 'react-native'

const signupStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#009387'
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
    }
})

export default signupStyles;