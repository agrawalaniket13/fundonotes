import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import createNote from '../css/createNoteCss';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateNote = ({navigation, route}) => {

    const [title,setTitle]=useState(route?.params?.noteData?.title??'');
    const [content, setContent]=useState(route?.params?.noteData?.content??'');

    // const getUid = async () => {
    //     const Uid = await AsyncStorage.getItem('uid');
    //     return Uid;
    // };

    // const navigateDashBoard=()=>navigation.navigate('dashboardScreen');

    // const BackButton=async()=>{
    //     const Uid=await getUid();
    //     const data = {title, content};
    //     console.log(data,'dataDetail');
    //     firestore()
    //         .collection(Uid)
    //         .doc('personalData')
    //         .update({
    //             postData:data
    //         })
    //         .then(() => {
    //             console.log('Note is added!');
    //         })
    //         .catch((error)=>{
    //             console.log('something went wrong',error);
    //         })

    //     navigateDashBoard();
    // }


    return (
        <View style={{flex:1, backgroundColor:'#ffff'}}>
            <View style={createNote.topbar}>
                <View style={{flex:1,padding:12}}>
                    <TouchableOpacity >
                    {/* onPress={BackButton} */}
                        <Icons name="arrow-left" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={createNote.topmain}>
                    <TouchableOpacity>
                        <Icons name="pin" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={createNote.topmain}>
                    <TouchableOpacity>
                        <Icons name="bell" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={createNote.topmain}>
                    <TouchableOpacity>
                        <Icons name="archive" size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1, paddingHorizontal:15}}>
                <View>
                    <TextInput 
                        style={{fontSize:22}} 
                        value={title} 
                        placeholder='Title' 
                        onChangeText={value=> setTitle(value)} 
                    />
                </View>
                <View>
                    <TextInput 
                        style={{fontSize:18}} 
                        value={content} 
                        placeholder='Note' 
                        onChangeText={value=> setContent(value)}
                    />
                </View>
            </View>
            <View style={{padding:2 ,justifyContent:'space-between', alignItems:'center',flexDirection: "row",}}>
                    <View style={{ justifyContent:'center', alignItems:'center', padding:12}}>
                        <TouchableOpacity>
                            <Icons name="palette" size={25} color='#525252' />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:12}}>
                        <TouchableOpacity>
                            <Text>Edited</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent:'center', alignItems:'center', padding:10}}>
                        <TouchableOpacity>
                            <Icons name="dots-vertical" size={25} color='#525252' />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default CreateNote
