import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
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
import Saved from './components/Saved/Saved';
import HRooms from './components/RoomSelect/Room';
import MainListing from './Anime';
import Modal from 'react-native-modal';
const { height, width } = Dimensions.get('window') 
 

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom:false,
    	dateSelected:false,	
    	selectedStartDate: null,
  		selectedEndDate: null,
  		isModalVisible: false,
      hostelRooms:[
        {
          id:'a2e23ad',
          name:'Standard single bed private room',
          price:'400',
          bprice:'130'
        },
        {
          id:'b2e23ad',
          name:'Shared room 4 bed',
          price:'300',
          bprice:'99'
        },
      ]
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
 
  onDateChange(date, type) {

  	
    if (type === 'END_DATE') {
    	console.log(this.state.selectedStartDate)
      this.setState({
      	dateSelected:true,
        selectedEndDate: moment(date).format("ddd, Do MMM"),
      });
    } else {

      this.setState({
      	selectedStartDate: moment(date).format("ddd, Do MMM"),
        selectedEndDate: null,
      });
    }
  }
 
    toggleRadio(radio){
    this.setState({
      selectedRoom:!radio
    })
  }


  render() {

    
    const newRender= ({item}) => {
        return Object.entries(item).map(([key, val], i) => {
            return (
              
                <HRooms key={key} data={val} date={'startDate'} />
              
              
            )
        });
    }


    const { dateSelected,selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2021, 9, 19);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
 
    return (
     		 <View style={styles.container}>
         <Header 
                    title="Select Room"
                    titleStyle={{
                        fontSize:20,
                        color:'#000',
                        left:8
                    }}
                    rightTitle={null}
                  />
        
						<TouchableOpacity style={{padding:10,backgroundColor:'#fff'}} onPress={this.toggleModal}>
	                        <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>
                            <Icon name="calendar-outline" size={22} /> { (dateSelected) ? startDate+' - '+endDate  : 'Select duration'}
                        	</Text>
                        </TouchableOpacity>

                     <View style={{padding:10,backgroundColor:'#fff'}}>
                        <Text style={[styles.bold,{fontSize:18,color:'#111',fontWeight:'bold'}]}>Select Dorm {'\n'}</Text>

                        <FlatList
                data={[this.state.hostelRooms]}
                renderItem={newRender}
                keyExtractor={item => item.id}
                />
                        

                        </View>
                          
                       



                  
    
          

  <View style={{flex: 1}}>
       
      <Modal testID={'modal'}
      	isVisible={this.state.isModalVisible}
	   	backdropTransitionOutTiming={50}
       	onBackButtonPress={this.toggleModal}
       	style={styles.view}
		>

        <View style={{backgroundColor:'#fff',paddingTop:10,paddingBottom:20}}>
        	<CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          horizontal={false}
          width={width}
          height={height}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange}
        /> 
 		</View>
      </Modal>

      
        </View>
      </View>
    );
  }
}
 
 
export default Rooms;

const styles = StyleSheet.create({
	 view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  inline:{
    flexDirection:'row'
  },
  bold:{
    fontWeight:'bold'
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