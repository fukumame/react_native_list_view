import React, { Component } from 'react';
import ReactNative from 'react-native';
import Entry from './Entry.js';
import globalStyles from 'qiita-global-styles';
import {
  ScrollView
} from 'react-native';

class Entries extends Component {
  render(){
    var navigator = this.props.navigator;
    var data = this.props.data;
    var entriesViewData = data.map(
      function(entry, index) {
        return(
          <Entry key={index} entryData={entry} navigator={navigator} />
        );
      }
    );
    return(
      <ScrollView style={globalStyles.listView} >
        {entriesViewData}
      </ScrollView>
    );
  }
}

export default Entries;
