import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import topBarStyle from '../css/TopBarCss';
import { getDeleteData } from '../services/useService';
//import { getCollectionData } from '../services/useService';
//import getCollectionData from '../services/useService';
import NoteCard from './noteCard';



const DeletedScreen = ({navigation}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        navigation.addListener('focus',payload=>{
            getNote();
        })        
    }, []);

    const getNote = async () => {
        let noteData = await getDeleteData();
        setNotes(noteData);
    };

    // const onPress = () => {
    //     const newData = data.filter((item) => {
    //       return item !== 'one';
    //     });
    //     setNotes(newData);
    // };

    return (
        <View style={{flex:1}}>
            <View style={topBarStyle.container}>
                <View style={{justifyContent:'center', alignItems:'center', padding:8,}}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icons name="menu" size={25} />
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1,}}>
                    <TouchableOpacity>
                        <Text>Delete Screen</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={{justifyContent:'center', alignItems:'center', padding:6}}>
                    <TouchableOpacity>
                        <Icons name="view-grid-outline" size={25} />
                    </TouchableOpacity>
                </View> */}

                <View style={{justifyContent:'center', alignItems:'flex-end', padding:6}}>
                    <TouchableOpacity>
                            <Icons name="dots-vertical" size={25} color="#525252" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{height:'76%'}}>
                {notes.map(item=>(
                    <TouchableOpacity 
                    style={{paddingTop:5}} 
                    key={item.id}
                    onPress={() =>
                        navigation.navigate('deleteNote', {
                            noteData: item,
                            //edit: true,
                        })
                    }>
                    <NoteCard title={item.title} content={item.content} />
                    </TouchableOpacity>
                )
                    )}
            </ScrollView>
        </View>
    )
}

export default DeletedScreen