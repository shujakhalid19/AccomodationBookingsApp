import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import Header from './components/utils/Header';
import {createAppContainer} from 'react-navigation'; 

import {createStackNavigator} from 'react-navigation-stack';

import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import Rooms from './roomSelect';
import Main from './components/Main/index';

//import Button from 'react-native-button';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window') 
 

const Stack= createStackNavigator({
  Home:{
    screen:Rooms,
    navigationOptions: {
        headerShown: false,
    }
  },
  Profile:{
    screen:Main,
    mode: 'modal',
    navigationOptions: {
        headerShown: false,
    }
  },
})



class Calendar extends Component {
 
  render() {
    
    return (
     	<AppContainer />
    );
  }
}
 
 const AppContainer = createAppContainer(Stack);
export default Calendar;

const styles = StyleSheet.create({
	 view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
    content: {
    	flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});