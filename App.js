import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import loginscreen from './src/components/loginscreen';
import forgotScreen from './src/components/forgot';
import registerScreen from './src/components/registerScreen';
//import homeScreen from './src/components/homeScreen';
//import dashboardScreen from './src/components/dashboardScreen';
import drawer from './src/navigation/drawer';
import CreateNote from './src/components/createNote';
import SplashScreen from './src/components/splashScreen';
import deleteNote from './src/components/deletedNote';
//import modal from './src/components/modal';
//import loadingScreen from './src/components/loadingScreen';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
      {/* <Stack.Screen name="loadingScreen" component={loadingScreen} options={{headerShown: false}} /> */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="loginscreen" component={loginscreen} options={{headerShown: false}} />
        <Stack.Screen name="forgotScreen" component={forgotScreen} options={{headerShown: false}}  />
        <Stack.Screen name="registerScreen" component={registerScreen} options={{headerShown: false}}  />
        {/* <Stack.Screen name="homeScreen" component={homeScreen} options={{headerShown: false}}  /> */}
        {/* <Stack.Screen name="dashboardScreen" component={dashboardScreen} options={{headerShown: false}}  /> */}
        <Stack.Screen name="drawer" component={drawer} options={{headerShown: false}}  />
        <Stack.Screen name="CreateNote" component={CreateNote} options={{headerShown: false}}  />
        <Stack.Screen name="deleteNote" component={deleteNote} options={{headerShown: false}}  />
        {/* <Stack.Screen name="modal" component={modal} options={{headerShown: false}}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App