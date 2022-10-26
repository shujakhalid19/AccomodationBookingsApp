import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { Card,Avatar, Button,Badge, withBadge } from 'react-native-elements'


class HRooms extends Component {
  constructor(props){
    super(props);
    this.state={
      selected:false
    }
  }

  toggleRadio(radio){
    this.setState({
      selected:!radio
    })
  }

  render(){
    return(

  <TouchableOpacity style={[{width:'100%',height:'18%',marginBottom:85,opacity:1}]} onPress={()=>this.toggleRadio(this.state.selected)}>
            
                <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:0.1}}>
                       <Icon name={(this.state.selected) ? "radio-button-on" : "radio-button-off"} size={28}/>
                </View>
                <View style={{flex:1,left:0}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>{this.props.data.name}</Text>
                    

                      
                    <View style={{flex:1,left:0,justifyContent:'flex-end'}}>
                    <Text style={{fontSize:16,top:10}}>${this.props.data.price}/per bed per night</Text>
                    <Text style={{fontSize:18,color:'cornflowerblue',top:20}}>{'\n'}Book Now At ${this.props.data.bprice}</Text>
                    </View>
                </View>

                </View>            
                

                
            
            </TouchableOpacity>
      
    )
  }
}

export default HRooms


const css = StyleSheet.create({
    divInline:{paddingTop:15,paddingBottom:5,top:0,marginBottom:5,flexDirection:'row',zIndex: 5},
    borderTop:{borderTopWidth:1,borderTopColor:'cornflowerblue'},
    borderBtm:{borderBottomWidth:1,borderBottomColor:'cornflowerblue'},
    Logo:{fontSize: 25,color:"#999",fontWeight:"bold" }
});