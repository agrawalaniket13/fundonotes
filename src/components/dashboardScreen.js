import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Button } from 'react-native'
import TopBar from './topBar';
import { getCollectionData } from '../services/useService';
//import getCollectionData from '../services/useService';
import BottomBar from './bottomBar';
import NoteCard from './noteCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function dashboardScreen({navigation}){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);
    const [gridColumnsValue, setGridColumnsValue]=useState(false);
    //const [name,setName]=useState('');
    //const [myName, setMyName]=useState('aniket');
    

    useEffect(() => {
        navigation.addListener('focus',payload=>{
            getNote();
            //getData();
        })        
    }, []);

    const getNote = async () => {
        let noteData = await getCollectionData();
        setNotes(noteData);
    };

    const gridData=()=>{
        const newState=!gridColumnsValue;
        setGridColumnsValue(newState)
    }

    // const getData=()=>{
    //     try {
    //         AsyncStorage.getItem('uid')
    //             .then(value=>{
    //                 if(value!=null){
    //                     setName(value);
    //                 }
    //             })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // const changeName=()=>{
    //     if(myName==='aniket'){
    //         setMyName('agrawal')
    //     }else{
    //         setMyName('aniket')
    //     }
    // }


    // const gridValueFunction =()=> {
        
    //     if(gridColumnsValue)
    //     {
    //         setGridColumnsValue({
    //             gridColumnsValue: true,  
            
    //         })
    //         console.log('gridView',gridColumnsValue);
    //     }
    //     else{
    //         setGridColumnsValue({
    //             gridColumnsValue: false,                            
    //         })
    //         console.log('listView',gridColumnsValue);
    //     }
    // }

    
    

    return (
        <View style={{flex:1}}>
            <TopBar navigation={navigation} listView={gridData} />
            {/* <View>
                <Text>welcome{name}</Text>
            </View> */}
            {/* <ScrollView style={{height:'76%'}}>
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
            </ScrollView> */}
            <View style={{height:'76%'}}>
                <FlatList
                    data={notes}
                    renderItem={({item})=>(
                        
                            <TouchableOpacity 
                                style={{paddingTop:5,}} 
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
                    numColumns={ gridColumnsValue ? 2 : 1 }
                    key = {( gridColumnsValue ) ? 2 : 1 }
                    keyExtractor={(item, index) => index}
                    //key={2}
                    //keyExtractor={(item, index) => index.toString()}
                />
                {/* <TouchableOpacity onPress={gridData} >
                    <Text>jjbj</Text>
                </TouchableOpacity> */}
            </View>
            {/* <View>
                <Text>{myName}</Text>
                <TouchableOpacity onPress={changeName} >
                    <Text>click Me</Text>
                </TouchableOpacity>
            </View> */}
            <BottomBar navigation={navigation} />
        </View>
    )
}