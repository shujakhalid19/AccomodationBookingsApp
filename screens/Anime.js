import React from 'react';
import {View} from "react-native";
import Main from './components/Main/index'
import OneCheckOut from './components/Main/checkOutOne';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Home from './components/Explore/Home';
const Stack= createStackNavigator({
    
    Home:{
      screen:Main,
      navigationOptions: {
          headerShown: false,
      }
    },
    BookNow:{
        screen:OneCheckOut,
        navigationOptions: {
            headerShown: false,
        }
      },
      
  },
  {initialRouteNameinitialRouteName:Home})
  



class MainListing extends React.Component {
    render(){
        return(
            <AppContainer />
        )
    }
}


const AppContainer = createAppContainer(Stack);
export default MainListing