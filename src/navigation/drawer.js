import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { DrawerContent } from './drawerContent';
import dashboardScreen from '../components/dashboardScreen';
import DeletedScreen from '../components/deletedScreen';
import archiveScreen from '../components/archiveScreen';


const Drawer = createDrawerNavigator();

const drawer = () => {
    return (
        <Drawer.Navigator initialRouteName="dashboardScreen" drawerContent={props=><DrawerContent{...props} />} >
            <Drawer.Screen name="dashboardScreen" component={dashboardScreen} options={{headerShown: false}} />
            <Drawer.Screen name="DeletedScreen" component={DeletedScreen} options={{headerShown: false}} />
            <Drawer.Screen name="archiveScreen" component={archiveScreen} options={{headerShown: false}} />
        </Drawer.Navigator>
    )
}

export default drawer