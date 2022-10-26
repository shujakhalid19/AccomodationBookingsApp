import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet
} from "react-native";
import { Avatar, Button,Badge, withBadge } from 'react-native-elements'

import StarRating from 'react-native-star-rating'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './components/Explore/Home'


class Saved extends Component {
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView>
                  <ImageBackground
                    style={{width:'100%',height:220,backgroundColor:'#666'}}
                    source={{
                        uri:
                          'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      }}
                  >
                  <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{ flex: 0.8, alignItems: 'flex-start',  marginTop:4, paddingLeft: 10,backgroundColor:'rgba(0,0,0,0.1)' }}>
                            <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold'}}>338 Spear Hostel #..{'\n'}</Text>
                            
                        </View>  
                        <View style={{ flex: 0.2, alignItems: 'flex-end',  marginTop:4, paddingLeft: 10,backgroundColor:'rgba(0,0,0,0.1)' }}>
                            <Icon name="ios-bookmark-outline" color={'#fff'} size={42}/>   
                        </View>  
                        

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end',alignItems:'flex-end',  marginBottom:24, paddingRight: 8,backgroundColor:'rgba(0,0,0,0.1)' }}>
                            <Badge containerStyle={{backgroundColor:'#555',borderRadius:14,padding:8}} badgeStyle={{backgroundColor:'#555'}} textStyle={{color:'#fff'}}
                                value={<Text style={{color:'#fff'}}><Icon name="images" size={16}/> 88 Photos</Text>} 
                             />
                        </View>  
                  </ImageBackground>
                  <View style={{ flex:1,alignItems: 'flex-start', marginTop:-10, paddingTop:20, paddingLeft: 10,borderTopLeftRadius:14,borderTopRightRadius:14 }}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{ flex: 1, alignItems: 'flex-start'}}>    
                                <Text style={{fontSize: 32}}>$12000</Text>
                                <Text style={{ fontSize: 22,top:10 }}>338 Spear Hostel{'\n'}</Text>
                            </View>
                            <View style={{ flex:0.2, alignItems: 'flex-end', marginRight: 20}}>
                                <Avatar
                                    size="medium"
                                  rounded
                                  source={{
                                    uri:
                                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                  }}
                                />
                            </View>  
                        </View>
                        <StarRating
                            disable={true}
                            maxStars={5}
                            rating={3}
                            starSize={20}

                        />
                        <Text style={{ fontSize: 15,color:' rgb(169,169,169)',top:10 }}>Details</Text>
                        <Text style={{ fontSize: 15,color:' rgb(169,169,169)',top:20 }}>More Details</Text>
                </View>

                  <View style={{ flex: 1,height:200,top:30,  marginBottom:24, paddingRight: 8,backgroundColor:'rgba(0,0,0,0.2)' }}>
                    
                    </View>

                <View style={{ flex: 1,height:200,top:30, marginBottom:24, paddingRight: 18,paddingLeft: 18}}>
                    <Button
                      title="Call Now"
                      type="outline"
                      
                    />
                </View>  
                </ScrollView>
            </View>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});