import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider, Avatar, Actionsheet, useDisclose} from "native-base";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import { getUserDetails, updateUserProfile } from '../services/profileServices';
import topBarStyle from '../css/TopBarCss';

const TopBar = ({navigation, listView}) => {

    const { isOpen, onOpen, onClose } = useDisclose();
    const [viewType, setViewType] = useState(true);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [transferred, setTransferred] = useState(0);

    const chooseFile = () => {
        ImagePicker.openPicker({
            width: 1200,
            height: 700,
          }).then((image) => {
            console.log("Selected Image : ",image);
            const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
            setImage(imageUri);
          })
    };

    const getUid=async()=>{
        const Uid=await AsyncStorage.getItem('uid');
        return Uid;
    }

    const submitPost=async()=>{
        const imageUrl=await uploadImage();
        const Uid=await getUid();
        console.log(imageUrl,'nnnnknknknk');
        firestore()
            .collection(Uid)
            .doc('personalData')
            .update({
                postImg:imageUrl
            })
            .then(()=>{
                console.log("image added");
            })
            .catch((error)=>{
                console.log('something went wrong',error);
            })
    }
    const uploadImage = async () => {
        
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

        

        setUploading(true);
        

        const storageRef = storage().ref(`${filename}`);
        const task = storageRef.putFile(uploadUri);

        

        try {
            await task;

            const url = await storageRef.getDownloadURL();
            
            console.log("Firebase Image Url : ", url)
            updateUserProfile(url);

            setUploading(false);
            setImage(null);

            return url;

        } catch (e) {
            console.log(e);
            return null;
        }

    };

    const profileDetails  = async () => {
        const {email, uid, photoURL, displayName} = await getUserDetails();

        let temp = {
            email:email,
            photoURL:photoURL,
            uid:uid,
            displayName:displayName
        };
        setUserDetails(temp)
    }

    

    useEffect(() => {
        profileDetails()
    }, [])

    const removeAsyncStorage = () => {
        AsyncStorage.clear();
        console.log('user Successfully logged out');
        navigation.navigate('loginscreen');
        return auth().signOut();
      };


    
    return (
            <View style={topBarStyle.container}>
                
                <View style={{justifyContent:'center', alignItems:'center', padding:8,}}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icons name="menu" size={25} />
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1,}}>
                    <TouchableOpacity>
                        <Text>Search your notes</Text>
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent:'center', alignItems:'center', padding:6}}>
                    <TouchableOpacity onPress={listView}>
                        <Icons name="view-grid-outline" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={{justifyContent:'center', alignItems:'flex-end', padding:6}}>
                    <TouchableOpacity onPress={onOpen}>
                        <NativeBaseProvider>
                            <Avatar size="sm" 
                                source={{ uri: image ? image : userDetails.photoURL }}>
                                
                            </Avatar>
                            
                            <Actionsheet isOpen={isOpen} onClose={onClose}>
                                <Actionsheet.Content>
                                    <Actionsheet.Item onPress={() => chooseFile()} >
                                        <View style={{flexDirection:'row', alignItems:'center', }}>
                                            <Avatar size="lg" 
                                                source={{ uri: image ? image : userDetails.photoURL }}>
                                                
                                            </Avatar>
                                            <View style={{marginHorizontal:10}}>
                                                <Text style={{fontWeight:'600'}}>{userDetails.displayName}</Text>
                                                <Text>{userDetails.email}</Text>
                                                <Text>{userDetails.uid}</Text>
                                            </View>
                                        </View>
                                    </Actionsheet.Item>
                                    <Actionsheet.Item onPress={submitPost}>
                                        <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row',}}>
                                            <Text style={{fontWeight:'600', fontSize:15, marginRight:'75%'}}>Upload</Text>
                                            {uploading ?<ActivityIndicator size="small" color="#eab308" />:null}
                                        </View>
                                    </Actionsheet.Item>
                                    <Actionsheet.Item onPress={removeAsyncStorage}>Signout</Actionsheet.Item>
                                </Actionsheet.Content>
                            </Actionsheet>
                        </NativeBaseProvider>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default TopBar