'use strict';

var React = require('react');
var ReactNative = require('react-native');
var EntryDetail = require('./EntryDetail.js');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator
} = ReactNative;

var QIITA_REACTJS_ENTRY_URL = "https://qiita.com/api/v2/tags/reactjs/items";

var EntryList = React.createClass({

  _fetchData: function() {
    fetch(QIITA_REACTJS_ENTRY_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        // dataSource: this.state.dataSource.cloneWithRows(responseData),
        dataSource: responseData,
        isLoaded: true
      });
    })
    .done();
  },
  getInitialState: function() {
    return(
      {
        dataSource: [],
        isLoaded: false
      }
    );
  },
  componentDidMount: function(){
    this._fetchData();
  },
  _renderEntries: function(entries){
    var entriesSize = entries.length
    var outputs = [];
    for(var i=0; i<entriesSize; i++) {
      outputs.push(this._renderEntry(entries[i], i));
    }
    return outputs;
  },
  _renderEntry: function(entry, index){
    return (
      <TouchableHighlight key={index} onPress={() => this._onPressed(entry)}>
        <View>
          <View style={styles.container}>
            <Image source={{uri: entry.user.profile_image_url}} style={styles.thumbnail}/>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{entry.title}</Text>
              <Text style={styles.name}>{entry.user.id}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  },
  _onPressed: function(entry) {
  this.props.navigator.push({
    title: entry.title,
    component: EntryDetail,
    passProps: { url: entry.url }
  })
  },
  _viewLoadingData: function(){
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator />
        <View>
           <Text style={styles.loadingMessage}>Pleae wait a second ...</Text>
        </View>
      </View>
    )
  },
  render: function() {
    if(this.state.isLoaded){
      return(
        <ScrollView style={styles.listView} >
          {this._renderEntries(this.state.dataSource)}
        </ScrollView>
      );
    } else {
      return(
        this._viewLoadingData()
      );
    }
  }
});

var styles = StyleSheet.create({
  separator: {
         height: 1,
         backgroundColor: '#DDDDDD'
  },
  listView: {
         backgroundColor: '#F5FCFF'
  },
  container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 10
  },
  thumbnail: {
      width: 100,
      height: 100,
      marginRight: 10
  },
  rightContainer: {
      flex: 1
  },
  title: {
      fontSize: 20,
      marginBottom: 8
  },
  name: {
      color: '#656565'
  },
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingMessage: {
    flex: 1,
    fontSize: 20,
    color: '#656565',
  }
});

module.exports = EntryList;
