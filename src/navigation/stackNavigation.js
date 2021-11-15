import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginscreen from './src/components/loginscreen';
import forgotScreen from './src/components/forgot';
import registerScreen from './src/components/registerScreen';
import homeScreen from './src/components/homeScreen';


const Stack = createNativeStackNavigator();


const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginscreen" component={loginscreen} options={{headerShown: false}} />
        <Stack.Screen name="forgotScreen" component={forgotScreen} options={{headerShown: false}}  />
        <Stack.Screen name="registerScreen" component={registerScreen} options={{headerShown: false}}  />
        <Stack.Screen name="homeScreen" component={homeScreen} options={{headerShown: false}}  />
        {/* options={{headerShown: false}} */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation