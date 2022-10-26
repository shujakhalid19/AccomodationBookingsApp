import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    StyleSheet,
    Dimensions
} from "react-native";
import { Avatar, Button,Badge, withBadge } from 'react-native-elements'

import StarRating from 'react-native-star-rating'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './components/Explore/Home'
import FbImages from './components/Main/multiPhoto'
import Comments from './components/Main/comments'
const { height, width } = Dimensions.get('window')

class Saved extends React.Component {
    constructor(props){
        super(props);

        this.state={
            saveUI:'ios-bookmark-outline',
            flag:0
        }
    }

    saveListing(id){
        //console.warn(this.state.saveUI);
        (this.state.flag)? this.setState({saveUI:'ios-bookmark-outline',flag:0}) : this.setState({saveUI:'bookmark',flag:1});
    }   

    render() {
        return (
            <ScrollView>
            <View style={{flex:1,backgroundColor:'#000'}}
            
            >
            
                  <ImageBackground
                    style={{width:'100%',height:200}}
                    source={{
                        uri:
                          'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                      }}
                  >
                  <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{ flex: 0.8, alignItems: 'flex-start',  marginTop:4, paddingLeft: 10,backgroundColor:'rgba(0,0,0,0.1)' }}>
                            <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold'}}>{'\n'}</Text>
                            
                        </View>  
                        <View style={{ flex: 0.2, alignItems: 'flex-end',  marginTop:4, paddingLeft: 10,backgroundColor:'rgba(0,0,0,0.1)' }}>
                            
                        </View>  
                        

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end',alignItems:'flex-end',  marginBottom:14, paddingRight: 8,backgroundColor:'rgba(0,0,0,0.1)' }}>
                            <Badge containerStyle={{backgroundColor:'#555',borderRadius:14,padding:8}} badgeStyle={{backgroundColor:'#555'}} textStyle={{color:'#fff'}}
                                value={<Text style={{color:'#fff'}}><Icon name="images" size={16}/> 88 Photos</Text>} 
                             />
                        </View>  
                  </ImageBackground>
                  
                  <View style={{top:30,backgroundColor:'#000'}}>
                          <View style={{ flex:1,backgroundColor:'#fff',alignItems: 'flex-start', marginTop:-20, paddingTop: 20, paddingLeft:0,borderTopLeftRadius:14,borderTopRightRadius:14 }}>
                            <View style={{flexDirection:'row',left:10}}>
                                <View style={{ flex: 1, alignItems: 'flex-start'}}>    
                                    <Text style={{fontSize: 28,fontWeight:'bold'}}>338 Spear Hostel</Text>
                                    <Text style={{ fontSize: 18,top:10 }}>$12000{'\n'}</Text>
                                </View>
                                <TouchableOpacity style={{ flex:0.2, alignItems: 'flex-end', marginRight: 20}} onPress={()=>this.saveListing('id')}>
                                    <Icon name={this.state.saveUI} color={'#000'} size={42}/>   
                                </TouchableOpacity>
                            </View>
                            
                            <View style={{ flex:1, alignSelf: 'flex-start',left:10}}>    
                                
                                    <Text style={{ fontSize: 15,color:' rgb(169,169,169)',top:10 }}>Details</Text>
                                    <Text style={{ fontSize: 15,color:' rgb(169,169,169)',top:20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consectetur ultricies metus, non semper dui cursus eu. Aenean volutpat lacus sed semper rutrum. Cras commodo lorem tellus. Sed vel mollis elit. Sed facilisis, est sed consequat tempus, neque arcu varius mauris, vel aliquet quam libero sit amet turpis. Sed volutpat dolor eu quam ultricies, ac viverra lacus scelerisque. Quisque tincidunt tellus sit amet augue facilisis convallis. Nulla finibus felis accumsan sem volutpat, ac viverra nisl pharetra. Vivamus id nulla pretium felis porta convallis ac pharetra elit.{'\n'}</Text>
                                </View>  

                            <View style={{flexDirection:'row',top:20,left:10,backgroundColor:'#fff'}}>
                                
                                <View style={{ flex:1,alignSelf: 'flex-end', marginRight: 20}}>
                                    <Button
                                    buttonStyle={{
                                        width:'100%',
                                        alignItems: 'center',
                                    }}
                                      title="Host Info"
                                      type="outline"
                                      
                                    />
                                </View>    

                                <View style={{ flex:1,alignSelf: 'flex-end', marginRight: 20}}>
                                    <Button
                                    buttonStyle={{
                                        width:'100%',
                                        alignItems: 'center',
                                    }}
                                      title="Call Now"
                                      type="outline"
                                      
                                    />
                                </View>    
                            </View>    
                            <FbImages Imstyle={{top:40,left:0}} />
                            <View style={{ width:'100%',top:50,marginBottom:24, backgroundColor:'rgba(0,0,0,0)' }}>
                                <View style={{ flex:1, padding:10}}>
                                    <Text style={{ fontSize: 18 }}>Ratings and Reviews</Text>
                                </View>

                                <View style={{flexDirection:'row', padding:10}}>
                                    <View style={{ flex:1, alignItems: 'flex-start', marginRight: 20}}>
                                        <Text style={{ fontSize: 28,top:10 }}>3/5</Text>
                                    </View>    
                                    <View style={{ flex: 0.5, alignItems: 'flex-end'}}>    
                                        <StarRating
                                            disable={true}
                                            maxStars={5}
                                            rating={3}
                                            starSize={20}

                                        />
                                        <Text style={{ fontSize: 15,color:' rgb(169,169,169)',top:10 }}>Details</Text>
                                        
                                    </View>
                                </View>    
                                <View style={{width:'100%',paddingTop:0}}>
                                    <Comments />
                                    <TouchableOpacity style={{flex:1,top:40,justifyContent:'center',alignItems:'center',borderTopWidth:1,borderBottomWidth:1,borderTopColor:' rgb(169,169,169)',borderBottomColor:' rgb(169,169,169)',paddingTop:10,paddingBottom:10}}>
                                        <Text style={{ fontSize: 15,color:' rgb(169,169,169)'}}>View All Comments</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{width:'100%',top:100,paddingBottom:160}}>
                                    <Text style={{ fontSize: 24, paddingHorizontal:10 }}>
                                        Homes nearby
                                    </Text>
                                    <View style={{ paddingHorizontal:10, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
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
                            
                        </View>
                
                        </View>
                

                
                
                
            </View>
            </ScrollView>
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