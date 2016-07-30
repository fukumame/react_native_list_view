'use strict';
var React = require('react');
var ReactNative = require('react-native');
var Entry = require('./Entry.js');
var globalStyles = require('qiita-global-styles');
var {
  ScrollView
} = ReactNative;


var Entries = React.createClass({
  render: function(){
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
})

module.exports = Entries;
