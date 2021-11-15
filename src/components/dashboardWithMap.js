import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import TopBar from './topBar';
import { getCollectionData } from '../services/useService';
//import getCollectionData from '../services/useService';
import BottomBar from './bottomBar';
import NoteCard from './noteCard';

export default function dashboardScreen({navigation}){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        navigation.addListener('focus',payload=>{
            getNote();
        })        
    }, []);

    const getNote = async () => {
        let noteData = await getCollectionData();
        setNotes(noteData);
    };



    return (
        <View style={{flex:1}}>
            <TopBar navigation={navigation} />
            <ScrollView style={{height:'76%'}}>
                <ScrollView style={{height:'76%'}}>
                    <Text style={{fontWeight:'bold', marginTop:20, marginHorizontal:15}}>Pinned Notes</Text>
                    {notes.map(item=>{
                        if(item.pinNote==true && item.archiveNote==false && item.deleteNote==false){
                            return(
                                <TouchableOpacity 
                            style={{paddingTop:5}} 
                            key={item.id}
                            onPress={() =>
                                navigation.navigate('CreateNote', {
                                    noteData: item,
                                    edit: true,
                                })
                            }>
                            <NoteCard title={item.title} content={item.content} />
                        </TouchableOpacity>
                            )
                        }
                    }
                        )}
                </ScrollView>
                {/* <View style={{width: '100%', height: 1, backgroundColor: 'gray',marginTop:10}}></View> */}
                <Text style={{fontWeight:'bold', marginTop:20, marginHorizontal:15}}>Normal Notes</Text>
                {notes.map(item=>
                    (item.pinNote==true || item.archiveNote==true || item.deleteNote==true)? null :(
                    <TouchableOpacity 
                        style={{paddingTop:5}} 
                        key={item.id}
                        onPress={() =>
                            navigation.navigate('CreateNote', {
                                noteData: item,
                                edit: true,
                            })
                        }>
                        <NoteCard title={item.title} content={item.content} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <BottomBar navigation={navigation} />
        </View>
    )
}