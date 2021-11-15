import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export const userSignup = async (userData, callback)=>{
  
  if(!userData.uname || !userData.email || !userData.password){
    Alert.alert('Error', 'Please enter all fields');
  }
  else{
    return auth().createUserWithEmailAndPassword(userData.email,userData.password)
    .then(async (cred)=>{
      const {uid}=cred.user;
      storeData('userEmail', cred.user.email);
      return uid
      
    })
    .then(uid => {
      createUserInDB(uid, userData);
      auth().currentUser.updateProfile({
        displayName: userData.uname
      })
      callback()
    })
    .catch(
      err=>Alert.alert('Error', 'check all')
      
    )
  }
}



export const userSignin = async (signupData, callback)=>{
  const {email,password}=signupData;
  
  if(!email || !password){
    Alert.alert('Error', 'Enter all fields');
  }
  else{
    return auth().signInWithEmailAndPassword(email,password)
    .then(item=>{
      AsyncStorage.setItem('uid',item.user.uid)
      //console.log("logged In User Details : ",item)
      //storeAsyncData('userEmail', item.user.email);
      callback()
    })
    .catch(
      err=>Alert.alert('error', 'Enter valid id or password')
    )
  }
}

export const signOut = () => {
  console.log("successfully logged out");
  clearAsync();
  return auth().signOut();
}



//firebase firestore user collection
export function createUserInDB(uid, userData) {
  firestore()
  .collection(uid)
    .doc('personalData')
    .set(userData)
    .then(() => {
      console.log('User added!');
    })
    .catch(() => {
      console.log('user signup failed');
    });
}

//async storage
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("stored email");
  } catch (error) {
    console.log(error);
  }
}

const clearAsync = () => {
  AsyncStorage.clear();
  console.log('Async Data Cleared')
};


export const retrieveAsyncData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Email : ",value);
      return value;
    }
  } catch (error) {
      console.log(error)
  }
};