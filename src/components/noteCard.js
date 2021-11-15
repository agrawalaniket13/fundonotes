import React from "react";
import { View, Text, StyleSheet } from "react-native";


export const NoteCard = props => {

    return (
      <View style={[styles.container,  {width: props.cardWidth}]}>
          <View>
                <Text style={styles.title}>
                    {props.title ? props.title : 'My Title'}
                </Text>
                <Text style={styles.content}>
                    {props.content ? props.content : 'My Content'}
                </Text>
          </View>
      </View>
    );
}

export default NoteCard;


const styles = StyleSheet.create({
    container:{
        // flex:1,
        // height:100,
        borderWidth:2,
        borderColor:'#d4d4d4', 
        margin:6,
        padding:14, 
        borderRadius:20,
        backgroundColor:'#ffff',       
    },
    title: {
        fontSize:15,
        fontWeight:'bold',
        marginBottom:10,
        color:'#525252'
    },

    content: {
        color:'#525252',
        textAlign:'auto'
    },
  });