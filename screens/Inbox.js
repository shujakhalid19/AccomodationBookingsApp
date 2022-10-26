import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {createAppContainer} from 'react-navigation'; 

import {createStackNavigator} from 'react-navigation-stack';
import MainListing from './Anime';
import Header from './components/utils/Header';
import Saved from './components/Saved/Saved';



const Stack= createStackNavigator({
  Home:{
    screen:SavedListings,
    navigationOptions: {
        headerShown: false,
    }
  },
  Profile:{
    screen:MainListing,
    navigationOptions: {
        headerShown: false,
    }
  },
})


function SavedListings(){
    return(
         <View style={{flex:1}}>
                 <Header 
                    title="Saved Listings"
                    titleStyle={{
                        fontSize:20,
                        color:'#000',
                        left:8
                    }}
                    rightTitle={null}
                  />

                  <Saved 
                    data={{title:"saved",rightTitle:"No"}}
                  />
            </View>
        )
}

class Inbox extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const AppContainer = createAppContainer(Stack);
export default Inbox;
