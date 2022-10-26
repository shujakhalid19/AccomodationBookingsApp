import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList
} from 'react-native';

export default class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"Frank Odalthh",    comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"John DoeLink",     comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"March SoulLaComa", comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"Finn DoRemiFaso",  comment:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
      ]
    }
  }

  render() {
    const laplist=this.state.data.map((Notification,i)=>{
      return(
        <View key={i} style={styles.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={styles.image} source={{uri: Notification.image}}/>
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{Notification.name}</Text>
                  <Text style={styles.time}>
                    9:58 am
                  </Text>
                </View>
                <Text style={{color:"#888"}}>{Notification.comment}</Text>
              </View>
            </View>
      )
    })

    return (
        <View style={{top:20}}>
          {laplist}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  container: {
    marginTop:40,
    paddingRight: 16,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 10,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:10
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    color:"#808080",
    fontWeight:"bold",
  },
}); 