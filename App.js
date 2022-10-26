import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import MainListing from './screens/Anime'
import Events from './screens/events'
import Trips from './screens/Trips'
import Profile from './screens/Profile'
import Calendar from './screens/calendar'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Nearby" tabBarOptions={{activeTintColor: 'cornflowerblue',style: {borderTopWidth:1}}}>
        <Tab.Screen name="Explore" component={Explore} options={{tabBarIcon:({ color, size })=>( <Icon name="ios-search-outline" color={color} size={size}/>)}} />
        <Tab.Screen name="Events" component={Events} options={{tabBarIcon:({ color, size })=>(<Icon name="ios-nuclear-outline" color={color} size={size}/>    )}} />
        <Tab.Screen name="Trips" component={Trips} options={{tabBarIcon:({ color, size })=>(<Icon name="add-circle-outline" color={color} size={size} />  )}} />
        <Tab.Screen name="Saved" component={Inbox} options={{tabBarIcon:({ color, size })=>(<Icon name="ios-bookmark-outline" color={color} size={size}/>    )}} />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({ color, size })=>(<Icon name="ios-person-outline" color={color} size={size}/>    )}} />
    </Tab.Navigator>
  );
}


export default class App extends React.Component{   
render(){
    return(
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



