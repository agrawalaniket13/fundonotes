import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import loginStyles from '../css/logincss'
import { userSignin } from '../services/userService';
//import auth, { firebase } from '@react-native-firebase/auth';

class loginscreen extends Component{

    constructor(){
        super();

        this.state={
            email:'',
            emailError:'',
            password:'',
            passwordError:'',
        };
    }

    emailValidator = (val) => {
        this.setState({email: val});
        let rejex = /^[0-9a-zA-Z]+([._+-][0-9A-Za-z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$/;
        let isValid = rejex.test(val);
        if (!isValid){
            this.setState({emailError: 'invalid email'});
        } 
        else{
            this.setState({emailError: ''});
        }
    };

    passwordValidator = (val) => {
        this.setState({password: val});
        let rejex = /^[a-zA-Z]{1}[a-z]{2,}$/;
        let isValid = rejex.test(val);
        if (!isValid) {
            this.setState({passwordError: 'invalid password'});
        }
        else {
            this.setState({passwordError: ''});
        }
    };

    emailValidate(){
        if(this.state.email==""){
            this.setState({emailError:"email field cannot be empty"})
        }
        else{
            this.setState({emailError:""})
        }
    };
    

    onSubmit =() => {

        let signupData = {
          email: this.state.email,
          password: this.state.password,
        };
        userSignin(signupData,()=>{
            console.log("user entered");
            this.props.navigation.navigate('drawer');
        });
      };

    // userSignin(email,pass){
    //     if(!email || !pass){
    //         Alert.alert('Error', 'Please enter all fields');
    //     }
    //     else{
    //         return auth().signInWithEmailAndPassword(email,pass)
    //         .then(()=>{
    //             this.props.navigation.navigate('homeScreen')
    //         })
    //         .catch(error=>{
    //             Alert.alert('Error', 'Please!!!!Enter valid id or password')
    //         })
    //     }
    // }


    render(){ 
    return (
        <ScrollView>
            <View style={loginStyles.container}>
                
                <View style={loginStyles.header}>
                    <View style={loginStyles.banner}>
                        <Image
                            style={{width:100, height:100}} 
                            source={require('../assets/fundonote.png')} 
                        />
                        <Text style={{fontWeight:'bold',color:'white'}}>Login Screen</Text>
                    </View>
                </View>
                
                <View style={loginStyles.footer}>
                    
                    <View>
                        <Text style={{fontWeight:'bold',marginBottom:10}}>User Email</Text>
                        <TextInput 
                            style={loginStyles.textinput}  
                            placeholder="Enter User Email"
                            value={this.state.email}
                            onBlur={()=>this.emailValidate()}
                            onChangeText={this.emailValidator}
                        />
                        <Text style={{color:'red'}}>{this.state.emailError}</Text>
                    </View>
                    
                    
                    <View style={{marginTop:10,}}>
                        <Text style={{fontWeight:'bold',marginBottom:10}}>Password</Text>
                        <TextInput 
                            style={loginStyles.textinput}
                            secureTextEntry={true}
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChangeText={this.passwordValidator}  
                        />
                        <Text style={{color:'red'}}>{this.state.passwordError}</Text>
                    </View>

                    <View style={{marginTop:10,}}>
                        <TouchableOpacity style={{marginTop:10,alignItems:'flex-end'}} onPress={() => this.props.navigation.navigate('forgotScreen')}>
                            <Text style={{color:'blue'}}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:10,alignItems:'flex-end'}} onPress={() => this.props.navigation.navigate('drawer')}>
                            <Text style={{color:'blue'}}>Home Screennn</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{marginTop:10,alignItems:'flex-end'}} onPress={() => this.props.navigation.navigate('drawer')}>
                            <Text style={{color:'blue'}}>Quantity</Text>
                        </TouchableOpacity> */}
                    </View>
                    
                    <View style={{marginTop:30,}}>
                        <Button  
                            title="Login"
                            color="#009387"
                            onPress={this.onSubmit}
                            //onPress={()=>this.userSignin(this.state.email,this.state.password)}
                        />  
                    </View>
                    
                    <TouchableOpacity style={{marginTop:20, alignItems:'center',}} onPress={() => this.props.navigation.navigate('registerScreen')}>
                        <Text style={{color:'blue'}}>Do not have account?? Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
    }
}

export default loginscreen