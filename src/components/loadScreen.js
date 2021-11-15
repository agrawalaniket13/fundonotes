import React, { Component } from 'react'
import {View, Image, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

export async function CheckEmailSplash(){
    
    var emialdata1 = await AsyncStorage.getItem('email');
    if (emialdata1 != '') {
        let fial1 = 'fail';
        let success1 = 'success';
        let response1;
    
        await firestore()
          .collection('Uid')
          .where('email', '==', emialdata1)
          .get()
          .then(data => {
            data.docs.forEach(element => {
              var elementdata = element.exists;
              if (elementdata) return (response1 = success1);
              else return (response1 = fial1);
            });
          })
          .catch(error => {
            return error;
          });
        return response1;
      }
}