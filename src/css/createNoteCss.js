import {StyleSheet} from 'react-native'

const createNote = StyleSheet.create({
    topbar:{
        padding:1, 
        justifyContent:'space-between', 
        alignItems:'center', 
        flexDirection: "row",
        borderRadius:20,
        borderColor:'black',
        borderWidth:1,
        marginHorizontal:10,
        marginTop:10,
    },
    topmain:{ 
        padding:12,
    },
})

export default createNote;