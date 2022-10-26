import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Animated,
    StyleSheet,
    BackHandler,
    Dimensions
} from "react-native";
import {Button,Badge } from 'react-native-elements'
import StarRating from 'react-native-star-rating'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../Explore/Home'
import FbImages from './multiPhoto'
import Comments from './comments'
const { width } = Dimensions.get('window')

var HEADER_MAX_HEIGHT = 200;
var HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Main extends React.Component {
    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state={
            scrollY: new Animated.Value(0),
            saved:false,
        }
    }
    
componentWillUnmount() {
    console.log("WE ARE HERE");
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
}

handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
}


    saveListing(data){
        //console.warn(this.state.saveUI);
        this.setState({
            saved:!data
        })
        //(this.state.flag)? this.setState({saveUI:,flag:0}) : this.setState({saveUI:'bookmark',flag:1});
    }   

    render() {
          const headerHeight = this.state.scrollY.interpolate({
              inputRange: [0, 140],
              outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
              extrapolate: 'clamp'
            });
          const divMarg = this.state.scrollY.interpolate({
              inputRange: [0, 80],
              outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
              extrapolate: 'clamp'
            });

           const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0,0,10],
      extrapolate: 'clamp'
    });

            const Ascale = this.state.scrollY.interpolate({
              inputRange: [0, 80],
              outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
              extrapolate: 'clamp'
            });
            const badgeOpacity = this.state.scrollY.interpolate({
  inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
  outputRange: [1, 1, 0],
  extrapolate: 'clamp',
});

                 const nameOpacity = this.state.scrollY.interpolate({
  inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
  outputRange: [0, 0, 1],
  extrapolate: 'clamp',
});
    
        return (
            
          <View style={{flex:1,backgroundColor:'#444'}}>
                <Animated.View
                    style={{
                        position:'absolute',
                        width:'100%',
                        height:headerHeight,
                        backgroundColor:'black'
                    }}
                >

                    <Image
                        style={{width:'100%',height:'100%'}}
                        resizeMode='cover'
                        source={{
                            uri:
                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                          }}
                    />

                    <Animated.View style={{ position:'absolute',width:'100%',flexDirection:'row', top:20, paddingRight: 8,backgroundColor:'rgba(0,0,0,0.1)',opacity:nameOpacity }}>
                        <View style={{ flex:1, paddingLeft: 10}}>
                            <Text style={{ fontSize: 26, color: '#fff', fontWeight: 'bold'}}><Icon name='arrow-back' size={26} onPress={()=>this.props.navigation.goBack()} /> 338 Spear Hostel</Text>
                        </View>  
                        <TouchableOpacity style={{ flex: 0.2, alignItems: 'flex-end',  marginTop:4, paddingLeft: 10 }} onPress={()=>this.saveListing(this.state.saved)}>
                            <Icon name={(this.state.saved) ? 'ios-bookmark-outline': 'bookmark'} color={'#fff'} size={32}/>   
                        </TouchableOpacity>  
                    </Animated.View>

                    <Animated.View style={{ position:'absolute', top:'auto',bottom:24, paddingRight: 8,backgroundColor:'rgba(0,0,0,0.1)',opacity:badgeOpacity }}>
                            <Badge containerStyle={{backgroundColor:'#555',borderRadius:14,padding:8}} badgeStyle={{backgroundColor:'#555',borderWidth:0}} textStyle={{color:'#fff'}}
                                value={<Text style={{color:'#fff'}}><Icon name="images" size={16}/> 88 Photos</Text>} 
                             />
                    </Animated.View>


                </Animated.View>
                 <Animated.View
                    style={{
                        flex:1,
                        width:'100%',
                        borderTopRightRadius:12,
                        borderTopLeftRadius:12,
                        top:headerHeight,
                        backgroundColor:'#eee'
                    }}
                >
                <ScrollView
          
          scrollEventThrottle={20}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ],{useNativeDriver: false})}
        >
                 <View
                    style={{
                        flex:1,
                        width:'100%',
                        paddingTop:20
                    }}
                >

                        <View style={{ flex:1,backgroundColor:'#fff',alignItems: 'flex-start', marginTop:-20, paddingTop: 20, paddingLeft:0,borderTopLeftRadius:14,borderTopRightRadius:14 }}>
                            <View style={{flexDirection:'row',left:10}}>
                                <View style={{ flex: 1, alignItems: 'flex-start'}}>    
                <Text style={{fontSize: 28,fontWeight:'bold'}}>338 Spear Hotel</Text>
                                    <Text style={{ fontSize: 18,top:10 }}>$12000{'\n'}</Text>
                                </View>
                                <TouchableOpacity style={{ flex:0.2, alignItems: 'flex-end', marginRight: 20}} onPress={()=>this.saveListing(this.state.saved)}>
                                    <Icon name={(this.state.saved) ? 'ios-bookmark-outline': 'bookmark'} color={'#000'} size={42}/>   
                                </TouchableOpacity>
                            </View>
                            
                            <View style={{ flex:1, alignSelf: 'flex-start',left:10}}>    
                                
                                    <Text style={{ fontSize: 15,color:' rgb(169,169,169)',top:10 }}>Detailss</Text>
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
                                      title="Book Now"
                                      type="outline"
                                      onPress={()=>this.props.navigation.navigate('BookNow')}
                                    />
                                </View>    
                            </View>    
                            <FbImages Imstyle={{top:40,left:0}} />
                            <View style={{ width:'100%',top:50,marginBottom:24, backgroundColor:'rgba(0,0,0,0)' }}>
                                
                                <View style={{flexDirection:'row', padding:10,justifyContent:'center'}}>
                                    <View style={{ flex:1, alignItems: 'flex-start', marginRight: 10,top:8}}>
                                    <Text style={{ fontSize: 22}}>Ratings and Reviews</Text>
                                        <Text style={{ fontSize: 28}}>3/5</Text>
                                    </View>    
                                    <View style={{ flex: 0.5, alignItems: 'flex-end',justifyContent:'center'}}>
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
                </ScrollView>
                </Animated.View>
           </View>
                
                
            
        );
    }
}
export default Main;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});