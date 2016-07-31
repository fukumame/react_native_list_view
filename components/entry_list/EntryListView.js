import React, { Component } from 'react';
import ReactNative from 'react-native';
import EntryDetail from './EntryDetail.js';
import Entry from './Entry.js';
import Entries from './Entries.js';
import globalStyles from 'qiita-global-styles';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

var QIITA_REACTJS_ENTRY_URL = "https://qiita.com/api/v2/tags/reactjs/items";

class EntryListView extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoaded: false
    };
  }

  _fetchData() {
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
  }

  componentDidMount(){
    this._fetchData();
  }

  _viewLoadingData(){
    return (
      <View style={globalStyles.activityIndicator}>
        <ActivityIndicator />
        <View>
           <Text style={globalStyles.loadingMessage}>Pleae wait a second ...</Text>
        </View>
      </View>
    )
  }

  render() {
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
}
export default EntryListView;
