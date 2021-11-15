import React, {Component} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Image, ScrollView, Alert } from 'react-native'
import loginStyles from '../css/logincss'
import { userSignup } from '../services/userService';

class registerScreen extends Component{
    constructor(){
        super();

        this.state={
            uname:'',
            unameError:'',
            email:'',
            emailError:'',
            password:'',
            passwordError:'',
        };
    }

    unameValidator = (val) => {
        this.setState({uname: val});
        let rejex = /^[a-zA-Z]{1}[a-z]{2,}$/;
        let isValid = rejex.test(val);
        if (!isValid){
            this.setState({unameError: 'invalid firstName'});
        }
        else{
            this.setState({unameError: ''});
        } 
    };

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
            this.setState({emailError:"email cannot be empty"})
        }
        else{
            this.setState({emailError:""})
        }
    }

    onSubmit = () => {
        let userData = {
          uname: this.state.uname,
          email: this.state.email,
          password: this.state.password,
        };
        userSignup(userData,()=>{
            console.log("user entered");
            this.props.navigation.navigate('loginscreen');
        });
      };

    // userSignup(email,pass){
    //     firebase.auth().createUserWithEmailAndPassword(email,pass)
    //     .then(()=>{
    //         this.props.navigation.navigate('loginscreen')
    //     })
    //     .catch(error=>{
    //         Alert.alert(error.message)
    //     })
    // }

    render(){
        return(
            <ScrollView>
                <View style={loginStyles.container}>
                    <View style={loginStyles.header}>
                        <View style={loginStyles.banner}>
                            <Image
                                style={{width:100, height:100}} 
                                source={require('../assets/fundonote.png')} 
                            />
                            <Text style={{fontWeight:'bold',color:'white'}}>Signup Screen</Text>
                        </View>
                    </View>
                    <View style={loginStyles.footer}>
                        <View>
                            <Text style={{fontWeight:'bold',marginTop:10,marginBottom:10}}>User Name</Text>
                            <TextInput 
                                style={loginStyles.textinput}  
                                placeholder="Enter User Name"
                                value={this.state.uname}
                                onChangeText={this.unameValidator}
                            />
                            <Text style={{color:'red'}}>{this.state.unameError}</Text>
                        </View>

                        <View>
                            <Text style={{fontWeight:'bold',marginTop:10,marginBottom:10}}>User Email</Text>
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

                        <View style={{marginTop:30,}}>
                            <Button  
                                title="Signup"
                                color="#009387"
                                onPress={this.onSubmit}
                                //onPress={()=>this.userSignup(this.state.email,this.state.password)}
                            />  
                        </View>

                        <TouchableOpacity style={{marginTop:20, alignItems:'center',}} onPress={() => this.props.navigation.navigate('loginscreen')}>
                            <Text style={{color:'blue'}}>Already have account? login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default registerScreen