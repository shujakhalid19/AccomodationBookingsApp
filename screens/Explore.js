import React, { Component } from 'react'
import ExploreMain from './components/Explore/index'
import MainListing from './components/Main/index'
import Search from './components/Explore/search'
import oneCheckOut from './components/Main/checkOutOne.js'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const Stack= createStackNavigator({
  Home:{screen:ExploreMain,navigationOptions: {headerShown: false}},
  Search:{screen:Search,navigationOptions: {headerShown: false}},
  Profile:{screen:MainListing,navigationOptions: {headerShown: false}},
  BookNow:{screen:oneCheckOut,navigationOptions: {headerShown: false}}
})
const AppContainer = createAppContainer(Stack);

export default class Explore extends Component{
  render(){
      return <AppContainer />
  }
}