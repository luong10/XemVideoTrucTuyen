import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/MiniCard';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dataSearch: [],
    };
  }
  fetchData() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.text}&type=video&key=AIzaSyAawyFAI1MK_0H6PjaiGpEOxf6llTNNi-o&regionCode=VN&maxResults=50`,
    )
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
        this.setState({dataSearch: data.items});
      });
  }
  render() {
    //const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 12,
            elevation: 3,
            backgroundColor: 'white',
          }}>
          <Ionicons  onPress={()=>this.props.navigation.goBack()} name="md-arrow-back" size={32} color="#8BC34A"></Ionicons>
          <TextInput
            style={{
              width: '70%',
              padding: 0,
              fontSize: 19,
              color: '#4D8312',
              backgroundColor: '#EDEDED',
            }}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}></TextInput>
          <TouchableOpacity onPress={() => this.fetchData()}>
            <Ionicons name="md-send" size={32} color="#8BC34A"></Ionicons>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.dataSearch}
          renderItem={({item}) => {
            return (
              <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                publishedAt={item.snippet.publishedAt}

              />
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </View>
    );
  }
}
