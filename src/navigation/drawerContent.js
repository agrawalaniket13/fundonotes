import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconeIonicons from 'react-native-vector-icons/Ionicons';
import IconeFeather from 'react-native-vector-icons/Feather';
import IconeAntDesign from 'react-native-vector-icons/AntDesign';

export function DrawerContent({props, navigation }) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{margin:20}}>
                    <Text style={{fontSize:20}}>Fundo Notes</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('dashboardScreen')}>
                    <View style={{flexDirection: 'row',marginLeft: 20,alignItems: 'center',height: 40,}}>
                        <IconAntDesign name="bulb1" size={20} color={'gray'} />
                        <Text style={{fontSize: 15, marginLeft: 20}}>DashBoard</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width: '100%', height: 1, backgroundColor: 'gray',marginTop:10}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('DeletedScreen')}>
                    <View style={{flexDirection: 'row',marginLeft: 20,alignItems: 'center',height: 40,marginTop: 10,}}>
                        <IconeAntDesign name="delete" size={20} color={'gray'} />
                        <Text style={{fontSize: 15, marginLeft: 20}}>Deleted Screen</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('archiveScreen')}>
                    <View style={{flexDirection: 'row',marginLeft: 20,alignItems: 'center',height: 40,marginTop: 10,}}>
                        <IconeIonicons name="archive-outline" size={20} color={'gray'} />
                        <Text style={{fontSize: 15, marginLeft: 20}}>Archive</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
        </View>
    )
}