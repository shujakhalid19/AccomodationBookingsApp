import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Tag extends Component {
    render() {
        return (
            <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 2, borderRadius: 12, marginRight: 5 }}>
                <Text style={{  fontWeight: '100',color:'#111',fontSize: 16 }}>{this.props.name}</Text>
            </View>
        );
    }
}
export default Tag;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});