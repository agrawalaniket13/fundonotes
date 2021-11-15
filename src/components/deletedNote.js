import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import createNote from '../css/createNoteCss';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomSheet from 'reanimated-bottom-sheet';


const deleteNote = ({navigation,route}) => {

    const [title,setTitle]=useState(route?.params?.noteData?.title ?? '');
    const [content, setContent]=useState(route?.params?.noteData?.content ?? '',);

    const id = route?.params?.noteData?.id;

    const getUid = async () => {
        const Uid = await AsyncStorage.getItem('uid');
        return Uid;
    };

    const navigateDashBoard=()=>navigation.navigate('DeletedScreen');

    const BackButton=async()=>{
        const Uid=await getUid();
            firestore()
                .collection(Uid)
                .doc('keepData')
                .collection('notes')
                .doc(id)
                .delete()
                //.update({title, content, deleteNote})
                .then(() => {
                    console.log('Note is permanantely deleted');
                    Alert.alert('note deleted')
                })
                .catch((error)=>{
                    console.log(error,'something went wrong');
                })
        navigateDashBoard();
    };


    const bottomSheet = () => (
        <View style={{backgroundColor: 'white',padding: 20,height: 450,}}>
          <View style={{paddingTop: 5, flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={BackButton}>
              <Icons name="delete" size={22} color="#525252" />
              <Text style={{paddingLeft: 25, fontSize: 18}}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => sheetRef.current.snapTo(1)}>
              <Icons name="backspace-reverse-outline" size={22} color="#525252" />
              <Text style={{paddingLeft: 25, fontSize: 18}}>Cancle</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    const sheetRef = React.createRef(null);

    return (
        <View style={{flex:1, backgroundColor:'#ffff'}}>
                
            <BottomSheet ref={sheetRef} snapPoints={[150, 0]} initialSnap={1} borderRadius={10} renderContent={bottomSheet} enabledGestureInteraction={true} />
            
            <View style={createNote.topbar}>
                <View style={{flex:1,padding:12}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('DeletedScreen')}}>
                        <Icons name="arrow-left" size={20} />
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
                    
                    <View style={{justifyContent:'center', alignItems:'center', padding:12}}>
                    <TouchableOpacity >
                    {/* onPress={ButtonDrawer} */}
                        <Icons name="palette-outline" size={25} color="#525252" />
                    </TouchableOpacity>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:12}}>
                        <TouchableOpacity>
                        <Text>Delete </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
                            <Icons name="dots-vertical" size={25} color="#525252" />
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

export default deleteNote
