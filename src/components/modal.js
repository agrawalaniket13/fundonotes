import React,{useState} from 'react'
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity } from 'react-native'

export default function modal(){
    const [modalopen, setModalopen]=useState(false)
    return (
        <View style={{flex:1, marginTop:100}}>
            <Text style={{fontSize:80}}>wkknkn</Text>
            <Modal visible={modalopen}>
                <View style={{backgroundColor:'#000000aa',flex:1}}>
                    <View style={{backgroundColor:'#ffffff', margin:50, padding:40, borderRadius:10, flex:1}}>
                        <Text style={{fontSize:50}}>Modal</Text>
                        <TouchableOpacity onPress={()=> setModalopen(false)}>
                            <Text>cancle</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={()=> setModalopen(true)}>
                <Text>click here</Text>
            </TouchableOpacity>
        </View>
    )
}