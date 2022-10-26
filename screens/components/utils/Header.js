import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";


class Header extends Component {
    render() {
        return (
            <View style={[css.divInline,css.borderBtm]}>
                <View style={{flex:1,padding:5}}>
                  <Text style={[css.Logo,this.props.titleStyle]}>{this.props.title}</Text>
                </View>
                <View style={{flex:1,alignItems: 'flex-end',paddingRight:20,top:5}}>
                   {this.props.rightTitle}
				</View>
            </View> 
        );
    }
}
export default Header;

const css = StyleSheet.create({
    divInline:{paddingTop:15,paddingBottom:5,top:0,marginBottom:5,flexDirection:'row',zIndex: 5},
    borderBtm:{borderBottomWidth:1,borderBottomColor:'#d4d4d4'},
    Logo:{fontSize: 25,color:"#999",fontWeight:"bold" }
});