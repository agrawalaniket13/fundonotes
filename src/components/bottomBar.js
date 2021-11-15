import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import bottomBarStyle from '../css/BottomBarCss';

const BottomBar = ({navigation}) => {
    return (
        <ScrollView>
            <View style={bottomBarStyle.container} >

                <View style={bottomBarStyle.mainContainer}>
                    <TouchableOpacity>
                        <Icons name="check-box-outline" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={bottomBarStyle.mainContainer}>
                    <TouchableOpacity>
                        <Icons name="brush" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={bottomBarStyle.mainContainer}>
                    <TouchableOpacity>
                        <Icons name="microphone-outline" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={bottomBarStyle.mainContainer}>
                    <TouchableOpacity>
                        <Icons name="image" size={25} />
                    </TouchableOpacity>
                </View>

                {/* <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('modal')}}>
                        <Text>jbjbjbj</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{flex:1, justifyContent:'center', alignItems:'flex-end',}}>
                    <View style={{borderWidth:1, borderRadius:50 , borderColor:'#F5F6FA', backgroundColor:'#F5F6FA', marginTop:-60, marginRight:30, }}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('CreateNote')}}>
                            <Icons name="plus-circle" size={60}  />
                        </TouchableOpacity>
                    </View>
                </View>
                            
            </View>
        </ScrollView>
    )
}

export default BottomBar
