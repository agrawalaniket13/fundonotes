import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView, } from 'react-native'
import loginStyles from '../css/logincss'

const forgotScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View style={loginStyles.container}>
                
                <View style={loginStyles.header}>
                    <View style={loginStyles.banner}>
                        <Image
                            style={{width:100, height:100}} 
                            source={require('../assets/fundonote.png')} 
                        />
                        <Text style={{fontWeight:'bold',color:'white'}}>Forgot Screen</Text>
                    </View>
                </View>
                
                <View style={loginStyles.footer}>
                    
                    <View>
                        <Text style={{fontWeight:'bold',marginBottom:10}}>User Email</Text>
                        <TextInput 
                            style={loginStyles.textinput}  
                            placeholder="Enter User Email"  
                        />
                    </View>

                    <View style={{marginTop:10,}}>
                        <TouchableOpacity style={{marginTop:10,alignItems:'flex-end'}} onPress={() => navigation.navigate('loginscreen')}>
                            <Text style={{color:'blue'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{marginTop:30,}}>
                        <Button  
                            title="Submit"
                            color="#009387"
                        />  
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default forgotScreen

