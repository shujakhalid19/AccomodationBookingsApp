import React, { Component } from 'react'
import {View,Image} from 'react-native'
export default class Events extends React.Component{
    render(){
        
        return(
            <View>
                <Image style={{width:100,height:100}} source={{
                     uri:
                     'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                 
                }}/>
            </View>
       
        )
    
    }
}