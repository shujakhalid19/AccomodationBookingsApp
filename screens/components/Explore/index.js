import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './Category'
import Home from './Home'
import Tag from './Tag'

const { height, width } = Dimensions.get('window')
class ExploreMain extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 70
        this.endHeaderHeight = 50
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 120 + StatusBar.currentHeight
            this.endHeaderHeight = 80 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [-30, 10],
            extrapolate: 'clamp'
        })
        this.animatedMarginTop = this.animatedHeaderHeight.interpolate({
            inputRange: [this.endHeaderHeight, this.startHeaderHeight],
            outputRange: [50, 30],
            extrapolate: 'clamp'
        })

return(
     <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Animated.View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search',{user: 'ss',body:'a.body'})} 
                        style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 10 : null
                        }}>
                            <Icon name="ios-locate" size={20} style={{ marginRight: 10,top:10 }} />
                            <Text
                                style={{ flex: 1, fontWeight: '700',padding:10, backgroundColor: 'white',color:'grey' }}
                            >
                            Try New Delhi
                            </Text>
                            <Icon name="ios-search" size={20} color={'cornflowerblue'} style={{ marginLeft: 10,top:10 }} />
                        </TouchableOpacity>
                        <Animated.View
                            style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity }}
                        >
                         <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            >
                            <Tag name="Delhi" />
                            <Tag name="Mumbai" />
                            <Tag name="Pune" />
                            <Tag name="Sydney" />
                            <Tag name="London" />
                            <Tag name="Melbourne" />
                            <Tag name="St.Petersburg" />
                            </ScrollView>

                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [
                                { nativeEvent: { contentOffset: { y: this.scrollY } } }
                            ],{useNativeDriver: false}
                        )}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10 }}>
                                What can we help you ?
                            </Text>

                            <View style={{ height: 130, marginTop: 20,marginRight:10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={{
                            uri:
                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                          }}

                                        name="Hostels"
                                    />
                                    <Category imageUri={{
                            uri:
                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                          }}
                                        name="Properties"
                                    />
                                    <Category imageUri={{
                            uri:
                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                          }}
                                        name="Rentals"
                                    />

                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    A big heading goes here
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort

                                </Text>
                                <View style={{ width: width - 20, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{
                            uri:
                              'https://images.unsplash.com/photo-1565706107014-484a0300d74b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                          }}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 10 }}>
                                Homes around the world
                            </Text>
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
                    </ScrollView>

                </View>
            </SafeAreaView>
            )
    }   
}

export default ExploreMain;