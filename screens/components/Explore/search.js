import React from "react";
import {
    View,
    TextInput,
    Text,
    Platform,
    FlatList,
    ScrollView,
    BackHandler,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Tag from './Tag';
import Saved from '../Saved/Saved'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

function fetchFunc(url,data,call){
    fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => call(json))
    .catch(err=>{
        console.warn(err)
    })
}

const Item = ({ title }) => (
    <View style={{flex:1}}>
      <Text>title</Text>
    </View>
  );

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state={
            loading:false,
            data:[]
        }
    }
    
    

    componentDidMount(){

        
        
    }

    updateSearch = (search) => {

        this.setState({ loading:true });
    
        if(search.length>=3){
            fetchFunc('http://192.168.42.242/HostelCDN/requests/company.php',{search_data:search},resp=>{
                this.setState({
                    data:resp
                });
            })
        }else if(search==""){
            this.setState({ loading:false });
        }
        
      };

    UNSAFE_componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        //this.props.navigation.pop()
        return true;
    }
    renderME(item){
        <Item title={item.title} />
    }

    render(){
        
        return(
            <View style={{flex:1}}>
                 <View style={{ height: this.animatedHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 10,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 10 : null
                        }}>
                            <Icon name="arrow-back" size={20} style={{ marginRight: 10,top:15 }} />
                            <TextInput
                                autoFocus={true} 
                                underlineColorAndroid="transparent"
                                placeholder="Try New Delhi"
                                placeholderTextColor="grey"
                                onChangeText={this.updateSearch}
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                            <Icon name="ios-locate" size={25} style={{ marginLeft: 10,top:10 }} />
                        </View>
                        <View
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

                        </View>
                      
                    </View>
                    <View style={[{flex:1,top:30}]}>
            		
                    <FlatList
                        data={this.state.data}
                        //data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index, separators }) => (
                            <Saved 
                                key={index}
                                data={item}
                                title={item.name}
                                cardStyle={{
                                    marginBottom:20
                                }}
                                rightIcon='chevron-forward-outline'
                            />
                          )}
                    />

                </View>
            </View>
        )
    }
}