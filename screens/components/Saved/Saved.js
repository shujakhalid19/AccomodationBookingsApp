import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Flatlist,
    StyleSheet
} from "react-native";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

class Saved extends Component {

    componentDidMount(){
        console.log("HELLO WORLD",this.props);
    }

    render() {



        return (
             <TouchableOpacity style={[css.borderBtm,{flex:1,paddingBottom:20},this.props.cardStyle]} onPress={() => this.props.navigation.navigate('Profile',{ListingData:this.props.data} )}>
            
                <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:0.45}}>
                       <Image
                         style={{width:85,height:85,left:10,borderRadius:7,borderWidth:1,borderColor:'#fff'}}
                         source={{
                            uri:
                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                          }}
                        />
                </View>
                <View style={{flex:0.9,left:0}}>
                    <Text style={{fontSize:18}}>{(this.props.title)? this.props.title : "No Title Available"}</Text>
                    <Text style={{fontSize:14}}>$2000</Text>
                    <View style={{flex:1,left:0,justifyContent:'flex-end'}}>
                    <Text style={{fontSize:14,color:'#a9a9a9'}}>San Francisco , CA</Text>
                    </View>
                </View>

                <View style={{flex:0.2,left:0}}>
                    <Icon name={this.props.rightIcon} size={22}/>   
                    </View>
                 
                </View>            
                
                
            
            </TouchableOpacity>

                    
        );
    }
}
export default withNavigation(Saved);


const css = StyleSheet.create({
    divInline:{paddingTop:15,paddingBottom:5,top:0,marginBottom:5,flexDirection:'row',zIndex: 5},
    borderTop:{borderTopWidth:1,borderTopColor:'#d4d4d4'},
    borderBtm:{borderBottomWidth:1,borderBottomColor:'#d4d4d4'},
    Logo:{fontSize: 25,color:"#999",fontWeight:"bold" }
});