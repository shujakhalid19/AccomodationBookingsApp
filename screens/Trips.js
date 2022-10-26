import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet
} from "react-native";
import Header from './components/utils/Header';


class Trips extends Component {

    onChangeText(text){
        //handle Text
    }

    render() {
        return (
            <View style={styles.body}>
                <Header 
                    title="New Listing"
                    titleStyle={{
                        fontSize:20,
                        color:'#000',
                        left:8
                    }}
                    rightTitle={
                        <Text style={[styles.bold,{fontSize:16 ,color:'cornflowerblue'}]}>Publish</Text>
                    }
                  />
                  <ScrollView>
                  

                      <View style={{flex:1}}>
                        <View style={{padding:10,backgroundColor:'#fff'}}>
                            <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>Title</Text>
                             <TextInput
                              style={{ height: 40,color:'#000' }}
                              placeholder="Listing Title"
                              onChangeText={(text)=>this.onChangeText(text)}
                              
                            />
                        </View>
                      </View>

                  <View style={{flex:1,top:20}} >   
                  <View style={{}}>
                    <View style={{padding:10,backgroundColor:'#fff'}}>
                        <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>Description</Text>
                         <TextInput
                          style={{ height: 40,color:'#000' }}
                          placeholder="Listing Title"
                          onChangeText={(text)=>this.onChangeText(text)}
                          
                        />
                    </View>
                  </View>

                  <View style={{}}>
                    <View style={{padding:10,backgroundColor:'#fff'}}>
                        <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>Price</Text>
                         <TextInput
                          style={{ height: 40,color:'#000' }}
                          placeholder="Listing Title"
                          onChangeText={(text)=>this.onChangeText(text)}
                          
                        />
                    </View>
                  </View>

                  <View style={{}}>
                    <View style={{padding:10,backgroundColor:'#fff'}}>
                        <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>Category</Text>
                         <TextInput
                          style={{ height: 40,color:'#000' }}
                          placeholder="Listing Title"
                          onChangeText={(text)=>this.onChangeText(text)}
                          
                        />
                    </View>
                  </View>
                  </View>

                  <View style={{flex:1,top:50}}>
                    <View style={{padding:10,backgroundColor:'#fff'}}>
                        <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>Location</Text>
                         <TextInput
                          style={{ height: 40,color:'#000' }}
                          placeholder="Listing Title"
                          onChangeText={(text)=>this.onChangeText(text)}
                          
                        />
                    </View>
                  </View>

                  <View style={{flex:1,top:50}}>
                    <View style={{padding:10,backgroundColor:'#fff'}}>
                        <Text style={[styles.bold,{fontSize:18,color:'#555'}]}>Add Photos</Text>

                         <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{paddingTop:20}}
                            >
                                <View style={{width:100,height:100,backgroundColor:'pink',borderRadius:12,marginRight:10}}>
                                </View>

                                <View style={{width:100,height:100,backgroundColor:'pink',borderRadius:12,marginRight:10}}>
                                </View>

                                <View style={{width:100,height:100,backgroundColor:'pink',borderRadius:12,marginRight:10}}>
                                </View>
                                <View style={{width:100,height:100,backgroundColor:'pink',borderRadius:12,marginRight:10}}>
                                </View>
                        </ScrollView>
                         
                    </View>
                  </View>
                  
                  </ScrollView>

            </View>
        );
    }
}
export default Trips;

const styles = StyleSheet.create({
     body:{ flex: 1},
    div:{paddingTop:0,top:0,marginBottom:20,backgroundColor:'#fff'},
    borderBtm:{borderBottomWidth:1,borderBottomColor:'#d4d4d4'},
    borderTop:{borderTopWidth:1,borderTopColor:'#d4d4d4'},
    divInline:{paddingTop:15,paddingBottom:5,top:0,marginBottom:5,flexDirection:'row',zIndex: 5},
    Logo:{fontSize: 25,fontWeight:"bold" }, 
    bold:{fontWeight:"bold" },
});