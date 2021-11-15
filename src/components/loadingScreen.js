import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth';

class loadingScreen extends Component{

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("drawer")
            }else{
                this.props.navigation.navigate("loginscreen")
            }
        })
    }


    render(){ 
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#d9534f" />
            </View>
        )
    }
}

export default loadingScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center'
    }
})