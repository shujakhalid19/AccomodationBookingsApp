import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Dimensions

} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './components/Explore/Home'
import Tag from './components/Explore/Tag'
const { height, width } = Dimensions.get('window')

class Profile extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.div}>
                     <View style={{width:'100%',height:110,justifyContent:'center'}}>
                            <View style={{flex:1,flexDirection:'row',paddingTop:15}}>
                                    <View style={{flex:0.4}}>
                                       <Image
                                         style={{width:80,height:80,left:10,borderRadius:100,borderWidth:1,borderColor:'#fff'}}
                                         source={{
                                            uri:
                                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                                          }}
                                        />
                                    
                                    </View>
                                    <View style={{flex:1,left:0}}>
                                        <Text style={{fontSize:20,fontWeight:'bold',top:10}}>John Doe</Text>
                                        <Text style={{fontSize:14}}>{'\n'}22 Eastwoods, Wordminster street, Suburbia.</Text>
                                        
                                    </View>

                           </View>
                    </View>
                </View>
                <View style={styles.div}>
                    <TouchableOpacity style={[styles.divInline,styles.borderTop,{padding:10}]}>
                        <View style={{flex:1, alignItems:'flex-start'}}>
                            <Text style={{fontSize:16}}><Icon name="add-circle-outline" size={20}/> New Listing</Text>
                        </View>
                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Icon name="chevron-forward" size={20}/> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.divInline,styles.borderTop,{padding:12}]}>
                        <View style={{flex:1, alignItems:'flex-start'}}>
                            <Text style={{fontSize:16}}><Icon size={20} name="person-circle" /> Account Details</Text>
                        </View>

                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Icon name="chevron-forward" size={20}/> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.divInline,styles.borderTop,{padding:12}]}>
                        <View style={{flex:1, alignItems:'flex-start'}}>
                            <Text style={{fontSize:16}}><Icon size={20} name="settings-outline" /> Settings</Text>
                        </View>

                        <View style={{flex:1, alignItems:'flex-end'}}>
                            <Icon name="chevron-forward" size={20}/> 
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.div}>
                    <Text style={{fontSize:18,left:10}}>{'\n'}My Listings</Text>
                      <View style={{ paddingHorizontal: 10, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                <Home width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />
                                <Home width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />


                            </View>
                </View>
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body:{ flex: 1},
    div:{paddingTop:0,top:0,marginBottom:20,backgroundColor:'#fff'},
    borderBtm:{borderBottomWidth:1,borderBottomColor:'#d4d4d4'},
    borderTop:{borderTopWidth:1,borderTopColor:'#d4d4d4'},
    divInline:{paddingTop:15,paddingBottom:5,top:0,marginBottom:5,flexDirection:'row',zIndex: 5},
    Logo:{fontSize: 25,fontWeight:"bold" }, 
});