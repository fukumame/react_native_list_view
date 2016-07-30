'use strict';
var React = require('react');
var ReactNative = require('react-native');
var EntryDetail = require('./EntryDetail.js');
var Entry = require('./Entry.js');
var Entries = require('./Entries.js')
var globalStyles = require('qiita-global-styles');
var {
  Text,
  View,
  ActivityIndicator
} = ReactNative;

var QIITA_REACTJS_ENTRY_URL = "https://qiita.com/api/v2/tags/reactjs/items";

var EntryListView = React.createClass({

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
  _viewLoadingData: function(){
    return (
      <View style={globalStyles.activityIndicator}>
        <ActivityIndicator />
        <View>
           <Text style={globalStyles.loadingMessage}>Pleae wait a second ...</Text>
        </View>
      </View>
    )
  },
  render: function() {
    if(this.state.isLoaded){
      return(
        <Entries data={this.state.dataSource} navigator={this.props.navigator} />
      );
    } else {
      return(
        this._viewLoadingData()
      );
    }
  }
});

module.exports = EntryListView;
